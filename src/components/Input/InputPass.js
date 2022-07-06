import React from 'react'
import { useState } from 'react'
import ValidIndicatorsPass from '../ValidIndicatorsPass/ValidIndicatorsPass'
import styles from './input.module.css'
import cn from 'classnames'
import ShowPass from './../ShowPass/ShowPass'

import { setPassword, setPasswordMatch } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'

const InputPass = ({ id, label }) => {
	const dispatch = useDispatch()
	const { passwordCheck } = useSelector((state) => state)

	const [uppercaseValid, setUppercaseValid] = useState(false)
	const [specCharValid, setSpecCharValid] = useState(false)
	const [numberValid, setNumberValid] = useState(false)
	const [lengthValid, setLengthValid] = useState(false)
	const [marginInput, setMarginInput] = useState(null)
	const [validPass, setValidPass] = useState(null)
	const [pass, setPass] = useState('')

	function onBlur(value) {
		if (value.length > 0) {
			setMarginInput(true)
		} else {
			setMarginInput(false)
		}
	}
	const checkPassValid = (value) => {
		if (value === passwordCheck) {
			dispatch(setPasswordMatch(true))
		} else {
			dispatch(setPasswordMatch(false))
		}
	}
	const onInputValidate = (e) => {
		let value = e.target.value
		let arrValue = value.split('')
		let letterUppercase = false
		let letterSpecialChars = false
		let number = false
		let length = false
		setPass(value)
		dispatch(setPassword(value))
		checkPassValid(value)

		// Uppercase
		arrValue.forEach((letter) => {
			if (letter == letter.toUpperCase() && letter.match(/^[a-zA-Z]/)) {
				letterUppercase = true
			}
		})
		if (letterUppercase) {
			setUppercaseValid(true)
		} else {
			setUppercaseValid(false)
		}
		//SpecialChar
		if (value.match(/[!@#$&*%]/)) {
			setSpecCharValid(true)
			letterSpecialChars = true
		} else {
			setSpecCharValid(false)
		}
		//number
		if (value.match(/\d/)) {
			setNumberValid(true)
			number = true
		} else {
			setNumberValid(false)
		}
		//length
		if (value.length >= 8) {
			setLengthValid(true)
			length = true
		} else {
			setLengthValid(false)
		}
		if (letterUppercase && letterSpecialChars && number && length) {
			setValidPass(true)
		} else {
			setValidPass(false)
		}
	}
	return (
		<div
			className={styles.wallet_input}
			style={
				marginInput || pass.length > 1
					? { marginTop: '40px' }
					: { marginTop: 0 }
			}>
			<ShowPass walletInput={styles.wallet_input} />
			<input
				onInput={(e) => onInputValidate(e)}
				onFocus={() => setMarginInput(true)}
				onBlur={() => onBlur(pass)}
				className={cn(styles.input, {
					[styles.success]: validPass == true,
					[styles.warning]: validPass == false,
				})}
				type='password'
				id={id}
				name='name'
				required={true}
			/>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
			<ValidIndicatorsPass
				lengthValid={lengthValid}
				numberValid={numberValid}
				specCharValid={specCharValid}
				uppercaseValid={uppercaseValid}
			/>
		</div>
	)
}

export default InputPass
