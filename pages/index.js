import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Bem vindo</h1>
        <p className={styles.description}>
          Escolha um dos formulários de consentimento para acessar.
        </p>

        <div className={styles.grid}>
          <a href="/atacadao" className={styles.card}>
            <img src="/atacadao/logo.png"></img>
          </a>

          <a href="/carrefour" className={styles.card}>
            <img src="/carrefour/logo.png"></img>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
