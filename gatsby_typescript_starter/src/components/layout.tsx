import * as React from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import "../styles/index.scss";
import layoutStyles from "./layout.module.scss";

type Props = {};
export class Layout extends React.Component<Props> {
    render() {
        return (
            <div className={layoutStyles.container}>
                <div className={layoutStyles.content}>
                    <Header />
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
