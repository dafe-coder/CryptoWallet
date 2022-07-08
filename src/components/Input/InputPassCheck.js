import React from 'react'
import { useState } from 'react'
import Par from '../Par/Par'
import cn from 'classnames'
import ShowPass from './../ShowPass/ShowPass'
import styles from './input.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setPasswordMatch, setPasswordCheck } from '../../actions/createActions'

const InputPassCheck = ({ id, label, errorPar }) => {
	const dispatch = useDispatch()
	const { passwordMatch, password, passwordCheck } = useSelector(
		(state) => state.create
	)

	const [marginInput, setMarginInput] = useState(null)

	const checkPassValid = (value) => {
		console.log(passwordMatch)
		if (password === value) {
			dispatch(setPasswordMatch(true))
		} else {
			dispatch(setPasswordMatch(false))
		}
	}
	function onBlur(value) {
		if (value.length > 0) {
			setMarginInput(true)
		} else {
			setMarginInput(false)
		}
	}
	const onPassCheckValidate = (e) => {
		let value = e.target.value
		dispatch(setPasswordCheck(value))
		checkPassValid(value)
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
				onInput={(e) => onPassCheckValidate(e)}
				onFocus={() => setMarginInput(true)}
				onBlur={() => onBlur(passwordCheck)}
				className={cn(styles.input, {
					[styles.success]: passwordMatch == true,
					[styles.error]: passwordMatch == false,
				})}
				type='password'
				id={id}
				name='name'
				required={true}
				value={passwordCheck}
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

export default InputPassCheck
