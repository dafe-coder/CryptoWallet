import React from 'react'
import { useState } from 'react'
import Par from '../Par/Par'
import cn from 'classnames'
import ShowPass from '../ShowPass/ShowPass'
import styles from './input.module.css'
import { useDispatch, useSelector } from 'react-redux'

const InputPassLog = ({ id, label, errorPar }) => {
	const dispatch = useDispatch()
	const { passwordMatch, password, passwordCheck } = useSelector(
		(state) => state.create
	)

	const [passLog, setPassLog] = useState('')

	const [marginInput, setMarginInput] = useState(null)
	function onBlur(value) {
		if (value.length > 0) {
			setMarginInput(true)
		} else {
			setMarginInput(false)
		}
	}

	return (
		<div
			className={styles.wallet_input}
			style={
				marginInput || passwordCheck.length > 1
					? { marginTop: '40px' }
					: { marginTop: 0 }
			}>
			<ShowPass walletInput={styles.wallet_input} />
			<input
				onChange={(e) => setPassLog(e.target.value)}
				className={styles.input}
				onFocus={() => setMarginInput(true)}
				onBlur={() => onBlur(passwordCheck)}
				type='password'
				id={id}
				name='pass'
				required={true}
				value={passLog}
			/>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
			{errorPar ? (
				passwordMatch == false ? (
					<Par type='error'>{errorPar}</Par>
				) : (
					<></>
				)
			) : (
				<></>
			)}
		</div>
	)
}

export default InputPassLog
