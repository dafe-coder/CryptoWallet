import React from 'react'
import cn from 'classnames'
import RestoreForm from '../../components/RestoreForm/RestoreForm'

import Title from '../../components/Title/Title'

const RestoreWalletReg = () => {
	return (
		<section className={cn('bg-white')}>
			<Title>Create Wallet</Title>
			<div className='wallet_body'>
				<RestoreForm />
			</div>
		</section>
	)
}

export default RestoreWalletReg
