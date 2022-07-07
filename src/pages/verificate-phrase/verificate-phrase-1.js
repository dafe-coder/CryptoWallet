import React from 'react'
import cn from 'classnames'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import PhraseBox from './../../components/PhraseBox/PhraseBox'
import { useSelector } from 'react-redux'
import { setCurrentPage } from '../../actions/createActions'
import { setWord1 } from '../../actions/createActions'
import { useDispatch } from 'react-redux'
import GoBack from '../../components/GoBack/GoBack'

const VerificatePhrase1 = () => {
	const { word1 } = useSelector((state) => state.create)
	const dispatch = useDispatch()
	const goToNextPage = () => {
		dispatch(setCurrentPage('VerificatePhrase2'))
	}
	return (
		<section className={cn('bg-white')}>
			<GoBack goTo='CreatePhrase' />
			<Title>Back Up Wallet</Title>
			<div className='wallet_body'>
				<div className='wallet_body__top'>
					<Title type='sm'>Please verify your mnemonic phrase: (1/3)</Title>
					<PhraseBox btns={false} />
					<Title type='sm'>Select word number 3:</Title>
					<PhraseBox btns={false} select={true} setWord={setWord1} />
				</div>
				<div className='wallet_body__bottom'>
					<Button
						onClick={goToNextPage}
						className={cn({ ['disabled']: word1 == '' })}
						type='primary'
						id='confirm-info-btn'>
						Next
					</Button>
				</div>
			</div>
		</section>
	)
}

export default VerificatePhrase1
