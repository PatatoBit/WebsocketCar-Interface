import React from 'react'

import styles from '../styles/ControlStyles.module.css';

function Controls() {
  return (
	  <div className={ styles.controls}>
		  <button className={`${styles.up} ${styles.arr}`}>⬆️</button>
		  <br />
		  <button className={styles.arr}>⬅️</button>
		  <button className={ styles.arr}>⬇️</button>
		  <button className={ styles.arr}>➡️</button>
	</div>
  )
}

export default Controls