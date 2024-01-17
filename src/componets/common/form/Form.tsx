import { FC, useRef, useState } from 'react';

import img from 'assets/ava.jpg';

import styles from './Form.module.css';

interface FormProps {
    isSignUp?: boolean;
    title: string;
    handleClick: (
        email: string,
        password: string,
        username: string,
        photo: File | null
    ) => void;
}

const Form: FC<FormProps> = ({ title, isSignUp, handleClick }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);

    const handleContainerClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (imageRef.current) {
                    imageRef.current.src = e.target?.result as string;
                }
            };
            reader.readAsDataURL(file);
            setSelectedPhoto(file);
        }
    };

    return (
        <div className={styles.form}>
            {isSignUp && (
                <>
                    <div
                        className={styles.avatar_container}
                        onClick={handleContainerClick}
                    >
                        <input
                            type="file"
                            accept="image/*"
                            className={styles.file_input}
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                        <img
                            className={styles.avatar_image}
                            src={img}
                            alt="Avatar"
                            ref={imageRef}
                        />
                        <div className={styles.plus}>+</div>
                    </div>
                    <label>Username</label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                        type="text"
                    />
                </>
            )}
            <label>Email</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                type="email"
            />
            <label>Password</label>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                type="password"
            />
            <button
                onClick={() =>
                    handleClick(email, password, username, selectedPhoto)
                }
            >
                {title}
            </button>
        </div>
    );
};

export default Form;
