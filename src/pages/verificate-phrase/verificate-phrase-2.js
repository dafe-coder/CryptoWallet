import React from 'react'
import cn from 'classnames'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import PhraseBox from '../../components/PhraseBox/PhraseBox'
import { useSelector } from 'react-redux'
import { setCurrentPage } from '../../actions'
import { setWord2 } from './../../actions'
import { useDispatch } from 'react-redux'

const VerificatePhrase2 = () => {
	const { word2 } = useSelector((state) => state)
	const dispatch = useDispatch()

	const goToNextPage = () => {
		dispatch(setCurrentPage('VerificatePhrase3'))
	}
	return (
		<section className={cn('bg-white')}>
			<Title>Back Up Wallet</Title>
			<div className='wallet_body'>
				<div className='wallet_body__top'>
					<Title type='sm'>Please verify your mnemonic phrase: (2/3)</Title>
					<PhraseBox btns={false} />
					<Title type='sm'>Select word number 12:</Title>
					<PhraseBox btns={false} select={true} setWord={setWord2} />
				</div>
				<div className='wallet_body__bottom'>
					<Button
						onClick={goToNextPage}
						className={cn({ ['disabled']: word2 == '' })}
						type='primary'
						id='confirm-info-btn'>
						Next
					</Button>
				</div>
			</div>
		</section>
	)
}

export default VerificatePhrase2
