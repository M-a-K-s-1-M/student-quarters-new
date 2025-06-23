import { Avatar } from '@mantine/core'
import './styles.scss'

export function UserAvatar() {
    const username = 'username';
    return (
        <Avatar name={username} className='user-avatar' color='white' size='xl' />
    )
}
