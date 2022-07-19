import React, { useEffect, useState } from 'react'
import styles from './account-card-list.module.css'
import AccountCard from '../AccountCard/AccountCard'

const AccountCardList = () => {
	const [data, setData] = useState(null)
	useEffect(() => {
		chrome.storage.sync.get(['userData'], function (result) {
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
				<h2>Nothing</h2>
			)}
		</ul>
	)
}
export default AccountCardList
