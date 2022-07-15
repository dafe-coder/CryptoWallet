import React from 'react'
import cn from 'classnames'
import styles from './settings.module.css'
import Buttons from '../../components/Buttons/Buttons'
import Title from '../../components/Title/Title'
import { useEffect } from 'react'
import Svg from './../../svgs/Svg'

const Settings = () => {
	useEffect(() => {}, [])
	return (
		<section className='bg-white'>
			<div className='wallet-body'>
				<div className='wallet-top'>
					<div className='wallet-header'>
						<Buttons type='back' />
						<Title>Settings</Title>
						<div></div>
					</div>
				</div>
				<div className='wallet-bottom'>
					<ul className={styles.settings_list}>
						<li>
							<span>Currency</span>
							<span>
								Default (USD) <Svg type='arr-sm-right' />
							</span>
						</li>
						<li>
							<span>Language</span>
							<span>
								Default (ENG)
								<Svg type='arr-sm-right' />
							</span>
						</li>
						<li>
							Security and Privacy
							<Svg type='arr-sm-right' />
						</li>
						<li>
							View Seed Phrase
							<Svg type='arr-sm-right' />
						</li>
						<li>
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
