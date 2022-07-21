import React, { useEffect, useState } from 'react'
import Buttons from './../../components/Buttons/Buttons'
import Title from '../../components/Title/Title'
import AccountCard from '../../components/AccountCard/AccountCard'
import Button from './../../components/Button/Button'
import Svg from '../../svgs/Svg'
import { setCurrentPage } from '../../actions/createActions'
import { useDispatch } from 'react-redux'
const ManageAccounts = () => {
	const dispatch = useDispatch()
	const [data, setData] = useState({})
	useEffect(() => {
		chrome.storage.local.get(['userData'], function (result) {
			if (result.userData.length >= 1) {
				chrome.storage.local.get(['WalletChoose'], function (res) {
					if (res.WalletChoose) {
						result.userData.map((item) => {
							if (res.WalletChoose == item.name) {
								setData(item)
							}
						})
					}
				})
			}
		})
	}, [])

	const onDelete = () => {
		chrome.storage.local.get(['userData'], function (result) {
			if (result.userData.length >= 1) {
				let deleteItems = result.userData.filter((item) => {
					return item.name !== data.name
				})
				dispatch(setCurrentPage('Accounts'))
				chrome.storage.local.set({ userData: deleteItems })
				console.log(deleteItems)
			}
		})
	}

	return (
		<section className='bg-white'>
			<div className='wallet_body'>
				<div className='wallet-top'>
					<div className='wallet-header'>
						<Buttons
							onClick={() => dispatch(setCurrentPage('Accounts'))}
							type='back'></Buttons>
						<Title>Account</Title>
						<Buttons type='lock'>Lock</Buttons>
					</div>
					<AccountCard
						title={data ? data.name : 'Wallet'}
						copy={true}
						one={true}>
						{data ? data.restoreAddress : 'address'}
					</AccountCard>
					<Button text='left' type='border-primary' mt>
						View recovery phrase
					</Button>
					<Button text='left' type='border-primary' mt>
						View private key
					</Button>
				</div>
				<div className='wallet-bottom' style={{ marginTop: '20px' }}>
					<Button onClick={onDelete} type='border-error' positionSvg='left' mt>
						<Svg type='trash' />
						Delete Wallet
					</Button>
				</div>
			</div>
		</section>
	)
}
export default ManageAccounts
