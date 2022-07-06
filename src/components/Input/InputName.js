import React from 'react'
import { useState } from 'react'
import Par from '../Par/Par'
import styles from './input.module.css'
import cn from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { setNameValid } from '../../actions'

const InputName = ({ id, label, errorPar }) => {
	const [name, setName] = useState('')
	const [marginInput, setMarginInput] = useState(null)

	const { nameValid } = useSelector((state) => state)
	const dispatch = useDispatch()

	function onBlur(value) {
		if (value.length > 0) {
			setMarginInput(true)
		} else {
			setMarginInput(false)
		}
	}
	const onNameValidate = (e) => {
		let name = e.target.value
		setName(name)

		if (name.length > 1 && name.length <= 40) {
			dispatch(setNameValid(true))
		} else {
			dispatch(setNameValid(false))
		}
	}
	return (
		<div
			className={styles.wallet_input}
			style={
				marginInput || name.length > 1
					? { marginTop: '40px' }
					: { marginTop: 0 }
			}>
			<input
				onInput={(e) => onNameValidate(e)}
				onFocus={() => setMarginInput(true)}
				onBlur={() => onBlur(name)}
				className={cn(styles.input, {
					[styles.success]: nameValid == true,
					[styles.error]: nameValid == false,
				})}
				type='text'
				id={id}
				name='name'
				required={true}
				value={name}
			/>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
			{errorPar ? (
				nameValid == false ? (
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

export default InputName
