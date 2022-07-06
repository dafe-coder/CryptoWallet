import React, { useEffect, useState } from 'react'
import Par from './../../components/Par/Par'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { setCurrentPage } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'

const Form = () => {
	const dispatch = useDispatch()
	const { passwordValid, passwordMatch, nameValid } = useSelector(
		(state) => state
	)
	const [activeButton, setActiveButton] = useState(false)
	useEffect(() => {
		if (passwordValid && passwordMatch && nameValid) {
			setActiveButton(true)
		} else {
			setActiveButton(false)
		}
	}, [passwordValid, passwordMatch, nameValid])

	const submitForm = () => {
		if (passwordValid && passwordMatch && nameValid) {
			dispatch(setCurrentPage('CreateWalletSuccess'))
		} else {
		}
	}
	return (
		<form action='#' className='wallet_form'>
			<div className='create-wallet_info'>
				<Par>
					Your mnemonic phrase is encrypted and stored safety on your device.
					Only you have full access to your assets.
				</Par>
				<Input
					id='input-name'
					label='Wallet Name'
					errorPar='Wallet name requires at least 1 and at most 40 letters'
				/>
				<Input id='input-password' label='Spending password' type='password' />
				<Input
					id='confirm-password'
					label='Spending password'
					type='password-check'
					errorPar='Passwords doesn’t match!'
				/>
			</div>
			<Button
				type='primary'
				className={cn({ ['disabled']: activeButton == false })}
				onClick={submitForm}>
				<i className='fa-solid fa-wallet'></i>
				Create Personal wallet
			</Button>
		</form>
	)
}

export default Form
