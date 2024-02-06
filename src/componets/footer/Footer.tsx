import { FC } from 'react';
import { Link } from 'react-router-dom';

import telegram from 'assets/tel.png';
import insta from 'assets/inst.png';
import twitter from 'assets/twit.png';
import discord from 'assets/disc.png';

import styles from './Footer.module.css';

const Footer: FC = () => {
    return (
        <div className="container">
            <div className={styles.footer}>
                <div>
                    <Link to="/anime">
                        <strong>Animos.com</strong>
                    </Link>
                </div>
                <div className={styles.footer_socials}>
                    <a
                        href="https://web.telegram.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={telegram} alt="telegram" />
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={twitter} alt="twit" />
                    </a>
                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={insta} alt="inst" />
                    </a>
                    <a
                        href="https://discord.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={discord} alt="disc" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
