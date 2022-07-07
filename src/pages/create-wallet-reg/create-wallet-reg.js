import React from 'react'
import styles from './create-wallet-reg.module.css'
import cn from 'classnames'
import Form from '../../components/Form/Form'

import Title from './../../components/Title/Title'
import GoBack from './../../components/GoBack/GoBack'

const CreateWalletReg = () => {
	return (
		<section className={cn('bg-white')}>
			<Title>Create Wallet</Title>
			<GoBack goTo='Home' />
			<div className='wallet_body'>
				<Form />
			</div>
		</section>
	)
}

export default CreateWalletReg
