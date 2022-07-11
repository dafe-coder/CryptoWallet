import React from 'react'
import styles from './transaction-item.module.css'
import cn from 'classnames'
import SvgTransactions from './../TransactionsBtn/SvgPhrase'

const TransactionItem = ({ type }) => {
	switch (type) {
		case 'send':
			return (
				<li className={styles.item}>
					<div className={styles.top}>
						<h4 className={styles.c_red}>
							<span className={cn(styles.icon, styles.red)}>
								<SvgTransactions type='arr-top' />
							</span>
							Send
						</h4>
						<span className={styles.value_red}>-0.00021 BTC</span>
					</div>
					<div className={styles.bottom}>
						<p>
							<strong>To:</strong>3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5
						</p>
						<span className={styles.date}>12.03.22</span>
					</div>
				</li>
			)
		case 'receive':
			return (
				<li className={styles.item}>
					<div className={styles.top}>
						<h4 className={styles.c_green}>
							<span className={cn(styles.icon, styles.green)}>
								<SvgTransactions type='arr-bottom' />
							</span>
							Received
						</h4>
						<span className={styles.value_green}>+0.00021 BTC</span>
					</div>
					<div className={styles.bottom}>
						<p>
							<strong>From:</strong>3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5
						</p>
						<span className={styles.date}>12.03.22</span>
					</div>
				</li>
			)
		case 'swap':
			return (
				<li className={styles.item}>
					<div className={styles.top}>
						<h4 className={styles.c_blue}>
							<span className={cn(styles.icon, styles.blue)}>
								<SvgTransactions type='swap' />
							</span>
							Swap BTC / ETH
						</h4>
						<span className={styles.value_green}>+0.00021 BTC</span>
					</div>
					<div className={styles.bottom}>
						<span className={styles.date}>12.03.22</span>
					</div>
				</li>
			)
	}
}
export default TransactionItem
