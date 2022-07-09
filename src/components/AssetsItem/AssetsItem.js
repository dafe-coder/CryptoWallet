import React from 'react'
import styles from './assets-item.module.css'
import SwitchButton from './../SwitchButton/SwitchButton'

const AssetsItem = ({ cryptoImg, cryptoName, check }) => {
	return (
		<li className={styles.item}>
			<div className={styles.box}>
				<img className={styles.img} src={cryptoImg} alt={cryptoName} />
				<h5>{cryptoName}</h5>
			</div>
			<SwitchButton check={check} />
		</li>
	)
}

export default AssetsItem
