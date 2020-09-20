import Document, {Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    render() {
        return(
            <html lang='en'>
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="My SEO React app with nextjs" />
                    <meta name="keywords" content="react next seo" />
                    <meta name="author" content="koji kanao" />
                    <link rel="stylesheet" href="/static/style.css" />
                    <link 
                    rel="stylesheet" 
                    href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" 
                    integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" 
                    crossorigin="anonymous" 
                    />
                </head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>

        );
    }
}

export default MyDocument;