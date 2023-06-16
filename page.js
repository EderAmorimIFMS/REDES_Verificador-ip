'use client'
import styles from './page.module.css'

export default function Home() {
  function caucularIp(){

    const [ip, setIp] = useState('')
    const [octeto, setOctetos] = useState([])
    const [informacao, setInformacao] = useState([])


    setOctetos(ip.split(".")) 

       if(octeto[0] >= 1 && octeto[0] <= 126){
          const item1 = "Classe: A";
          const item2 = "Máscara padrão: 255.0.0.0";
          const item3 = "Máscara em Binário: 11111111.00000000.00000000.00000000";
          const item4 = "Função da Máscara: REDE.HOST.HOST.HOST";
          const item5 = `Rede: ${octeto[0]}.0.0.0`;
          const item6 = `1º Host: ${octeto[0]}.0.0.1`;
          const item7 = `Ultimo Host: ${octeto[0]}.255.255.254`;
          const item8 = `BroadCast: ${octeto[0]}.255.255.255`;
          setInformacao([...informacao, ...item1, ...item2, ...item3, ...item1item4, ...item5, ...item6, ...item7, ...item8]);
       } else if(octeto[0] >= 128 && octeto[0] <= 191){
          const item1 = "Classe: B";
          const item2 = "Máscara padrão: 255.255.0.0";
          const item3 = "Máscara em Binário: 11111111.11111111.00000000.00000000";
          const item4 = "Função da Máscara: REDE.REDE.HOST.HOST";
          const item5 = `Rede: ${octeto[0]}.${octeto[1]}.0.0`;
          const item6 = `1º Host: ${octeto[0]}.${octeto[1]}.0.1`;
          const item7 = `Ultimo Host: ${octeto[0]}.${octeto[1]}.255.254`;
          const item8 = `BroadCast: ${octeto[0]}.${octeto[1]}.255.255`;
          setInformacao([...informacao, ...item1, ...item2, ...item3, ...item1item4, ...item5, ...item6,  ...item7, ...item8]);
       } else if(octeto[0] >= 192 && octeto[0] <= 223){
          const item1 = "Classe: C";
          const item2 = "Máscara padrão: 255.255.255.0";
          const item3 = "Máscara em Binário: 11111111.11111111.11111111.00000000";
          const item4 = "Função da Máscara: REDE.REDE.REDE.HOST";
          const item5 = `Rede: ${octeto[0]}.${octeto[1]}.${octeto[2]}.0`;
          const item6 = `1º Host: ${octeto[0]}.${octeto[1]}.${octeto[2]}.1`;
          const item7 = `Ultimo Host: ${octeto[0]}.${octeto[1]}.${octeto[2]}.254`;
          const item8 = `BroadCast: ${octeto[0]}.${octeto[1]}.${octeto[2]}.255`;
          setInformacao([...informacao, ...item1, ...item2, ...item3, ...item1item4, ...item5, ...item6, ...item7, ...item8]);
       }else if(octeto[0] >= 224 && octeto[0] <= 239){
        const item1 = "Classe: D";
        const item2 = "Utilizado para tráfrgo Multicast";
        setInformacao([...informacao, ...item1, ...item2]);
       } else if(octeto[0] >= 240 && octeto[0] <= 255){
        const item1 = "Classe: E";
        const item2 = "Reservado para uso fututo e testes";
        setInformacao([...informacao, ...item1, ...item2]);
       }

  const Informacao = () => {
    if(informacao[0] == "Classe: D" || informacao[0] == "Classe: E" ){
      return (
      <ul>
        <li className={styles.itens}>{informacao[0]}</li>
        <li className={styles.itens}>{informacao[1]}</li>
        <li className={styles.itens}>{informacao[2]}</li>
        <li className={styles.itens}>{informacao[3]}</li>
        <li className={styles.itens}>{informacao[4]}</li>
        <li className={styles.itens}>{informacao[5]}</li>
      </ul>
    )
    } else{
      return (
      <ul>
        <li className={styles.itens}>{informacao[0]}</li>
        <li className={styles.itens}>{informacao[1]}</li>
        <li className={styles.itens}>{informacao[2]}</li>
        <li className={styles.itens}>{informacao[3]}</li>
        <li className={styles.itens}>{informacao[4]}</li>
        <li className={styles.itens}>{informacao[5]}</li>
      </ul>
    )
    }
    

    }

    
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
       <div className={styles.busca}>
       <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Cauculadora de IP</legend>

        <form method='' action=''>
          <div>
          <input name='ip' type='text' placeholder="Digite o ip ex: 111.111.111.111" className={styles.inputText} onChange={text => setIp(text.target.value)}/>
          </div>
          <div className={styles.divB}>
          <buttom onclick={caucularIp} className={styles.buttom}>Verificar</buttom>
          </div>
        </form>
       </fieldset>
       </div>

       <div className={styles.informacao}>
        <h2>Ip Verificado</h2>
         <Informacao/>
       </div>
       </div>
       
    </main>
  )
}
