import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import styles from './amount.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setTokenTransactionAmount } from '../../actions/wallet'
const Amount = ({ setValidAmount }) => {
	const dispatch = useDispatch()
	const { tokenTransaction } = useSelector((state) => state.wallet)
	const [value, setValue] = useState('')
	const [active, setActive] = useState('')

	useEffect(() => {
		if (value != '' && value != 0) {
			setValidAmount(true)
		} else {
			setValidAmount(false)
		}
	}, [value])

	const onChoosePersent = (value) => {
		if (tokenTransaction != null) {
			setActive(value)
			setValue(
				(tokenTransaction.market_data.balance / 100) *
					Number(value.replace(/[^0-9]/g, ''))
			)
			dispatch(
				setTokenTransactionAmount(
					String(
						(tokenTransaction.market_data.balance / 100) *
							Number(value.replace(/[^0-9]/g, ''))
					)
				)
			)
		}
	}
	return (
		<div className='wallet-input'>
			<input
				id='amount'
				className='input'
				type='number'
				value={value}
				onChange={(e) => setValue(e.target.value)}
				required={true}
			/>
			<label className='label' htmlFor='amount'>
				Amount
			</label>
			<ul className={styles.list}>
				<li
					className={cn({
						[styles.active]: active == '20%',
					})}
					onClick={(e) => onChoosePersent(e.target.textContent)}>
					20%
				</li>
				<li
					className={cn({
						[styles.active]: active == '50%',
					})}
					onClick={(e) => onChoosePersent(e.target.textContent)}>
					50%
				</li>
				<li
					className={cn({
						[styles.active]: active == '75%',
					})}
					onClick={(e) => onChoosePersent(e.target.textContent)}>
					75%
				</li>
				<li
					className={cn({
						[styles.active]: active == '100%',
					})}
					onClick={(e) => onChoosePersent(e.target.textContent)}>
					100%
				</li>
			</ul>
		</div>
	)
}
export default Amount
