import React from 'react'
import Lang from '../../components/Lang/Lang'
import styles from './main.module.css'
import cn from 'classnames'
import Button from '../../components/Button/Button'

const Home = () => {
	return (
		<section className={cn(styles.section, 'd-none')}>
			<Lang />
			<div className='btn-list-row'>
				<Button type='white'>
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
