import React from 'react'
import cn from 'classnames'
import RestoreForm from '../../components/RestoreForm/RestoreForm'
import Title from '../../components/Title/Title'
import GoBack from '../../components/GoBack/GoBack'

const RestoreWalletReg = () => {
	return (
		<section className={cn('bg-white')}>
			<GoBack goTo='WalletRestore' />
			<Title>Create Wallet</Title>
			<div className='wallet_body'>
				<RestoreForm />
			</div>
		</section>
	)
}

export default RestoreWalletReg
