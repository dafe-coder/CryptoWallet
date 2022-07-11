import React from 'react'
import cn from 'classnames'
import styles from './transaction-list.module.css'
import TransactionItem from './../TransactionItem/TransactionItem'

const TransactionList = () => {
	return (
		<ul className={styles.list}>
			<TransactionItem type='send' />
			<TransactionItem type='swap' />
			<TransactionItem type='receive' />
		</ul>
	)
}
export default TransactionList
