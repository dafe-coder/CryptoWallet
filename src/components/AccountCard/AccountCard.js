import React from 'react'
import styles from './account-card.module.css'
import Buttons from '../Buttons/Buttons'

const AccountCard = ({ title, children, copy = true, one = false }) => {
	switch (one) {
		case true:
			return (
				<div className={styles.card}>
					<Buttons className={styles.btn_copy} type='copy'></Buttons>
					<h4 className={styles.title}>{title}</h4>
					<p className={styles.address}>{children}</p>
				</div>
			)
		case false:
			return (
				<li className={styles.card}>
					<h4 className={styles.title}>{title}</h4>
					<p className={styles.address}>{children}</p>
				</li>
			)
		default:
			return <></>
	}
}
export default AccountCard
