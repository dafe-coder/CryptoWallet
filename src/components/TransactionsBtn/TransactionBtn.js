import React from 'react'
import styles from './transaction-btn.module.css'
import SvgTransactions from './SvgPhrase'

const TransactionBtn = ({ type }) => {
	switch (type) {
		case 'send':
			return (
				<button className={styles.btn}>
					<SvgTransactions type='arr-top' />
					Send
				</button>
			)
		case 'receive':
			return (
				<button className={styles.btn}>
					<SvgTransactions type='arr-bottom' />
					Send
				</button>
			)
		case 'swap':
			return (
				<button className={styles.btn}>
					<SvgTransactions type='swap' />
					Send
				</button>
			)
	}
}
export default TransactionBtn
