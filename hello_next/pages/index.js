import Link from 'next/link';
import Head from 'next/head';
import { Layout } from '../components/Layout';

const Index =() => {
    return(
        <Layout 
          mainTitle={'my page'} 
          footer={'this is written in nextjs'}
        >
            <Head>
                <title>home</title>
            </Head>
            <h2>hello world</h2>
            <Link href='/about'>
                <a>About</a>
            </Link>
            <p>
                demo text demo text demo text demo text demo text demo text demo text demo text demo text demo text
            </p>
        </Layout>
    )
}

export default Index;