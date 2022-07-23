import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import styles from './select.module.css'
import Svg from '../../svgs/Svg'
import getData from '../../pages/Func.wallet/getDataWallet'
import useWalletService from '../../services/WalletService'
import { useDispatch, useSelector } from 'react-redux'
import { setTokenTransaction } from '../../actions/wallet'
import { setTokenBuy } from '../../actions/wallet'

const SelectBuy = ({ setValidToken }) => {
	const dispatch = useDispatch()
	const { currencyValue, currentCurrency, tokenBuy } = useSelector(
		(state) => state.wallet
	)
	const [value, setValue] = useState('')
	const [priceToken, setPriceToken] = useState('')
	const [active, setActive] = useState('Select a token')
	const [activeElem, setActiveElem] = useState({})
	const [openDropdown, setOpenDropdown] = useState(false)
	const [dataTokens, setDataTokens] = useState([])
	const [dataAllFiltered, setDataAllFiltered] = useState([])
	const { loading, error, getAllTokens } = useWalletService()

	useEffect(() => {
		getAllTokens(setDataTokens)
	}, [])

	useEffect(() => {
		setDataAllFiltered(dataTokens)
	}, [dataTokens])
	useEffect(() => {
		console.log(dataTokens)
	}, [dataTokens])

	useEffect(() => {
		let filtered = []
		if (value != '') {
			filtered = dataTokens.filter(
				(item) => item.name.toLowerCase().indexOf(value.toLowerCase()) != -1
			)
		} else {
			filtered = dataTokens
		}
		setDataAllFiltered(filtered)
	}, [value])

	const onChooseToken = (item) => {
		let elemChoose = dataTokens.filter((token) => token.name == item.name)
		setActiveElem(elemChoose[0])
		setActive(item.name)
		setOpenDropdown(false)
		setValidToken(true)
		dispatch(setTokenBuy(elemChoose))
	}
	useEffect(() => {
		if (tokenBuy.length) {
			addValue()
		}
	}, [currencyValue, tokenBuy, currentCurrency])
	const addValue = () => {
		let price =
			tokenBuy[0].market_data.current_price[currentCurrency.toLowerCase()]
		setPriceToken(price * currencyValue)
	}

	return (
		<div className={styles.body}>
			<label className={styles.label_relative}>Asset Name</label>
			<div className={styles.dropdown}>
				<button className={styles.select}>
					<span
						style={{ flexGrow: '1', flexShrink: '0' }}
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
					</span>
					<Svg
						type='arr-sm-down'
						className={cn(styles.svg, {
							[styles.active_svg]: openDropdown == true,
						})}
					/>
					<input
						className={styles.input_value}
						type='text'
						placeholder='0'
						disabled
						value={priceToken}
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
export default SelectBuy
