import React from 'react'
import styles from '../styles/Priority.module.css'

function Priority() {
  return (
	  <div className={ styles.container}>
		  <input className={ styles.input} type="number" placeholder='Priority Key' />
		  <button onClick={ () => console.log('PRIORITY MAN')} className={styles.button}>Swoop In</button>
	</div>
  )
}

export default Priority