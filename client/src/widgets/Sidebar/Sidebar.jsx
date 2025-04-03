import { Box, Burger, Flex, Image, NavLink, Space, Stack, Text, Title } from '@mantine/core';
import { FiMapPin } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";

import useSidebar from '../../app/stores/useSidebar';
import s from './Sidebar.module.scss';
import useUser from '../../app/stores/useUser';


export default function Sidebar() {
    const { isActiveSidebar, activeTab, setIsActiveSidebar, setActiveTab } = useSidebar();
    const { isAuth } = useUser();

    return (
        <Box component='div' className={`${s.sidebar_container} ${isActiveSidebar && s.active}`}>
            <Flex justify='center' align='end' gap='0.2rem' px='.5rem' py='.3rem'>
                {isActiveSidebar &&
                    <>
                        <Image h='2rem' w='2rem' src='../../../public/logoWhite.png' />
                        <Title order={2} size='1.2rem'>StudentQuarters</Title>
                    </>
                }
                <Burger opened={isActiveSidebar} onClick={() => setIsActiveSidebar(!isActiveSidebar)} color='white' size='md' align='end' />
            </Flex>

            <Space h='xl' />

            <Stack align={isActiveSidebar ? 'stretch' : 'center'} gap='xl'>
                <div className={`${s.nav_link} ${activeTab === 'map' && s.active}`} onClick={() => setActiveTab('map')}>
                    <Flex gap='.3rem' align='center'>
                        <FiMapPin className={s.nav_icon} />
                        {isActiveSidebar && <>
                            <Text size='1.4rem'>Карта</Text>
                        </>}
                    </Flex>
                </div>

                <div className={`${s.nav_link} ${activeTab === 'feedback' && s.active}`} onClick={() => setActiveTab('feedback')}>
                    <Flex gap='.3rem' align='center'>
                        <LuMessagesSquare className={s.nav_icon} />
                        {isActiveSidebar && <>
                            <Text size='1.4rem'>Отзывы</Text>
                        </>}
                    </Flex>
                </div>

                {isAuth &&
                    <>
                        <div className={`${s.nav_link} ${activeTab === 'settings' && s.active}`} onClick={() => setActiveTab('settings')}>
                            <Flex gap='.3rem' align='center' >
                                <LuSettings className={s.nav_icon} />
                                {isActiveSidebar && <>
                                    <Text size='1.4rem' >Настройки</Text>
                                </>}
                            </Flex>
                        </div>

                        <div className={`${s.nav_link} ${activeTab === 'logout' && s.active}`} onClick={() => setActiveTab('logout')}>
                            <Flex gap='.3rem' align='center'>
                                <TbLogout2 className={s.nav_icon} />
                                {isActiveSidebar && <>
                                    <Text size='1.4rem'>Выход</Text>
                                </>}
                            </Flex>
                        </div>
                    </>
                }


            </Stack>
        </ Box >
    )
}
