import React, { useState } from 'react'
import cn from 'classnames'
import Title from '../../components/Title/Title'
import Buttons from '../../components/Buttons/Buttons'
import Button from '../../components/Button/Button'
import SelectBuy from '../../components/SelectBuy/SelectBuy'
import { setCurrentPage } from '../../actions/createActions'
import { useDispatch } from 'react-redux'
import SelectCurrency from '../../components/SelectBuy/SelectCurrency'

const Buy = () => {
	const [validCurrency, setValidCurrency] = useState(false)
	const [validToken, setValidToken] = useState(false)
	const dispatch = useDispatch()
	const goPay = () => {
		if (validCurrency && setValidCurrency) {
			window.open('https://www.moonpay.com/buy')
		}
	}
	return (
		<section className='bg-white'>
			<div className='wallet_body'>
				<div className='wallet-top'>
					<div className='wallet-header'>
						<Buttons
							onClick={() => dispatch(setCurrentPage('Wallet'))}
							type='back'></Buttons>
						<Title>Buy Crypto</Title>
						<div></div>
					</div>
					<SelectCurrency setValidCurrency={setValidCurrency} />
					<SelectBuy setValidToken={setValidToken} />
				</div>
				<div className='wallet-bottom'>
					<Button
						type='primary'
						className={cn('btn', {
							['disabled']: validCurrency == false || validToken == false,
						})}
						onClick={() => goPay()}>
						Continue
					</Button>
				</div>
			</div>
		</section>
	)
}
export default Buy
