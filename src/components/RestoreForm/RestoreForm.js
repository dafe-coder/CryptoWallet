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
import { setWalletChoose } from '../../actions/wallet'
const Form = () => {
	const dispatch = useDispatch()
	const { passwordValid, passwordMatch, nameValid, name, password } =
		useSelector((state) => state.create)

	const {
		restorePhrase,
		restorePhraseArr,
		restoreAddress,
		chooseCountWordRestore,
	} = useSelector((state) => state.restore)

	const [activeButton, setActiveButton] = useState(false)

	useEffect(() => {
		if (passwordValid && passwordMatch && nameValid) {
			setActiveButton(true)
		} else {
			setActiveButton(false)
		}
	}, [passwordValid, passwordMatch, nameValid])

	const getAddress = (phrase, chooseCountWordRestore) => {
		if (chooseCountWordRestore != 'own') {
			let code = new Mnemonic(phrase)
			const count = chooseCountWordRestore
			const result = generateAddressesFromSeed(code.phrase, count)
			console.log(result)
			dispatch(setRestoreAddress(result[0].address))
		} else {
			console.log('Используешь приватный код')
		}
	}
	const submitForm = () => {
		if (passwordValid && passwordMatch && nameValid) {
			chrome.storage.local.get(['userData'], function (result) {
				console.log(result)
				if (result.userData != undefined) {
					chrome.storage.local.set({
						userData: [
							...result.userData,
							{ name, password, restoreAddress: restoreAddress[0].address },
						],
					})
				} else {
					console.log('less 1')
					chrome.storage.local.set({
						userData: [
							{ name, password, restoreAddress: restoreAddress[0].address },
						],
					})
				}
			})
			chrome.storage.local.set({ WalletChoose: name }, function () {
				dispatch(setWalletChoose(name))
			})
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
				<Textarea
					getAddress={getAddress}
					id='input-phrase'
					label='Recovery phrase / private key'
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
