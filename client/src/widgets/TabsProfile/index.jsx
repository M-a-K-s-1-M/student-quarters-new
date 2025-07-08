import './styles.scss'
import { Tabs } from '@mantine/core'
import { FaBookmark, FaCog, FaComment } from "react-icons/fa";
import { SettingsProfile } from '../SettingsProfile'
import { FavoritesDormsProfile } from '../FavoritesDormsProfile'
import { ReviewsUserProfile } from '../ReviewsUserProfile'

export function TabsProfile() {
    return (
        <Tabs radius="md" defaultValue="settings" className='tabs-profile'>
            <Tabs.List >
                <Tabs.Tab value="settings" leftSection={<FaCog className='tabs-profile__icon' />}>Настройки</Tabs.Tab>

                <Tabs.Tab value="favorites" leftSection={<FaBookmark className='tabs-profile__icon' />}>Избранное</Tabs.Tab>

                <Tabs.Tab value="reviews" leftSection={<FaComment className='tabs-profile__icon' />}>Мои отзывы</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="settings">
                <SettingsProfile />
            </Tabs.Panel>

            <Tabs.Panel value="favorites">
                <FavoritesDormsProfile />
            </Tabs.Panel>

            <Tabs.Panel value="reviews">
                <ReviewsUserProfile />
            </Tabs.Panel>
        </Tabs >
    )
}
