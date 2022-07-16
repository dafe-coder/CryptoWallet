import React from 'react'
import { useState } from 'react'
import Par from '../Par/Par'
import cn from 'classnames'
import ShowPass from '../ShowPass/ShowPass'
import styles from './input.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setPassword } from '../../actions/createActions'
const InputPassLog = ({ id, label, errorPar }) => {
	const dispatch = useDispatch()
	const { password } = useSelector((state) => state.create)

	return (
		<div className={styles.wallet_input}>
			<ShowPass walletInput={styles.wallet_input} />
			<input
				onChange={(e) => dispatch(setPassword(e.target.value))}
				className={'input'}
				type='password'
				id={id}
				name='pass'
				required={true}
				value={password}
			/>
			<label className='label' htmlFor={id}>
				{label}
			</label>
			{errorPar ? (
				password == false ? (
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
