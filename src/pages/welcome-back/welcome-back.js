import React from 'react'
import Title from '../../components/Title/Title'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import styles from './welcome-back.module.css'
import Modal from '../../components/modal/Modal'
import Par from './../../components/Par/Par'
import bgImage from './Frame.png'
import { setCurrentPage } from '../../actions/createActions'
import { setPassword } from '../../actions/createActions'
import { useDispatch, useSelector } from 'react-redux'
import { logTimer } from '../Func.wallet/logTimer'

const WelcomeBack = () => {
	const { password, currentPage } = useSelector((state) => state.create)
	const dispatch = useDispatch()

	const logIn = () => {
		chrome.storage.local.get(['userData'], function (result) {
			console.log(result.userData[1])
			if (password == result.userData[1]) {
				dispatch(setCurrentPage(currentPage))
				chrome.storage.local.get(['logTimeOut'], function (result) {
					logTimer(result.logTimeOut)
				})
			} else {
				dispatch(setPassword(''))
			}
		})
	}
	return (
		<section>
			<div className='wallet_body'>
				<div className={styles.top}>
					<img src={bgImage} alt='wallet logo' />
				</div>
				<div className={styles.bottom}>
					<Title color='white' mt>
						Welcome back
					</Title>
					<form style={{ width: '100%' }}>
						<Input type='pass-log' id='passwordLog' label='Password' />
						<Button type='white' mt onClick={logIn}>
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
			</div>
			<Modal open={false} white padding='0'>
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
