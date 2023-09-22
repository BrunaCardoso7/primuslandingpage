import Image from 'next/image'
import styles from './page.module.css'
import { Header } from './components/Header'
import ButonLoc from './components/Btn-local'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header/>
        <h1>Orçamento que cabe no seu bolso</h1>
        <p>Fazemos troca de filtro de combustível, filtro de cabine entre outros serviços, para mais informações nos acione no whatsApp.</p>
        <div className={styles['banner-wrapper']}>
          <div className={styles['banner-text']}>
            <span >Troca de óleo</span>
            <span>+Troca de filtro</span>
            <span>+Mão de obra</span>
          </div>
          <div className={styles['banner-ticket-preco']}>
            <span className={styles['text-span']}>A partir: </span>
            <div className={styles["preco"]}>
              <span className={styles['wrapper-120']}>120,</span>
              <span className={styles['wrapper-00']}>00</span></div>
            </div>
        </div>
        <ButonLoc/>
      </main>
      <section className={styles['wrapper-catalogo']}>
        <h2>Catálogo de produtos</h2>
        <p>Produtos de confiança e qualidade</p>
        <div className={styles['cards']}>
          <div className={styles['card-prod']}>
            <img src="./images/" alt="" />
          </div>
          <div className={styles['card-prod']}>

          </div>
          <div className={styles['card-prod']}>

          </div>
        </div>
      </section>
    </>

  )
}
