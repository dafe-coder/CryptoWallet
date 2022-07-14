import React from 'react'
import styles from './transaction-list.module.css'
import TransactionItem from './../TransactionItem/TransactionItem'

const TransactionList = ({ style, data }) => {
	return data.length ? (
		<ul className={styles.list} style={style}>
			{data.map((item, i) => {
				return <TransactionItem key={i} type={item} />
			})}
		</ul>
	) : (
		<h2>Nothing</h2>
	)
}
export default TransactionList
