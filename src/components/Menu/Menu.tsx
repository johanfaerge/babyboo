import React from 'react';
import styles from './Menu.module.css'
import { ApiService } from '../../services/ApiService';

interface IMenuProps {

}

const IMenu: React.FunctionComponent<IMenuProps> = (props: React.PropsWithChildren<IMenuProps>) => {
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
    const [search, setSearch] = React.useState<string>("");

    const navbar: React.RefObject<HTMLDivElement> = React.createRef();

    function toggleMenu() {
        if (!navbar.current) return;

        if (!menuOpen) {
            navbar.current.style.maxHeight = "100%";
            setMenuOpen(true);
        } else {
            navbar.current.style.maxHeight = "60px";
            setMenuOpen(false);
        }
    }

    return (
        <div ref={navbar} className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img src="./Screenshot_2.png" alt='img not found'></img>
            </div>
            <ul className={styles.menu}>
                <li>
                    <a href="/">SERIER</a>
                </li>
                <li>
                    <a href="/">VUGGE</a>
                </li>
                <li>
                    <a href="/">BØRNESENGE</a>
                </li>
                <li>
                    <a href="/">OPBEVARING</a>
                </li>
                <li>
                    <a href="/">HØJSTOL</a>
                </li>
                <li>
                    <a href="/">PUSLE</a>
                </li>
                <li>
                    <a href="/">TEKSTILER</a>
                </li>
                <li>
                    <a href="/">TILBEHØR</a>
                </li>
                <li>
                    <a href="/">RESERVEDELE</a>
                </li>
            </ul>
            <div className={styles.menuContainer} onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
            </div>
        </div>
    );
}

export default IMenu;