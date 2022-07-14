import React from 'react'
import Buttons from './../../components/Buttons/Buttons'
import Title from '../../components/Title/Title'
import AccountCard from '../../components/AccountCard/AccountCard'
import Button from './../../components/Button/Button'
import Svg from '../../svgs/Svg'
const ManageAccounts = () => {
	return (
		<section className='bg-white'>
			<div className='wallet-body'>
				<div className='wallet-top'>
					<div className='wallet-header'>
						<Buttons type='back'></Buttons>
						<Title>Account</Title>
						<Buttons type='lock'>Lock</Buttons>
					</div>
					<AccountCard title='Wallet 4' copy={true} one={true}>
						3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5
					</AccountCard>
				</div>
				<div className='wallet-bottom' style={{ marginTop: '20px' }}>
					<Button type='border-primary' mt>
						View recovery phrase
					</Button>
					<Button type='border-primary' mt>
						View private key
					</Button>
					<Button type='border-error' positionSvg='left' mt>
						<Svg type='trash' />
						Delete Wallet
					</Button>
				</div>
			</div>
		</section>
	)
}
export default ManageAccounts
