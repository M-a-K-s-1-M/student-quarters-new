const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();
const uuid = require('uuid');
const mailService = require('./mailService');
const tokenService = require('./tokenService');
const ApiError = require('../exceptions/apiError');

class UserService {
    async registration(email, password) {
        const candidate = await prisma.user.findUnique({ where: { email } });
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();
        const user = await prisma.user.create({ data: { email: email, password: hashPassword, } })
        // await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

        const tokens = tokenService.generateTokens({ id: user.id, email: user.email, isActivated: user.isActivated });
        // await prisma.token.create({ data: { userId: user.id, refreshToken: tokens.refreshToken } });
        await tokenService.saveToken(user.id, tokens.refreshToken);

        return {
            ...tokens,
            user: {
                id: user.id,
                email: user.email,
                isActivated: user.isActivated
            }
        }
    }

    async login(email, password) {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            throw ApiError.BadRequest("Пользователь с таким email не найден")
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest("Неверный пароль")
        }

        const tokens = tokenService.generateTokens({ id: user.id, email: user.email, isActivated: user.isActivated });
        await tokenService.saveToken(user.id, tokens.refreshToken);

        return {
            ...tokens,
            user: {
                id: user.id,
                email: user.email,
                isActivated: user.isActivated
            }
        }
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;

    }

    async activate(activationLink) {
        const user = await prisma.user.findUnique({ where: { activationLink } })
        if (!user) {
            throw ApiError.BadRequest('Неккоректная ссылка активации')
        }
        await prisma.user.update({
            where: { id: user.id },
            data: { isActivated: true }
        })
    }
}

module.exports = new UserService();