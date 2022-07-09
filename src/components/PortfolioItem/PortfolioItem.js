import React from 'react'
import styles from './portfolio-item.module.css'
import cn from 'classnames'
import { useState } from 'react'
const PortfolioItem = ({
	cryptoName,
	cryptoCount,
	cryptoPrice,
	cryptoProfit,
	cryptoImg,
}) => {
	const [profit, setProfit] = useState(true)
	return (
		<li className={styles.item}>
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
						[styles.success]: profit,
					})}>
					{cryptoProfit}
				</div>
			</div>
		</li>
	)
}

export default PortfolioItem
