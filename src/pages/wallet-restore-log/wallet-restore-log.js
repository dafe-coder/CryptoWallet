import React from 'react'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import GoBack from '../../components/GoBack/GoBack'
import AccountCardReg from './../../components/AccountCardReg/AccountCardReg'
import { setCurrentPage } from '../../actions/createActions'
import { useDispatch } from 'react-redux'

const RestoreWalletLog = () => {
	const dispatch = useDispatch()
	const goReg = () => {
		dispatch(setCurrentPage('Wallet'))
	}
	return (
		<section className='bg-white'>
			<GoBack goTo='RestoreWalletReg' />
			<Title>Restore Wallet</Title>
			<div className='wallet_body'>
				<div className='wallet_body__top'>
					<Title type='subtitle'>Confirm the account to be restored:</Title>
					<AccountCardReg />
				</div>
				<div className='wallet-body__bottom'>
					<Button onClick={goReg} type='primary'>
						Confirm
					</Button>
				</div>
			</div>
		</section>
	)
}

export default RestoreWalletLog
