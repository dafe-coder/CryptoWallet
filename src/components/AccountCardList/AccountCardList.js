import React from 'react'
import styles from './account-card-list.module.css'
import AccountCard from '../AccountCard/AccountCard'

const AccountCardList = () => {
	return (
		<ul className={styles.list}>
			<AccountCard title='Wallet 1'>
				3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5
			</AccountCard>
			<AccountCard title='Wallet 2'>
				121FEKJuhewIHUEfbu@32389baJBdefeafw433234fDFSDWEFEWF324
			</AccountCard>
		</ul>
	)
}
export default AccountCardList
