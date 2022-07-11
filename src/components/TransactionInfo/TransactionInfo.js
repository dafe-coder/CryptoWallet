import React from 'react'
import cn from 'classnames'
import styles from './transaction-info.module.css'

const TransactionInfo = ({
	cryptoImg,
	cryptoName,
	cryptoCount,
	cryptoPrice,
}) => {
	return (
		<div className={styles.body}>
			<img className={styles.logo} src={cryptoImg} alt={cryptoName} />
			<div className={styles.info}>
				<h4>{cryptoName}</h4>
				<span>{cryptoCount}</span>
			</div>
			<span className={styles.price}>~${cryptoPrice}</span>
		</div>
	)
}
export default TransactionInfo
