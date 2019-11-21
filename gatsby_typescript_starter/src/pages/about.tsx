import * as React from "react";
import Link from "gatsby-link";
import { Layout } from "../components/layout";

type Props = {};

export default class About extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return(
                <Layout>
                <h1>about me</h1>
                <p>I currently work full-time software engineer for a company.</p>
                <h3>contact</h3>
                <p>linkedin</p>
                <p><a href="https://github.com/koji/" target="_blank">Github</a></p>
                <p>instagram</p>
                <p>email</p>
                <Link to="/">Go back to the homepage</Link>
                </Layout>
        );
    }
}
