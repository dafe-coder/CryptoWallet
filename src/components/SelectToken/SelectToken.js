import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import styles from './select-token.module.css'
import Svg from '../../svgs/Svg'
import getData from '../../pages/Func.wallet/getDataWallet'
import useWalletService from '../../services/WalletService'
import { useDispatch } from 'react-redux/es/exports'
import { setTokenTransaction } from '../../actions/wallet'

const SelectToken = ({ setValidToken }) => {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')
	const [active, setActive] = useState('Select a token')
	const [activeElem, setActiveElem] = useState({})
	const [openDropdown, setOpenDropdown] = useState(false)
	const [dataWithBalance, setDataWithBalance] = useState([])
	const [dataTokens, setDataTokens] = useState([])
	const [dataAll, setDataAll] = useState([])
	const [dataAllFiltered, setDataAllFiltered] = useState([])
	const { loading, error, getDataWallet, getAllTokens } = useWalletService()
	useEffect(() => {
		getData(dispatch, getDataWallet, onLoadedListTokenWithBalance)
	}, [])

	useEffect(() => {
		getAllTokens(setDataTokens)
	}, [])

	useEffect(() => {
		let filtered = []
		if (value != '') {
			filtered = dataAll.filter(
				(item) => item.name.toLowerCase().indexOf(value.toLowerCase()) != -1
			)
		} else {
			filtered = dataAll
		}
		setDataAllFiltered(filtered)
	}, [value])
	useEffect(() => {
		const balanceArr = dataWithBalance.map((item) => item.name.toLowerCase())
		let filtered = dataTokens.filter((per) => {
			if (balanceArr.includes(per.name.toLowerCase()) == false) {
				return per
			}
		})
		setDataAll([...dataWithBalance, ...filtered])
		setDataAllFiltered([...dataWithBalance, ...filtered])
	}, [dataTokens, dataWithBalance])

	useEffect(() => {
		console.log(activeElem)
	}, [activeElem])

	const onLoadedListTokenWithBalance = (list) => {
		setDataWithBalance(list)
	}
	const onChooseToken = (item) => {
		let elemChoose = dataAll.filter((token) => token.name == item.name)
		setActiveElem(elemChoose[0])
		setActive(item.name)
		setOpenDropdown(false)
		dispatch(setTokenTransaction(elemChoose[0]))
		setValidToken(true)
	}

	return (
		<div className={styles.body}>
			<label className={styles.label_relative}>Asset Name</label>
			<div className={styles.dropdown}>
				<button
					className={styles.select}
					onClick={() => setOpenDropdown(!openDropdown)}>
					{active == 'Select a token' ? (
						active
					) : (
						<div className={styles.item}>
							<div className={styles.logo}>
								<img src={activeElem.image.thumb} alt={activeElem.name} />
							</div>
							<h4 className={styles.title}>{activeElem.name}</h4>
						</div>
					)}
					<Svg
						type='arr-sm-down'
						className={cn(styles.svg, {
							[styles.active_svg]: openDropdown == true,
						})}
					/>
				</button>
				<ul
					className={cn(styles.list, {
						[styles.open]: openDropdown == true,
					})}>
					<li className={styles.search}>
						<input
							type='text'
							id='search-assets-transaction'
							className={styles.input}
							required={true}
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
						<label htmlFor='search-assets-transaction' className={styles.label}>
							<Svg type='search' />
							Search for asset
						</label>
					</li>
					{dataAllFiltered.length >= 1 ? (
						dataAllFiltered.map((item) => {
							return (
								<li
									key={item.id}
									className={cn({
										[styles.active]: active == item.name,
									})}
									onClick={() => onChooseToken(item)}>
									<div className={styles.logo}>
										<img src={item.image.thumb} alt='' />
									</div>
									<div className={styles.info}>
										<h5 className={styles.title}>{item.name}</h5>
										<p className={styles.par}>Bitcoin</p>
									</div>
									<span>{item.market_data.balance_crypto.usd}</span>
								</li>
							)
						})
					) : (
						<h4>Nothing</h4>
					)}
				</ul>
			</div>
		</div>
	)
}
export default SelectToken
