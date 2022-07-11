import React from 'react'
import styles from './account-card.module.css'

const AccountCard = ({ title, children }) => {
	return (
		<li className={styles.card}>
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.address}>{children}</p>
		</li>
	)
}
export default AccountCard
