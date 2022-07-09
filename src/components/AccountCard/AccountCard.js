import React from 'react'
import styles from './account-card.module.css'
import { useState, useEffect } from 'react'

const AccountCard = () => {
	const apiKey = 'ckey_2b56a98c14d8454b8afe42afbfd'
	const apiAddress = '0x4fdbfd3f466079897b67d7623fb0b2845da5d1e6'

	const [walletAddress, setWalletAddress] = useState('')
	const [walletBalance, setWalletBalance] = useState(null)
	const getWalletData = async (apiUrl) => {
		const data = await fetch(apiUrl)
			.then((response) => response.json())
			.then(({ data }) => {
				setWalletAddress(data.address)
				setWalletBalance(data.items[1].balance)
				console.log(data)
			})
			.catch((err) => console.error(err))
	}

	useEffect(() => {
		getWalletData(
			`https://api.covalenthq.com/v1/1/address/${apiAddress}/balances_v2/?&key=${apiKey}`
		)
	}, [])

	return (
		<div className={styles.card}>
			<h5 className={styles.title}>Account</h5>
			<p className={styles.output}>{walletAddress}</p>
			<div className={styles.balance}>
				<h5>Balance:</h5>
				<span>{walletBalance} ETH</span>
			</div>
		</div>
	)
}

export default AccountCard
