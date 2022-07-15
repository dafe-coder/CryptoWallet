import React from 'react'
import Title from '../../components/Title/Title'
import Buttons from '../../components/Buttons/Buttons'
import Par from '../../components/Par/Par'
import Svg from '../../svgs/Svg'
import AllowData from '../../components/AllowData/AllowData'
import Dropdown from '../../components/Dropdown/Dropdown'

const SecurityPrivacy = () => {
	const dataDropdown = [
		'5 minutes',
		'15 minutes',
		'30 minutes',
		'1 hour',
		'6 hours',
		'never',
	]
	return (
		<section className='bg-white'>
			<div className='wallet-body'>
				<div className='wallet-top'>
					<div className='wallet-header'>
						<Buttons type='back' />
						<Title>Security and Privacy</Title>
						<div></div>
					</div>
					<Title type='sm' mb='0'>
						Auto Lock Timer
					</Title>
					<Par>
						Set the idle time in minutes before Polygon Wallet is locked.
					</Par>
					<Dropdown dataDropdown={dataDropdown} active='30 minutes' />
				</div>
				<div className='wallet-bottom'>
					<AllowData />
				</div>
			</div>
		</section>
	)
}
export default SecurityPrivacy
