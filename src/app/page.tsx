/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styles from './page.module.scss'
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
            <img src="/images/7154_1.jpg" alt="Óleo lubrificante 5w_30" />
            <a>Lubrificantes e fluído</a>
          </div>
          <div className={styles['card-prod']}>
            <img src="/images/Filtro-Ar-Frontier-Pathfinder-Wega-JFA0129-JFA129-2018-2017-2016-2015-2014-2013-2012-2011-comp-2.webp" alt="filtro de ar" />
            <a>Filtro de cabine</a>
          </div>
          <div className={styles['card-prod']}>
            <img src="/images/filtro-combustivel-renault-sandero-todos-os-modelos-gi50-7-d_nq_np_794254-mlb32191210001_092019-f_1.jpg" alt="Óleo lubrificante 5w_30" />
            <a>Filtro de combustível</a>
          </div>
        </div>
        <div  className={styles['logo-wrapper']}>
          <img className={styles['img_1']} src="/images/filtro-agricola-2226997-1624551586816.jpg"alt="" />
          <img className={styles['img_2']} src="/images/untitled-2_17.png" alt="" />
          <img className={styles['img_3']} src="/images/kisspng-logo-clip-art-vector-graphics-petronas-product-petronas-logo-svg-vector-amp-png-transparent-v-5ba3bca8441d99.292981291537457320279.png" alt="" />
          <img className={styles['img_4']} src="/images/selenia.svg" alt="" />
          <img className={styles['img_5']} src="/images/dulub.jpg" alt="" />
        </div>
      </section>
      <section className={styles['wrapper-localização']}>

      </section>
    </>

  )
}
