import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
// import { run } from '../components/scriptclicksign';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
          />
          <link rel="icon" href="https://www.acordofechado.com.br/wp-content/uploads/2019/04/favico.png" />
          {/* <script src="https://raw.githubusercontent.com/clicksign/embedded/main/build/embedded.js"></script> */}
        
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <input id='request_signature_key' />
          <input type='button' value='Load' onClick={() => run()}/> */}
          {/* <div id='container' style={{height: '600px'}}></div> */}
        </body>
      </Html>
    )
  }
}