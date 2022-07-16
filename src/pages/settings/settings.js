import React from 'react'
import styles from './settings.module.css'
import Buttons from '../../components/Buttons/Buttons'
import Title from '../../components/Title/Title'
import { useEffect } from 'react'
import Svg from './../../svgs/Svg'
import { useDispatch } from 'react-redux/es/exports'
import { setCurrentPage } from '../../actions/createActions'

const Settings = () => {
	const dispatch = useDispatch()
	useEffect(() => {}, [])
	return (
		<section className='bg-white'>
			<div className='wallet-body'>
				<div className='wallet-top'>
					<div className='wallet-header'>
						<Buttons
							onClick={() => dispatch(setCurrentPage('Wallet'))}
							type='back'
						/>
						<Title>Settings</Title>
						<div></div>
					</div>
				</div>
				<div className='wallet-bottom'>
					<ul className={styles.settings_list}>
						<li onClick={() => dispatch(setCurrentPage('SelectCurrency'))}>
							<span>Currency</span>
							<span>
								Default (USD) <Svg type='arr-sm-right' />
							</span>
						</li>
						<li onClick={() => dispatch(setCurrentPage('SelectLanguage'))}>
							<span>Language</span>
							<span>
								Default (ENG)
								<Svg type='arr-sm-right' />
							</span>
						</li>
						<li onClick={() => dispatch(setCurrentPage('SecurityPrivacy'))}>
							Security and Privacy
							<Svg type='arr-sm-right' />
						</li>
						<li onClick={() => dispatch(setCurrentPage('SeedPhrase'))}>
							View Seed Phrase
							<Svg type='arr-sm-right' />
						</li>
						<li onClick={() => dispatch(setCurrentPage('About'))}>
							About
							<Svg type='arr-sm-right' />
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}
export default Settings
