import React from 'react'
import cn from 'classnames'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import Par from '../../components/Par/Par'
import PhraseBox from './../../components/PhraseBox/PhraseBox'

const VerificatePhrase1 = () => {
	return (
		<section className={cn('bg-white', 'd-none')}>
			<Title>Back Up Wallet</Title>
			<div className='wallet_body'>
				<div className='wallet_body__top'>
					<Title type='sm'>Please verify your mnemonic phrase: (1/3)</Title>
					<PhraseBox btns={false} />
					<Title type='sm'>Select word number 3:</Title>
					<PhraseBox btns={false} select={true} />
				</div>
				<div className='wallet_body__bottom'>
					<Button type='primary' id='confirm-info-btn'>
						Back Up
						<i className='fa-solid fa-arrow-right-long'></i>
					</Button>
				</div>
			</div>
		</section>
	)
}

export default VerificatePhrase1
