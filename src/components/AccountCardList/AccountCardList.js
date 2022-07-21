import React, { useEffect, useState } from 'react'
import styles from './account-card-list.module.css'
import AccountCard from '../AccountCard/AccountCard'

const AccountCardList = () => {
	const [data, setData] = useState(null)
	// const [active, setData] = useState(null)
	useEffect(() => {
		chrome.storage.local.get(['userData'], function (result) {
			setData(result.userData)
		})
	}, [])
	return (
		<ul className={styles.list}>
			{data != null ? (
				data.map((item) => (
					<AccountCard key={item.restoreAddress} title={item.name}>
						{item.restoreAddress}
					</AccountCard>
				))
			) : (
				<h4>No accounts</h4>
			)}
		</ul>
	)
}
export default AccountCardList
