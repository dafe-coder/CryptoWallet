import React, { useEffect, useState } from 'react'
import AssetsSearch from '../../components/AssetsSearch/AssetsSearch'
import Title from './../../components/Title/Title'
import AssetsList from '../../components/AssetsList/AssetsList'
import styles from './choose-assets.module.css'
import Buttons from '../../components/Buttons/Buttons'
import { setCurrentPage } from '../../actions/createActions'
import { useDispatch } from 'react-redux'
const ChooseAssets = () => {
	const dispatch = useDispatch()
	const [dataTokens, setDataTokens] = useState([])

	function getAllTokens() {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '858e123930msh2cf167f2a15665ep164d8ajsnb1e687303080',
				'X-RapidAPI-Host': 'mineable-coins.p.rapidapi.com',
			},
		}

		fetch('https://mineable-coins.p.rapidapi.com/coins', options)
			.then((response) => response.json())
			.then((response) => setDataTokens(response))
			.catch((err) => console.error(err))
	}
	// useEffect(() => {
	// 	getAllTokens()
	// }, [])
	return (
		<section className='bg-white'>
			<div className='wallet-body'>
				<div className={styles.header}>
					<Buttons
						onClick={() => dispatch(setCurrentPage('Wallet'))}
						type='back'></Buttons>
					<Title>Assets (3/273)</Title>
					<Buttons type='settings'></Buttons>
				</div>
				<div className='wallet-top'>
					<AssetsSearch />
				</div>
				<div className='wallet-bottom'>
					<AssetsList dataTokens={dataTokens} value='zpool Allium' />
				</div>
			</div>
		</section>
	)
}

export default ChooseAssets
