import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';

function MyApp({ Component, pageProps }) {
  if(typeof window !== 'undefined') {
    (async function () {
      if (CSS["paintWorklet"] === undefined) {
        await import("css-paint-polyfill");
      }
      CSS.paintWorklet.addModule('/photocopy-worklet.js');
    })();
  }

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
