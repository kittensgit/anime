import { FC, useState } from 'react';

interface FormProps {
    title: string;
    handleClick: (email: string, password: string) => void;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter email"
                type="email"
            />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="enter password"
                type="password"
            />
            <button onClick={() => handleClick(email, password)}>
                {title}
            </button>
        </div>
    );
};

export default Form;
