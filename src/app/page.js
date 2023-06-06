import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const [ip, setIP] = useState('')
  const [informacao, setInformacao] = useState({})

  function caucularIp(){

  }



  return (
    <main className={styles.main}>
       <fieldset className={styles.inputText}>
        <legend className={styles.inputText}>Cauculadora de IP</legend>

        <form method='' action=''>
          <input name='ip' type='text' placeholder="Digite o ip ex: 1111.1111.1111.1111" className={styles.inputText}/>
          <buttom onclick={caucularIp} className={styles.inputText}>Verificar</buttom>
        </form>
       </fieldset>
       
       <div className={styles.inputText}>
         <ul>
          <li><p></p></li>
          <li><p></p></li>
          <li><p></p></li>
          <li><p></p></li>
          <li><p></p></li>
          <li><p></p></li>
          <li><p></p></li>
         </ul>
       </div>
    </main>
  )
}
