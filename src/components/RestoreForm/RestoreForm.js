import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Textarea from './../Textarea/Textarea'
import { setCurrentPage } from '../../actions/createActions'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'
import generateAddressesFromSeed from '../../pages/Func.wallet/generateAddress'
import Mnemonic from 'bitcore-mnemonic/lib/mnemonic'
import { setRestoreAddress } from './../../actions/restoreActions'
const Form = () => {
	const dispatch = useDispatch()
	const { passwordValid, passwordMatch, nameValid, name, password } =
		useSelector((state) => state.create)

	const { restorePhrase, restorePhraseValid, chooseCountWordRestore } =
		useSelector((state) => state.restore)

	const [activeButton, setActiveButton] = useState(false)

	useEffect(() => {
		if (passwordValid && passwordMatch && nameValid) {
			setActiveButton(true)
		} else {
			setActiveButton(false)
		}
	}, [passwordValid, passwordMatch, nameValid])

	const getAddress = () => {
		if (+chooseCountWordRestore == restorePhrase.length) {
			let code = new Mnemonic(restorePhrase)
			const count = chooseCountWordRestore
			const result = generateAddressesFromSeed(code.phrase, count)
			dispatch(setRestoreAddress(result))
		} else {
			alert('Используешь приватный код')
		}
	}
	const submitForm = () => {
		if (passwordValid && passwordMatch && nameValid) {
			chrome.storage.sync.set(
				{ userData: [name, password, restoreAddress] },
				function () {
					console.log('Value is set to ' + [name, password, restoreAddress])
				}
			)
			getAddress()
			dispatch(setCurrentPage('RestoreWalletLog'))
		} else {
		}
	}
	return (
		<form action='#' className='wallet_form'>
			<div className='create-wallet_info'>
				<Input
					id='input-name'
					label='Wallet Name'
					errorPar='Wallet name requires at least 1 and at most 40 letters'
				/>
				<Textarea id='input-phrase' label='Recovery phrase / private key' />
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
