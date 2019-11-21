import * as React from "react";
import Link from "gatsby-link";
import headerStyles from "./header.module.scss";

type Props ={};

export class Header extends React.Component<Props> {
    render() {
        return (
            <header className={headerStyles.header}>
                <h1>
                    <Link className={headerStyles.title} to="/">
                        Koji Kanao
                    </Link>
                </h1>
                <nav>
                    <ul className={headerStyles.navList}>
                        <li>
                            <Link className={headerStyles.navItem} to="/">Home</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} to="/">Projects</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} to="/">Sketches</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}