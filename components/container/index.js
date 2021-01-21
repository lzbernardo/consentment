import React from 'react'
import styles from './Container.module.css'

function Container(props){
  const { mode } = props;

  let bgpath = "/" + mode + "/bg.png";

  return(
    <div className={styles.container} style={{ backgroundImage: 'url(' + bgpath + ')' }}>
      {props.children}
    </div>
  );
}

export default Container;
