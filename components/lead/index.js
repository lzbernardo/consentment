import React from 'react'
import styles from './Lead.module.css'

function Lead(props){
  const { handler, mode } = props;


  return(
    <div className={styles.box}>
      <h2><span>Qual é a</span><br/> Origem do cliente?</h2>
      <button onClick={() => handler('promotor')} className={'default-' + mode}>Promotor</button>
      <button onClick={() => handler('cliente espontâneo')} className={'alternate-' + mode}>Cliente Espontâneo</button>
    </div>
  );
}

export default Lead;
