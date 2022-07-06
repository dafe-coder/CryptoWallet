import React from 'react'
import Lang from '../../components/Lang/Lang'
import styles from './main.module.css'
import cn from 'classnames'
import Button from '../../components/Button/Button'
import { setCurrentPage } from './../../actions'
import { useDispatch } from 'react-redux'

const Home = () => {
	const dispatch = useDispatch()

	return (
		<section className={cn(styles.section)}>
			<Lang />
			<div className='btn-list-row'>
				<Button
					type='white'
					onClick={() => dispatch(setCurrentPage('CreateWalletReg'))}>
					<i className='fa-solid fa-wallet'></i>
					Create wallet
				</Button>
				<Button type='transparent'>
					<i className='fa-solid fa-arrow-rotate-right'></i>
					Restore wallet
				</Button>
			</div>
		</section>
	)
}

export default Home
