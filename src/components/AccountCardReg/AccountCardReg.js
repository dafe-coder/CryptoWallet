import React, { useState, useEffect } from 'react'
import styles from './account-card.module.css'
import useWalletService from '../../services/WalletService'
import Web3 from 'web3'
import getData from '../../pages/Func.wallet/getDataWallet'
import { useDispatch } from 'react-redux'

const AccountCardReg = () => {
	const dispatch = useDispatch()
	const { error, loading, getDataWallet } = useWalletService()
	const [accountData, setAccountData] = useState(null)
	useEffect(() => {
		getData(dispatch, getDataWallet, onAccountLoaded)
	}, [])
	const onAccountLoaded = (list) => {
		setAccountData(list)
	}

	return (
		<div className={styles.card}>
			{accountData != null ? (
				<>
					<h5 className={styles.title}>Account</h5>
					<p className={styles.output}>{accountData.address}</p>
					<div className={styles.balance}>
						<h5>Balance:</h5>
						<span>
							{Number(
								Web3.utils.fromWei(
									String(accountData.items[1].balance),
									'ether'
								)
							).toFixed(3)}{' '}
							ETH
						</span>
					</div>
				</>
			) : (
				<>Error</>
			)}
		</div>
	)
}

export default AccountCardReg
