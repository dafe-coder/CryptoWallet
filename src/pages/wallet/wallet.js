import React, { useState, useEffect } from 'react'
import styles from './wallet.module.css'
import { useDispatch } from 'react-redux'
import ApexChart from '../../components/PieChar/PieChar'
import PortfolioList from './../../components/PortfolioList/PortfolioList'
import TransferBtn from '../../components/TransferBtn/TransferBtn'
import Title from '../../components/Title/Title'
import Buttons from './../../components/Buttons/Buttons'
import { useSelector } from 'react-redux'
import useWalletService from '../../services/WalletService'
import { setCurrentPage } from '../../actions/createActions'
import Sort from '../../components/Sort/Sort'
import Svg from './../../svgs/Svg'
import Web3 from 'web3'
const Wallet = () => {
	const { portfolioSort } = useSelector((state) => state.wallet)
	const dispatch = useDispatch()
	const { loading, error, getDataWallet } = useWalletService()
	const [sortOpen, setSortOpen] = useState(false)
	const [portfolioList, setPortfolioList] = useState([])
	const [portfolioListSorted, setPortfolioListSorted] = useState([])

	const filterData = (type, list = portfolioList) => {
		let sortedArr = []
		switch (type) {
			case 'name':
				sortedArr = list.sort(function (a, b) {
					if (a.contract_ticker_symbol > b.contract_ticker_symbol) {
						return 1
					}
					if (a.contract_ticker_symbol < b.contract_ticker_symbol) {
						return -1
					}
					return 0
				})
				break
			case 'value':
				sortedArr = list.sort(function (a, b) {
					if (
						Number(Web3.utils.fromWei(String(a.balance), 'ether')).toFixed(5) >
						Number(Web3.utils.fromWei(String(b.balance), 'ether')).toFixed(5)
					) {
						return -1
					}
					if (
						Number(Web3.utils.fromWei(String(a.balance), 'ether')).toFixed(5) <
						Number(Web3.utils.fromWei(String(b.balance), 'ether')).toFixed(5)
					) {
						return 1
					}
					return 0
				})
				break
			case 'volume':
				sortedArr = list.sort(function (a, b) {
					if (
						((a.quote_rate / a.quote_rate_24h) * 100 - 100).toFixed(3) >
						((b.quote_rate / b.quote_rate_24h) * 100 - 100).toFixed(3)
					) {
						return -1
					}
					if (
						((a.quote_rate / a.quote_rate_24h) * 100 - 100).toFixed(3) <
						((b.quote_rate / b.quote_rate_24h) * 100 - 100).toFixed(3)
					) {
						return 1
					}
					return 0
				})
				break
			default:
				sortedArr = list
				break
		}
		setPortfolioListSorted(sortedArr)
	}

	useEffect(() => {
		getDataWallet().then((data) => onPortfolioListLoaded(data.items))
	}, [])

	const onPortfolioListLoaded = (list) => {
		setPortfolioList(list)
		setPortfolioListSorted(list)
		filterData(portfolioSort, list)
	}
	return (
		<section className={'bg-white'}>
			<div className='wallet-body'>
				<div className='wallet-header' style={{ marginBottom: '20px' }}>
					<Buttons type='notification'></Buttons>
					<Title>Your Account</Title>
					<Buttons type='account'></Buttons>
				</div>
				<div className='wallet-top' style={{ position: 'relative' }}>
					<TransferBtn type='send'>Transfer</TransferBtn>
					<ApexChart />
					<TransferBtn type='receive'>Receive</TransferBtn>
				</div>
				<div className='wallet-bottom'>
					<ul className={styles.navigation}>
						<li onClick={() => dispatch(setCurrentPage('ChooseAssets'))}>
							<span>
								<Svg type='plus-bold' />
								Manage assets
							</span>
						</li>
						<li
							style={{ position: 'relative' }}
							onClick={() => setSortOpen(!sortOpen)}>
							<span>
								<Svg type='filter-light' />
								Portfolio{' '}
								{portfolioSort[0].toUpperCase() + portfolioSort.slice(1)}
								<Svg type='check' />
							</span>
							<Sort filterData={filterData} sortOpen={sortOpen} />
						</li>
					</ul>
					<PortfolioList
						data={portfolioListSorted}
						className={styles.portfolio_list}
					/>
				</div>
			</div>
		</section>
	)
}

export default Wallet
