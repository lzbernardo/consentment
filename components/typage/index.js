import React from 'react'
import styles from './TYPage.module.css'

function TYPage(props){
  const { handler, mode } = props;


  return(
    <div className={styles.box}>
      <h1>🤩</h1>
      <h2><br/><span>OBRIGADO!</span><br/> Agradecemos por nos  ajudar a entender como podemos nos relacionar com você!</h2>
    </div>
  );
}

export default TYPage;
