import Link from 'next/link';
// import { Nav } from '../components/Nav'
import { Layout } from '../components/Layout';

const LinkStyle = {
    color: 'orange',
    borderLeft: '5px solid black',
    padding: '5px'
}

const About = () => (
    <Layout 
          mainTitle={'about page'} 
          footer={'this is written in nextjs'}
        >
        <h2>About page</h2>
        <Link href='/'>
            <a 
              style={LinkStyle}>home</a>
        </Link>
        <p>
          demo text demo text demo text demo text demo text demo text demo text demo text demo text demo text
        </p>
        <style jsx>{`
          p {
              color: indigo;
              font-size: 20px;
          }
        `}</style>
    </Layout>
)

export default About;