import React from 'react'
import styles from './create-wallet-reg.module.css'
import cn from 'classnames'
import Form from '../../components/Form/Form'

import Title from './../../components/Title/Title'

const CreateWalletReg = () => {
	return (
		<section className={cn('bg-white', 'd-none')}>
			<Title>Create Wallet</Title>
			<div className='wallet_body'>
				<Form />
			</div>
		</section>
	)
}

export default CreateWalletReg
