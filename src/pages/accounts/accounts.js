import React from 'react'
import cn from 'classnames'
import Title from '../../components/Title/Title'
import Buttons from './../../components/Buttons/Buttons'
import MyAccount from '../../components/MyAccount/MyAccount'
import Button from '../../components/Button/Button'
import Svg from '../../svgs/Svg'
import Modal from './../../components/modal/Modal'
import Input from './../../components/Input/Input'
import styles from './accounts.module.css'
import { setCurrentPage } from '../../actions/createActions'
import { useDispatch } from 'react-redux'

const Accounts = () => {
	const dispatch = useDispatch()
	return (
		<section className='bg-white'>
			<div className='wallet_body'>
				<div className='wallet-top'>
					<div className='wallet-header'>
						<Buttons
							type='back'
							onClick={() => dispatch(setCurrentPage('Wallet'))}></Buttons>
						<Title>Account</Title>
						<div>
							<Buttons type='lock'>Lock</Buttons>
						</div>
					</div>
					<MyAccount />
				</div>
				<div className='wallet-bottom' style={{ paddingBottom: '25px' }}>
					<Button type='border-primary' positionSvg='left' mb={true}>
						<Svg type='plus' />
						Add account
					</Button>
					<Button
						onClick={() => dispatch(setCurrentPage('WalletRestore'))}
						mt='0'
						type='border-primary'
						positionSvg='left'>
						<Svg type='upload' />
						Import account
					</Button>
				</div>
			</div>
			<Modal open={false} padding='20'>
				<Title mb='20'>Add account</Title>
				<form style={{ width: '100%' }}>
					<Input type='normal' id='name-wallet' label='Account Name' />
					<Button className={cn('disabled')}>Confirm</Button>
				</form>
				<a href='#' className={styles.close_link}>
					Cancel
				</a>
			</Modal>
		</section>
	)
}
export default Accounts
