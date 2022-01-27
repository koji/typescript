import Link from 'next/link';

export const Nav = () => (
    <div className="my-nav">
        <img src="/static/test.jpg" alt="sample image" height="50" />
        <Link href='/'>
            <a>home</a>
        </Link>
        <Link href='/about'>
            <a>about</a>
        </Link>
    </div>
)