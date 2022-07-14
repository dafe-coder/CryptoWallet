import React, { useState } from 'react'
import cn from 'classnames'
import styles from './amount.module.css'

const Amount = () => {
	const [value, setValue] = useState('')
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
				<li>20%</li>
				<li>50%</li>
				<li>75%</li>
				<li>100%</li>
			</ul>
		</div>
	)
}
export default Amount
