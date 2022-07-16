import React from 'react'
import Title from '../../components/Title/Title'
import Buttons from '../../components/Buttons/Buttons'
import styles from './select-language.module.css'
import Svg from '../../svgs/Svg'
import { setCurrentPage } from '../../actions/createActions'
import { useDispatch } from 'react-redux'

const SelectLanguage = () => {
	const dispatch = useDispatch()
	return (
		<section className='bg-white'>
			<div className='wallet-body'>
				<div className='wallet-top'>
					<div className='wallet-header'>
						<Buttons
							onClick={() => dispatch(setCurrentPage('Settings'))}
							type='back'
						/>
						<Title>Select Language</Title>
						<div></div>
					</div>
				</div>
				<div className='wallet-bottom'>
					<div className={styles.body}>
						<div className='wallet-input'>
							<input
								type='search'
								className='input'
								id='search-language'
								required={true}
							/>
							<label htmlFor='search-language' className='label'>
								<Svg type='search' />
								Search for language
							</label>
						</div>
						<ul className={styles.list}>
							<li>
								<span>Default (English)</span>
							</li>
							<li>
								<span>English</span>
							</li>
							<li>
								<span>Español</span>
							</li>
							<li>
								<span>Bahasa Indonesia</span>
							</li>
							<li>
								<span>Português</span>
							</li>
							<li>
								<span>Русский</span>
							</li>
							<li>
								<span>Türkce</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
export default SelectLanguage
