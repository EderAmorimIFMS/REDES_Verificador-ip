'use client'

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import './globals.css';

export default function Home() {
  const [ip, setIp] = useState('');
  const [octeto, setOcteto] = useState([]);
  const [classe, setClasse] = useState('');
  const [masc_padrao, setMasc_padrao] = useState('');
  const [masc_binario, setMasc_binario] = useState('');
  const [funcao_masc, setFuncao_masc] = useState('');
  const [rede, setRede] = useState('')
  const [primeiro_host, setPrimeiro_host] = useState('');
  const [ultimo_host, setUltimo_host] = useState('');
  const [broadCast, setBroadCast] = useState('');
  const [btnPress, setBtnPress] = useState(false);
    
    
  function verificar(){
    if(octeto[0] == '' || octeto[1] == '' || octeto[2] == '' || octeto[3] == '' || ){
      altert("Digite antes de verificar")
    }
  }
    
  function calcularIp(){
    setOcteto(ip.split("."));
    
    if(octeto[0] >= 1 && octeto[0] <= 126){
      setClasse('A');
      setMasc_padrao('255.0.0.0');
      setMasc_binario('11111111.00000000.00000000.00000000');
      setFuncao_masc('REDE.HOST.HOST.HOST');
      setRede(`${octeto[0]}.0.0.0`);
      setPrimeiro_host(`${octeto[0]}.0.0.1`);
      setUltimo_host(`${octeto[0]}.255.255.254`);
      setBroadCast(`${octeto[0]}.255.255.255`);
      setBtnPress(true);
    } else if(octeto[0] >= 128 && octeto[0] <= 191){
      setClasse('B');
      setMasc_padrao('255.255.0.0');
      setMasc_binario('11111111.11111111.00000000.00000000');
      setFuncao_masc('REDE.REDE.HOST.HOST');
      setRede(`${octeto[0]}.${octeto[1]}.0.0`);
      setPrimeiro_host(`${octeto[0]}.${octeto[1]}.0.1`);
      setUltimo_host(`${octeto[0]}.${octeto[1]}.255.254`);
      setBroadCast(`${octeto[0]}.${octeto[1]}.255.255`);
      setBtnPress(true);  
    } else if(octeto[0] >= 192 && octeto[0] <= 223){
      setClasse('C');
      setMasc_padrao('255.255.255.0');
      setMasc_binario('11111111.11111111.11111111.00000000');
      setFuncao_masc('REDE.REDE.REDE.HOST');
      setRede(`${octeto[0]}.${octeto[1]}.${octeto[2]}.0`);
      setPrimeiro_host(`${octeto[0]}.${octeto[1]}.${octeto[2]}.1`);
      setUltimo_host(`${octeto[0]}.${octeto[1]}.${octeto[2]}.254`);
      setBroadCast(`${octeto[0]}.${octeto[1]}.${octeto[2]}.255`);  
      setBtnPress(true); 
    } else if(octeto[0] >= 224 && octeto[0] <= 239){
      setClasse('D');
      setMasc_padrao('Utilizado para tráfego Multicast');
      setBtnPress(true);
    } else if(octeto[0] >= 240 && octeto[0] <= 255){
      setClasse('E');
      setMasc_padrao('Reservado para uso futuro e testes');
      setBtnPress(true);
    }
  };
  
  const informacao  = ({
        a_classe: classe,
        a_masc_padrao: masc_padrao,
        a_masc_binario: masc_binario,
        a_funcao_masc: funcao_masc,
        a_rede: rede,
        o_primeiro_host: primeiro_host,
        o_ultimo_host: ultimo_host,
        o_broadCast: broadCast,
  });

  function reset(){
    setIp("")
    setOcteto([])
    setClasse("");
    setMasc_padrao("");
    setMasc_binario("");
    setFuncao_masc("");
    setRede("");
    setPrimeiro_host("");
    setUltimo_host("");
    setBroadCast("");
    setBtnPress(false);
  }
    
  const Informacao = () => {
    if(informacao.a_classe === 'D' || informacao.a_classe === 'E'){
      return (
        <ul>
          <li className={styles.itens}>Classe: {informacao.a_classe}</li>
          <li className={styles.itens}>{informacao.a_masc_padrao}</li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li className={styles.itens}><strong>Classe:</strong> {informacao.a_classe}</li>
          <li className={styles.itens}><strong>Máscara padrão:</strong> {informacao.a_masc_padrao}</li>
          <li className={styles.itens}><strong>Máscara em Binário:</strong> {informacao.a_masc_binario}</li>
          <li className={styles.itens}><strong>Função da Máscara:</strong> {informacao.a_funcao_masc}</li>
          <li className={styles.itens}><strong>Rede:</strong> {informacao.a_rede}</li>
          <li className={styles.itens}><strong>1º Host:</strong> {informacao.o_primeiro_host}</li>
          <li className={styles.itens}><strong>Ultimo Host:</strong> {informacao.o_ultimo_host}</li>
          <li className={styles.itens}><strong>BroadCast:</strong> {informacao.o_broadCast}</li>
        </ul>
      );
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.legend}>Calculadora de IP</h2>
          <input
            name='ip'
            type='text'
            placeholder="Digite o IP (ex: 111.111.111.111)"
            value={ip}
            className={styles.inputText}
            onChange={text => setIp(text.target.value)}
            pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
            required
          />
          <button onClick={calcularIp} className={styles.botao}>Verificar</button>
        </div>
        <div className={styles.card}>
          <h2 className={styles.legend_i}>IP Verificado</h2>
          <Informacao />
          {btnPress && 
            <button onClick={reset} className={styles.botao_reset}>Tentar outro endereço IP?</button>
          }
        </div>
      </div>
      <div>
        <h5 className={styles.rodape}>Autores: Eder Amorim & Erick Amorim - Geminys Entenprises</h5>
      </div>
    </div>
  );
}
