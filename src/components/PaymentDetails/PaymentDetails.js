import React from 'react'
import styles from './payment-details.module.css'
import Title from '../Title/Title'
import Svg from './../../svgs/Svg'
const PaymentDetails = () => {
	return (
		<div className={styles.body}>
			<Title mb='0' type='sm'>
				Payment Details
			</Title>
			<ul className={styles.table}>
				<li>
					<span>Slippage</span>
					<span>
						2% <Svg type='cog' />
					</span>
				</li>
				<li>
					<span>Price</span>
					<span>1 USDT = 0.0008 ETH</span>
				</li>
				<li>
					<span>Price impact</span>
					<span>0.01%</span>
				</li>
				<li>
					<span>Arrival Time</span>
					<span>&lt;30 min</span>
				</li>
				<li>
					<span>TX Fee</span>
					<span>0.3%</span>
				</li>
				<li>
					<span>Slippage</span>
					<span>3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5</span>
				</li>
			</ul>
		</div>
	)
}
export default PaymentDetails
