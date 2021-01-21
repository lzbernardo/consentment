import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'

function Header(props){
  const { mode } = props;

  let path = "/" + mode + "/logo.png";

  return(
    <div className={styles.header}>
      <Link href={'javascript:window.location.href=window.location.href'}><img src={path} className={styles.logo}/></Link>
    </div>
  );
}

export default Header;
