import React, { useEffect, useState } from 'react'
import Title from '../../components/Title/Title'
import TransactionBtn from '../../components/TransactionsBtn/TransactionBtn'
import TransactionInfo from './../../components/TransactionInfo/TransactionInfo'
import style from './transaction.module.css'
import TransactionList from './../../components/TransactionList/TransactionList'
import Buttons from '../../components/Buttons/Buttons'
import { setCurrentPage } from '../../actions/createActions'
import { useDispatch, useSelector } from 'react-redux'
import useWalletService from '../../services/WalletService'
import { setPortfolioData } from '../../actions/wallet'
import Web3 from 'web3'
import transactionsSend from '../Func.wallet/transaction'
import getData from './../Func.wallet/getDataWallet'

const Transactions = () => {
	const dispatch = useDispatch()
	const { loading, error, getDataWallet } = useWalletService()
	let itemPortfolio = []
	const { portfolioOpen, portfolioData } = useSelector((state) => state.wallet)
	const data = ['send', 'receive', 'send', 'swap']
	useEffect(() => {
		getData(dispatch, getDataWallet, onPortfolioLoaded)
	}, [])
	const onPortfolioLoaded = (list) => {
		itemPortfolio = list.filter(
			(item) => item.contract_ticker_symbol == portfolioOpen
		)
		dispatch(setPortfolioData(itemPortfolio))
	}
	return (
		<section className='bg-white'>
			<div className='wallet-body'>
				<div className='wallet-header'>
					<Buttons
						onClick={() => dispatch(setCurrentPage('Wallet'))}
						type='back'></Buttons>
					<Title>Transactions</Title>
					<div></div>
				</div>
				<div className='wallet-top'>
					{portfolioData.length >= 1 ? (
						<TransactionInfo
							cryptoImg={portfolioData[0].logo_url}
							cryptoName={portfolioData[0].contract_ticker_symbol}
							cryptoPrice={
								+Number(
									+Number(
										Web3.utils.fromWei(
											String(portfolioData[0].balance),
											'ether'
										)
									) * +Number(portfolioData[0].quote_rate)
								).toFixed(2)
							}
							cryptoCount={portfolioData[0].balance}
						/>
					) : (
						<></>
					)}
					<div className={style.btns}>
						<TransactionBtn type='send' />
						<TransactionBtn type='receive' />
						<TransactionBtn type='swap' />
					</div>
				</div>
				<div className='wallet-bottom'>
					<TransactionList data={data} />
				</div>
			</div>
		</section>
	)
}
export default Transactions
