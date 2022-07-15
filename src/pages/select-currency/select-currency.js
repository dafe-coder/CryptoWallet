import React from 'react'
import Title from '../../components/Title/Title'
import Buttons from '../../components/Buttons/Buttons'
import styles from './select-currency.module.css'
import Svg from './../../svgs/Svg'
const SelectCurrency = () => {
	return (
		<section className='bg-white'>
			<div className='wallet-body'>
				<div className='wallet-top'>
					<div className='wallet-header'>
						<Buttons type='back' />
						<Title>Select Currency</Title>
						<div></div>
					</div>
				</div>
				<div className='wallet-bottom'>
					<div className={styles.body}>
						<div className='wallet-input'>
							<input
								type='search'
								className='input'
								id='search-currency'
								required={true}
							/>
							<label htmlFor='search-currency' className='label'>
								<Svg type='search' />
								Search for currency
							</label>
						</div>
						<ul className={styles.list}>
							<li>
								<span>Default (USD)</span>
							</li>
							<li>
								<span>CNY</span>
							</li>
							<li>
								<span>EUR</span>
							</li>
							<li>
								<span>GBP</span>
							</li>
							<li>
								<span>USD</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
export default SelectCurrency
