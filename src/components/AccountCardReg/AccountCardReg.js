import React from 'react'
import styles from './account-card.module.css'
import { useSelector } from 'react-redux/es/exports'
const AccountCardReg = () => {
	const { data } = useSelector((state) => state.wallet)

	return (
		<div className={styles.card}>
			<h5 className={styles.title}>Account</h5>
			<p className={styles.output}>{data.address}</p>
			<div className={styles.balance}>
				<h5>Balance:</h5>
				<span>{data.items[1].balance} ETH</span>
			</div>
		</div>
	)
}

export default AccountCardReg
