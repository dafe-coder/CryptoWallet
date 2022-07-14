import React from 'react'
import styles from './portfolio-item.module.css'
import cn from 'classnames'
import { setCurrentPage } from '../../actions/createActions'
import { setPortfolioOpen } from '../../actions/wallet'
import { useDispatch } from 'react-redux'
const PortfolioItem = ({
	cryptoName,
	cryptoCount,
	cryptoPrice,
	cryptoProfit,
	cryptoImg,
}) => {
	const dispatch = useDispatch()
	const openPortfolio = () => {
		dispatch(setPortfolioOpen(cryptoName))
		dispatch(setCurrentPage('Transactions'))
	}
	return (
		<li className={styles.item} onClick={openPortfolio}>
			<div className={styles.top}>
				<div className={styles.info}>
					<img className={styles.img} src={cryptoImg} alt='' />
					<h4 className={styles.name}>{cryptoName}</h4>
				</div>
				<span className={styles.count}>{cryptoCount}</span>
			</div>
			<div className={styles.bottom}>
				<div className={styles.price}>{cryptoPrice}</div>
				<div
					className={cn(styles.profit, {
						[styles.success]: cryptoProfit > 0,
						[styles.error]: cryptoProfit < 0,
					})}>
					{cryptoProfit}%
				</div>
			</div>
		</li>
	)
}

export default PortfolioItem
