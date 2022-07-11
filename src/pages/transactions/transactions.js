import React from 'react'
import Title from '../../components/Title/Title'
import TransactionBtn from '../../components/TransactionsBtn/TransactionBtn'
import TransactionInfo from './../../components/TransactionInfo/TransactionInfo'
import btcImg from './btc.png'
import style from './transaction.module.css'
import TransactionList from './../../components/TransactionList/TransactionList'
const Transactions = () => {
	return (
		<section className='bg-white'>
			<div className='wallet-body'>
				<Title>Transactions</Title>
				<div className='wallet-top'>
					<TransactionInfo
						cryptoImg={btcImg}
						cryptoName='BTC'
						cryptoPrice='50,000'
						cryptoCount='0.3 BTC'
					/>
					<div className={style.btns}>
						<TransactionBtn type='send' />
						<TransactionBtn type='receive' />
						<TransactionBtn type='swap' />
					</div>
				</div>
				<div className='wallet-bottom'>
					<TransactionList />
				</div>
			</div>
		</section>
	)
}
export default Transactions
