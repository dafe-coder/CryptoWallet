import React from 'react'
import AssetsSearch from '../../components/AssetsSearch/AssetsSearch'
import Title from './../../components/Title/Title'
import AssetsList from '../../components/AssetsList/AssetsList'
import styles from './choose-assets.module.css'
import Buttons from '../../components/Buttons/Buttons'
import { setCurrentPage } from '../../actions/createActions'
import { useDispatch } from 'react-redux'
const ChooseAssets = () => {
	const dispatch = useDispatch()

	return (
		<section className='bg-white'>
			<div className='wallet-body'>
				<div className={styles.header}>
					<Buttons
						type='back'
						onClick={() => dispatch(setCurrentPage('Wallet'))}></Buttons>
					<Title>Assets (3/273)</Title>
					<Buttons type='settings'></Buttons>
				</div>
				<div className='wallet-top'>
					<AssetsSearch />
				</div>
				<div className='wallet-bottom'>
					<AssetsList />
				</div>
			</div>
		</section>
	)
}

export default ChooseAssets
