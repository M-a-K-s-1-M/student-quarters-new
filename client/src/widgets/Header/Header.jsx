import { ActionIcon, Avatar, Button, Divider, Flex, Group, Text, Title } from '@mantine/core';
import { LuMessagesSquare } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";

import useUser from '../../app/stores/useUser'
import s from './Header.module.scss'
import useSidebar from '../../app/stores/useSidebar';

export default function Header() {
    const { isAuth, setIsAuth } = useUser();
    const { setActiveTab } = useSidebar();

    return (
        <>
            <Flex className={s.header} px='md' py='sm' justify='space-between'>
                <Flex align='center' gap='xs'>
                    {isAuth ? <>
                        <Avatar key='username' name='username' size='md' bd='1px solid white' radius='xl' />
                        <div>
                            <Title size='1.2rem'>Username</Title>
                            <p className={s.email}>test@test.ru</p>
                        </div></>
                        :
                        <>
                            <p>Добро пожаловать, <span style={{ fontWeight: '700' }}>Гость</span></p>
                        </>
                    }
                </Flex>

                <Group gap='md'>
                    <ActionIcon variant='transparent' onClick={() => setActiveTab('feedback')}>
                        <LuMessagesSquare className={s.icon_btn} />
                    </ActionIcon>

                    <ActionIcon variant='transparent'>
                        <IoMdNotificationsOutline className={s.icon_btn} />
                    </ActionIcon>



                    {!isAuth ? <>
                        <Divider orientation='vertical' color='#3C3C3C' />
                        <Button variant='outline' color='white' onClick={() => setIsAuth(true)}>
                            Войти
                        </Button>
                    </>
                        :
                        <>
                            <Divider orientation='vertical' color='#3C3C3C' />
                            <Button variant='outline' color='white' onClick={() => setIsAuth(false)}>Выйти</Button>
                        </>}
                </Group>
            </Flex>
        </>
    )
}
