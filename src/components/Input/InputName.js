import React from 'react'
import Par from '../Par/Par'
import styles from './input.module.css'
import cn from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { setNameValid, setName } from '../../actions/createActions'

const InputName = ({ id, label, errorPar }) => {
	const { nameValid, name } = useSelector((state) => state.create)
	const dispatch = useDispatch()

	const onNameValidate = (e) => {
		let name = e.target.value
		dispatch(setName(name))

		if (name.length > 1 && name.length <= 40) {
			dispatch(setNameValid(true))
		} else {
			dispatch(setNameValid(false))
		}
	}
	return (
		<div className={styles.wallet_input}>
			<input
				onInput={(e) => onNameValidate(e)}
				className={cn('input', {
					[styles.success]: nameValid == true,
					[styles.error]: nameValid == false,
				})}
				type='text'
				id={id}
				name='name'
				required={true}
				value={name}
			/>
			<label className='label' htmlFor={id}>
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
