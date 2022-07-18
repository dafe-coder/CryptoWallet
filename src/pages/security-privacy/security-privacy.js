import React from 'react'
import Title from '../../components/Title/Title'
import Buttons from '../../components/Buttons/Buttons'
import Par from '../../components/Par/Par'
import AllowData from '../../components/AllowData/AllowData'
import Dropdown from '../../components/Dropdown/Dropdown'
import { setCurrentPage } from '../../actions/createActions'
import { useDispatch, useSelector } from 'react-redux'
const SecurityPrivacy = () => {
	const dispatch = useDispatch()
	const { chooseTimeOut } = useSelector((state) => state.wallet)
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
						<Buttons
							onClick={() => dispatch(setCurrentPage('Settings'))}
							type='back'
						/>
						<Title>Security and Privacy</Title>
						<div></div>
					</div>
					<Title type='sm' mb='0'>
						Auto Lock Timer
					</Title>
					<Par>
						Set the idle time in minutes before Polygon Wallet is locked.
					</Par>
					<Dropdown
						type='log-time-out'
						dataDropdown={dataDropdown}
						active={chooseTimeOut}
					/>
				</div>
				<div className='wallet-bottom'>
					<AllowData />
				</div>
			</div>
		</section>
	)
}
export default SecurityPrivacy
