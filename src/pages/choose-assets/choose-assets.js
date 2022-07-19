import React, { useEffect, useState } from 'react'
import AssetsSearch from '../../components/AssetsSearch/AssetsSearch'
import Title from './../../components/Title/Title'
import AssetsList from '../../components/AssetsList/AssetsList'
import styles from './choose-assets.module.css'
import Buttons from '../../components/Buttons/Buttons'
import { setCurrentPage } from '../../actions/createActions'
import { useDispatch } from 'react-redux'
import useWalletService from '../../services/WalletService'
import CoinGecko from 'coingecko-api'

const ChooseAssets = () => {
	const dispatch = useDispatch()
	const [dataTokens, setDataTokens] = useState([])
	const [value, setValue] = useState([])
	const { loading, error, getWalletToken } = useWalletService()
	const CoinGeckoClient = new CoinGecko()

	var func = async () => {
		let data = await CoinGeckoClient.coins.all()
		setDataTokens(data)
	}

	useEffect(() => {
		func()
	}, [])

	return (
		<section className='bg-white'>
			<div className='wallet-body'>
				<div className={styles.header}>
					<Buttons
						onClick={() => dispatch(setCurrentPage('Wallet'))}
						type='back'></Buttons>
					<Title mt>
						Assets (3/{dataTokens.length ? dataTokens.data.length : 0})
					</Title>
					<Buttons
						type='settings'
						onClick={() => dispatch(setCurrentPage('CustomToken'))}></Buttons>
				</div>
				<div className='wallet-top'>
					<AssetsSearch setValue={setValue} value={value} />
				</div>
				<div className='wallet-bottom'>
					<AssetsList dataTokens={dataTokens} value={value} />
				</div>
			</div>
		</section>
	)
}

export default ChooseAssets
