import React, { useState, useEffect } from 'react'
import styles from './account-card.module.css'
import useWalletService from '../../services/WalletService'

const AccountCardReg = () => {
	const { error, loading, getDataWallet } = useWalletService()
	const [accountData, setAccountData] = useState([])

	useEffect(() => {
		getDataWallet().then((data) => onAccountLoaded(data))
	}, [])
	useEffect(() => {
		console.log(accountData.address)
	}, [loading])
	const onAccountLoaded = (list) => {
		setAccountData(list)
	}

	return (
		<div className={styles.card}>
			{accountData.length ? (
				<>
					<h5 className={styles.title}>Account</h5>
					<p className={styles.output}>{accountData.address}</p>
					<div className={styles.balance}>
						<h5>Balance:</h5>
						<span>{accountData.items[1].balance} ETH</span>
					</div>
				</>
			) : (
				<>Error</>
			)}
		</div>
	)
}

export default AccountCardReg
