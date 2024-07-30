
import style from './Footer.module.scss';

import instagram from '../../assets/icons/instagram.svg';
import linkedIn from '../../assets/icons/linkedIn.svg';
import gitHub from '../../assets/icons/gitHub.svg';

const socialLinks = [
    { icon: instagram, url: 'https://www.instagram.com', title: 'Instagram' },
    { icon: linkedIn, url: 'https://www.linkedin.com', title: 'Linkedin' },
    { icon: gitHub, url: 'https://github.com', title: 'GitHub' },
]

export default function Footer() {
    return (
        <footer>
            <div className={style.container}>
                <ul className={style.social}>
                    {socialLinks.map((link, index) => (
                        <li
                            key={index} className={style.social__item}>
                            <a href={link.url}>
                                <img src={link.icon} alt={link.title} />
                            </a>
                        </li>
                    ))}
                </ul>
                <div className={style.copyright}>
                    <p>© 2024</p>
                </div>
            </div >
        </footer>
    );
}
