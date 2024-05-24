import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from '@next/font/google'
import Footer from "./footer/footer";


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
        <Component {...pageProps} />;
        <Footer />
    </main>
    
  )
}
