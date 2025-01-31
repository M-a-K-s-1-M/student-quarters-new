import { useState } from "react"

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <form>
                <input type="text" value={email} onChange={evt => setEmail(evt.target.value)} placeholder="email" required />

                <input type="text" value={password} onChange={evt => setPassword(evt.target.value)} placeholder="password" required />

            </form>
        </div>
    )
}
