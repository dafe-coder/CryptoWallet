import React from 'react'
import cn from 'classnames'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import PhraseBox from '../../components/PhraseBox/PhraseBox'
import { useSelector } from 'react-redux'
import {
	setCurrentPage,
	setShowErrorVerification,
	setShowSuccessVerification,
} from '../../actions/createActions'
import { setWord3 } from '../../actions/createActions'
import { useDispatch } from 'react-redux'

const VerificatePhrase3 = () => {
	const { word1, word2, word3, phraseArr } = useSelector(
		(state) => state.create
	)
	const dispatch = useDispatch()

	const goToNextPage = () => {
		if (
			phraseArr[2] === word1 &&
			phraseArr[11] === word2 &&
			phraseArr[5] === word3
		) {
			dispatch(setShowSuccessVerification(true))
		} else {
			dispatch(setShowErrorVerification(true))
			dispatch(setCurrentPage('VerificatePhrase1'))
		}
	}
	return (
		<section className={cn('bg-white')}>
			<Title>Back Up Wallet</Title>
			<div className='wallet_body'>
				<div className='wallet_body__top'>
					<Title type='sm'>Please verify your mnemonic phrase: (3/3)</Title>
					<PhraseBox btns={false} />
					<Title type='sm'>Select word number 6:</Title>
					<PhraseBox btns={false} select={true} setWord={setWord3} />
				</div>
				<div className='wallet_body__bottom'>
					<Button
						onClick={goToNextPage}
						className={cn({ ['disabled']: word3 == '' })}
						type='primary'
						id='confirm-info-btn'>
						Next
					</Button>
				</div>
			</div>
		</section>
	)
}

export default VerificatePhrase3
