'use client'
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [ip, setIp] = useState('');
  const [octeto, setOctetos] = useState([]);
  const [classe, setClasse] = useState('');
  const [masc_padrao, setMasc_padrao] = useState('');
  const [masc_binario, setMasc_binario] = useState('');
  const [funcao_masc, setFuncao_masc] = useState('');
  const [rede, setRede] = useState('')
  const [primeiro_host, setPrimeiro_host] = useState('');
  const [ultimo_host, setUltimo_host] = useState('');
  const [broadCast, setBroadCast] = useState('');

  const informacao = {
    classe: classe,
    masc_padrao: masc_padrao,
    masc_binario: masc_binario,
    funcao_masc: funcao_masc,
    rede: rede,
    primeiro_host: primeiro_host,
    ultimo_host: ultimo_host,
    broadCast: broadCast,
    };
    
  function caucularIp(){
    setOctetos(ip.split("."));
    
    if(octeto[0] >= 1 && octeto[0] <= 126){
        setClasse('A');
        setMasc_padrao('255.0.0.0');
        setMasc_binario('11111111.00000000.00000000.00000000');
        setFuncao_masc('REDE.HOST.HOST.HOST');
        setRede(`${octeto[0]}.0.0.0`);
        setPrimeiro_host(`${octeto[0]}.0.0.1`);
        setUltimo_host(`${octeto[0]}.255.255.254`);
        setBroadCast(`${octeto[0]}.255.255.255`);
 
     } else if(octeto[0] >= 128 && octeto[0] <= 191){
        setClasse('B');
        setMasc_padrao('255.255.0.0');
        setMasc_binario('11111111.11111111.00000000.00000000');
        setFuncao_masc('REDE.REDE.HOST.HOST');
        setRede(`${octeto[0]}.${octeto[1]}.0.0`);
        setPrimeiro_host(`${octeto[0]}.${octeto[1]}.0.1`);
        setUltimo_host(`${octeto[0]}.${octeto[1]}.255.254`);
        setBroadCast(`${octeto[0]}.${octeto[1]}.255.255`);
          
      } else if(octeto[0] >= 192 && octeto[0] <= 223){
        setClasse('C');
        setMasc_padrao('255.255.255.0');
        setMasc_binario('11111111.11111111.11111111.00000000');
        setFuncao_masc('REDE.REDE.REDE.HOST');
        setRede(`${octeto[0]}.${octeto[1]}.${octeto[2]}.0`);
        setPrimeiro_host(`${octeto[0]}.${octeto[1]}.${octeto[2]}.1`);
        setUltimo_host(`${octeto[0]}.${octeto[1]}.${octeto[2]}.254`);
        setBroadCast(`${octeto[0]}.${octeto[1]}.${octeto[2]}.255`);
          
      }else if(octeto[0] >= 224 && octeto[0] <= 239){
        setClasse('D');
        setMasc_padrao('Utilizado para tráfrgo Multicast');
         
      } else if(octeto[0] >= 240 && octeto[0] <= 255){
        setClasse('E');
        setMasc_padrao('Reservado para uso fututo e testes');
          
       }
  };

  const Informacao = () => {

    if(informacao.classe == 'D' || informacao.classe == 'E'){
      return (
      <ul>
        <li className={styles.itens}>Classe: {informacao.classe}</li>
        <li className={styles.itens}> {informacao.masc_padrao}</li>
      </ul>
    )
    } else{
      return (
      <ul>
        <li className={styles.itens}>Classe: {informacao.classe}</li>
        <li className={styles.itens}>Máscara padrão: {informacao.masc_padrao}</li>
        <li className={styles.itens}>Máscara em Binário: {informacao.masc_binario}</li>
        <li className={styles.itens}>Função da Máscara: {informacao.funcao_masc}</li>
        <li className={styles.itens}>Rede: {informacao.rede}</li>
        <li className={styles.itens}>1º Host: {informacao.primeiro_host}</li>
        <li className={styles.itens}>Ultimo Host: {informacao.ultimo_host}</li>
        <li className={styles.itens}>BroadCast: {informacao.broadCast}</li>
      </ul>
    )
  }
};

  return (
    <main className={styles.main}>
      <div className={styles.container}>
       <div className={styles.busca}>
        <h2 className={styles.legend}>Calculadora de IP</h2>

        <form method='' action=''>
          <div>
          <input name='ip' type='text' placeholder="Digite o ip ex: 111.111.111.111" className={styles.inputText} onChange={text => setIp(text.target.value)}/>
          </div>
          
          <buttom onclick={caucularIp} className={styles.botao}>Verificar</buttom>
        </form>
       </div>

       <div className={styles.informacao}>
        <h2>Ip Verificado</h2>
         <Informacao />
       </div>
       </div>
       
    </main>
  )
}
