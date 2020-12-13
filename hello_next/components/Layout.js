import { Nav } from './Nav';

export const Layout = ({ mainTitle, footer, children }) => (
    <div>
        <Nav />
        <h1>{mainTitle}</h1>
        <hr />
        {children}
        <hr />
        <h4>{footer}</h4>
    </div>
);