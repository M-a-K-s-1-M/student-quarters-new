const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');


class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' })
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' })

        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await prisma.token.upsert({
            where: {
                userId: userId
            },
            update: {
                refreshToken: refreshToken
            },
            create: {
                userId: userId,
                refreshToken: refreshToken
            }
        })


        return tokenData;
    }

    async removeToken(refreshToken) {
        const tokenData = await prisma.token.delete({
            where: { refreshToken }
        })

        return tokenData;
    }
}

module.exports = new TokenService();