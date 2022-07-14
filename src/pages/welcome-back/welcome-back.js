import React from 'react'
import Title from '../../components/Title/Title'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import styles from './welcome-back.module.css'
import Modal from '../../components/modal/Modal'
import Par from './../../components/Par/Par'

const WelcomeBack = () => {
	return (
		<section className='bg-white'>
			<div
				className='wallet-body'
				style={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
				}}>
				<Title mt>Welcome back</Title>
				<form style={{ width: '100%' }}>
					<Input type='pass-log' id='passwordLog' label='Password' />
					<Button type='primary' mt>
						Unlock
					</Button>
				</form>
				<div className={styles.reg}>
					<p>Unable to Log in?</p>
					<a href='!#'>Import</a>
					or
					<a href='!#'>create a new wallet</a>.
				</div>
			</div>
			<Modal open={true} white padding='0'>
				<Title type='error' mb>
					Risk Alert
				</Title>
				<Par>
					All your existing wallets will be removed and replaced with the new
					one.
					<br />
					<br />
					Please make sure you have backed up your mnemonic phrases or private
					keys, otherwise you will not be able to recover the assets in your
					wallets.
				</Par>
				<Button type='primary' mt style={{ marginTop: '20px' }}>
					Continue (10 s)
				</Button>
				<a href='#' className='link primary-link'>
					Back
				</a>
			</Modal>
		</section>
	)
}
export default WelcomeBack
