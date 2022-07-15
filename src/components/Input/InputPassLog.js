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

	return (
		<div className={styles.wallet_input}>
			<ShowPass walletInput={styles.wallet_input} />
			<input
				onChange={(e) => setPassLog(e.target.value)}
				className={'input'}
				type='password'
				id={id}
				name='pass'
				required={true}
				value={passLog}
			/>
			<label className='label' htmlFor={id}>
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
