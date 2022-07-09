import React from 'react'
import Alert from './../../components/Alert/Alert'
import Title from '../../components/Title/Title'
import ChooseNetwork from '../../components/ChooseNetwork/ChooseNetwork'
import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'
const CustomToken = () => {
	return (
		<section className='bg-white'>
			<div className='wallet_body'>
				<div className='wallet-top'>
					<Title>Custom Token</Title>
					<ChooseNetwork />
				</div>
				<div className='wallet-bottom'>
					<Alert title='Attention!' danger={true} icon={true}>
						Anyone can create a token, including fake version of existing
						tokens. Learn about scams and security risks.
					</Alert>
					<Link title='What is Custom Token?' />
					<Button
						className='disabled'
						positionSvg='right'
						style={{ marginTop: '30px' }}>
						Add
						<svg
							width='12'
							height='12'
							viewBox='0 0 12 12'
							fill='#BBBBBB'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M11.5625 5.75C11.5625 6.13281 11.2617 6.40625 10.9062 6.40625H6.53125V10.7812C6.53125 11.1641 6.23047 11.4648 5.875 11.4648C5.49219 11.4648 5.21875 11.1641 5.21875 10.7812V6.40625H0.84375C0.460938 6.40625 0.1875 6.13281 0.1875 5.77734C0.1875 5.39453 0.460938 5.09375 0.84375 5.09375H5.21875V0.71875C5.21875 0.363281 5.49219 0.0898438 5.875 0.0898438C6.23047 0.0898438 6.53125 0.363281 6.53125 0.71875V5.09375H10.9062C11.2617 5.09375 11.5625 5.39453 11.5625 5.75Z' />
						</svg>
					</Button>
				</div>
			</div>
		</section>
	)
}

export default CustomToken
