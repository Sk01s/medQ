import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }
    
    render() {
        const {locale} = this.props.__NEXT_DATA__ 
        const dir = locale === 'ar' ? 'rtl' : 'ltr';
        return (
            <Html lang="zxx" dir={dir} lang={locale}>
                <Head>
                    <link rel="icon" type="image/png" href="/img/favicon.png"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript /> 
                </body>
            </Html>
        )
    }
}

export default MyDocument;