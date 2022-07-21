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
import CoinGecko from 'coingecko-api'
import getData from '../Func.wallet/getDataWallet'

const Wallet = () => {
	const { portfolioSort, loginUser } = useSelector((state) => state.wallet)
	const dispatch = useDispatch()
	const { loading, error, getDataWallet } = useWalletService()
	const [sortOpen, setSortOpen] = useState(false)
	const [portfolioListSorted, setPortfolioListSorted] = useState([])
	const [portfolioFrst, setPortfolioFrst] = useState([])
	const [portfolioScnd, setPortfolioScnd] = useState([])
	const [arrChoose, setArrChoose] = useState([])
	const [dataTokens, setDataTokens] = useState([])

	const filterData = (type, list = portfolioListSorted) => {
		let sortedArr = []
		switch (type) {
			case 'name':
				sortedArr = list.sort(function (a, b) {
					if (a.symbol > b.symbol) {
						return 1
					}
					if (a.symbol < b.symbol) {
						return -1
					}
					return 0
				})
				break
			case 'value':
				sortedArr = list.sort(function (a, b) {
					if (
						Number(
							Web3.utils.fromWei(
								String(a.market_data.current_price.balance),
								'ether'
							)
						).toFixed(3) >
						Number(
							Web3.utils.fromWei(
								String(b.market_data.current_price.balance),
								'ether'
							)
						).toFixed(3)
					) {
						return -1
					}
					if (
						Number(
							Web3.utils.fromWei(
								String(a.market_data.current_price.balance),
								'ether'
							)
						).toFixed(3) <
						Number(
							Web3.utils.fromWei(
								String(b.market_data.current_price.balance),
								'ether'
							)
						).toFixed(3)
					) {
						return 1
					}
					return 0
				})
				break
			case 'change':
				sortedArr = list.sort(function (a, b) {
					if (
						(
							(a.market_data.current_price.usd / a.market_data.high_24h.usd) *
								100 -
							100
						).toFixed(3) >
						(
							(b.market_data.current_price.usd / b.market_data.high_24h.usd) *
								100 -
							100
						).toFixed(3)
					) {
						return -1
					}
					if (
						(
							(a.market_data.current_price.usd / a.market_data.high_24h.usd) *
								100 -
							100
						).toFixed(3) <
						(
							(b.market_data.current_price.usd / b.market_data.high_24h.usd) *
								100 -
							100
						).toFixed(3)
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
		chrome.storage.local.get(['userData'], function (result) {
			if (result.userData.length >= 1) {
				chrome.storage.local.get(['WalletChoose'], function (res) {
					if (res.WalletChoose) {
						result.userData.map((item) => {
							if (res.WalletChoose == item.name) {
								if (item.chooseAssets && item.chooseAssets.length) {
									setArrChoose(item.chooseAssets)
								}
							}
						})
					}
				})
			}
		})
		const CoinGeckoClient = new CoinGecko()

		var func = async () => {
			let data = await CoinGeckoClient.coins.all()
			setDataTokens(data)
		}
		func()
	}, [])

	useEffect(() => {
		if (dataTokens.data != undefined && arrChoose && arrChoose.length >= 1) {
			let newArr = arrChoose.map((token) => {
				return dataTokens.data.filter((item) => {
					if (token == item.id) {
						item.market_data.balance = 0
						return item
					}
				})
			})
			let newArrObj = newArr.map((item) => item[0])
			setPortfolioScnd(newArrObj)
		}
	}, [dataTokens])

	useEffect(() => {
		getData(dispatch, getDataWallet, onPortfolioListLoaded)
	}, [])

	useEffect(() => {
		setPortfolioListSorted([...portfolioFrst, ...portfolioScnd])
		// console.log(portfolioListSorted)
	}, [portfolioFrst, portfolioScnd])

	const onPortfolioListLoaded = (list) => {
		let newList = rebuildObj(list)
		setPortfolioFrst(newList)
	}

	function rebuildObj(list) {
		const newList = list.map((obj) => {
			console.log(
				Number(Web3.utils.fromWei(String(obj.balance), 'ether')).toFixed(3)
			)
			return {
				id: obj.contract_name,
				symbol: obj.contract_ticker_symbol,
				market_data: {
					current_price: {
						usd: obj.quote_rate,
					},
					balance: Number(
						Web3.utils.fromWei(String(obj.balance), 'ether')
					).toFixed(3),
					high_24h: {
						usd: obj.quote_rate_24h,
					},
				},
				image: {
					thumb: obj.logo_url,
				},
			}
		})
		return newList
	}
	return (
		<section className={'bg-white'}>
			<div className='wallet-body'>
				<div className='wallet-header' style={{ marginBottom: '20px' }}>
					<Buttons
						type='notification'
						onClick={() =>
							dispatch(setCurrentPage('TransactionsHistory'))
						}></Buttons>
					<Title>Your Account</Title>
					<Buttons
						onClick={() => dispatch(setCurrentPage('Accounts'))}
						type='account'></Buttons>
				</div>
				<div className='wallet-top' style={{ position: 'relative' }}>
					<TransferBtn
						onClick={() => dispatch(setCurrentPage('Sent'))}
						type='send'>
						Transfer
					</TransferBtn>
					<ApexChart />
					<TransferBtn
						onClick={() => dispatch(setCurrentPage('Receive'))}
						type='receive'>
						Receive
					</TransferBtn>
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
