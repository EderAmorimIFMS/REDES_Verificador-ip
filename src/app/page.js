'use client'
import styles from './page.module.css'

export default function Home() {
  function caucularIp(props){

    const [ip, setIp] = useState('')
    const [octetos, setOctetos] = useState([])
    const [informacao, setInformacao] = useState({})
     
    setInformacao({
      "classe": {props.classe},
      "Máscara padrão": {props}

 Máscara padrão 255.255. 0.0
 Máscara em Binário 11111111.11111111. 0000000.0000000
 Função da Máscara  REDE.REDE. HOST.HOST
 Quantidade de Redes  16.384 Redes
 Quantidade de Hosts por REDE  65.534 Hosts
 Exemplo:
 REDE  170.70.0.0
 1º Host  170.70.0.1
 Último Host  170.70.255.254
 BroadCast
    })

    setOctetos(ip.split(".")) 

  
    switch (octeto[0]) {
        case (octeto[0] >= 1 && octeto[0] <= 126):
            setInformacao().push("Classe: A");
            setInformacao().push("Máscara padrão: 255.0.0.0");
            setInformacao().push("Máscara em Binário: 11111111.00000000.00000000.00000000");
            setInformacao().push("Função da Máscara: REDE.HOST.HOST.HOST");
            setInformacao().push("Quantidade de Redes: 16.384 Redes");
            break;
        case (octeto[0] >= 128 && octeto[0] <= 191):
          setInformacao().push("B");
          setInformacao().push("255.255.255.0");
          setInformacao().push("11111111.11111111.00000000.00000000"); 
            break;
        case (octeto[0] >= 192 && octeto[0] <= 223):
          setInformacao.push("C");
          setInformacao.push("255.255.255.0");
          setInformacao.push("11111111.11111111.11111111.00000000"); 
            break;
        case (octeto[0] >= 224 && octeto[0] <= 239):
          setInformacao.push("D")
            break;
        case (octeto[0] >= 240 && octeto[0] <= 255):
          setInformacao.push("E"); 
            break;
    }

  }

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

         onChange={text => setIp(text.target.value)} 

         
       </div>

  return (
    <main className={styles.main}>
      <div className={styles.container}>
       <div className={styles.busca}>
       <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Cauculadora de IP</legend>

        <form method='' action=''>
          <div>
          <input name='ip' type='text' placeholder="Digite o ip ex: 111.111.111.111" className={styles.inputText} />
          </div>
          <div className={styles.divB}>
          <buttom onclick={caucularIp()} className={styles.buttom}>Verificar</buttom>
          </div>
        </form>
       </fieldset>
       </div>

       <di className={styles.informacao}>
         <Informacao/>
       </di>
       </div>
       
    </main>
  )
}
