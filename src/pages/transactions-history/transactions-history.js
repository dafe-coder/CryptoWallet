import React, { useEffect } from 'react'
import Buttons from '../../components/Buttons/Buttons'
import Title from '../../components/Title/Title'
import Svg from '../../svgs/Svg'
import TransactionList from './../../components/TransactionList/TransactionList'
import { setCurrentPage } from '../../actions/createActions'
import { useDispatch } from 'react-redux'

const TransactionsHistory = () => {
	const dispatch = useDispatch()
	const data = ['send', 'receive', 'send', 'swap']

	return (
		<section className='bg-white'>
			<div
				className='wallet-body'
				style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
				<div className='wallet-top'>
					<div className='wallet-header'>
						<Buttons
							onClick={() => dispatch(setCurrentPage('Wallet'))}
							type='back'></Buttons>
						<Title>Transactions History</Title>
						<Buttons type='settings'></Buttons>
					</div>
				</div>
				<div
					className={
						data.length ? 'wallet-center' : 'wallet-center wallet-center-df'
					}>
					{data.length ? (
						<TransactionList style={{ marginTop: '0' }} data={data} />
					) : (
						<div className='nothing'>
							<Svg type='clock' />
							<Title mb mt='30'>
								Don’t have history
							</Title>
						</div>
					)}
				</div>
				<div className='wallet-bottom'>
					<a
						className={
							data.length ? 'link primary-link' : 'link transparent-link'
						}
						href='#'>
						Delete All <Svg type='trash' />
					</a>
				</div>
			</div>
		</section>
	)
}
export default TransactionsHistory
