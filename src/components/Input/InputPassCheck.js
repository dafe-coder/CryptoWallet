import React from 'react'
import { useState } from 'react'
import Par from '../Par/Par'
import cn from 'classnames'
import ShowPass from './../ShowPass/ShowPass'
import styles from './input.module.css'

const InputPassCheck = ({
	id,
	label,
	errorPar,
	passCheck,
	checkPassValid,
	passCheckValid,
	setPassCheck,
}) => {
	const [marginInput, setMarginInput] = useState(null)

	function onBlur(value) {
		if (value.length > 0) {
			setMarginInput(true)
		} else {
			setMarginInput(false)
		}
	}
	const onPassCheckValidate = (e) => {
		let value = e.target.value
		setPassCheck(value)
		checkPassValid()
	}
	return (
		<div
			className={styles.wallet_input}
			style={
				marginInput || passCheck.length > 1
					? { marginTop: '40px' }
					: { marginTop: 0 }
			}>
			<ShowPass walletInput={styles.wallet_input} />
			<input
				onInput={(e) => onPassCheckValidate(e)}
				onFocus={() => setMarginInput(true)}
				onBlur={() => onBlur(passCheck)}
				className={cn(styles.input, {
					[styles.success]: passCheckValid == true,
					[styles.error]: passCheckValid == false,
				})}
				type='password'
				id={id}
				name='name'
				required={true}
				value={passCheck}
			/>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
			{errorPar ? <Par type='error'>{errorPar}</Par> : <></>}
		</div>
	)
}

export default InputPassCheck
