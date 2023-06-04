import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <link
        href='https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;400;500;600&family=DM+Sans:wght@400;700&family=Forum&family=Geologica:wght@300;400;600;700&display=swap'
        rel='stylesheet'
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
