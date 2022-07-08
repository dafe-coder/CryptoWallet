import React from 'react'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import AccountCard from '../../components/AccountCard/AccountCard'
import GoBack from '../../components/GoBack/GoBack'

const RestoreWalletLog = () => {
	const goReg = () => {
		alert('Success')
	}
	return (
		<section className='bg-white'>
			<GoBack goTo='RestoreWalletReg' />
			<Title>Restore Wallet</Title>
			<div className='wallet_body'>
				<div className='wallet_body__top'>
					<Title type='subtitle'>Confirm the account to be restored:</Title>
					<AccountCard />
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
