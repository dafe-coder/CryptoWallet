import React from 'react'
import cn from 'classnames'
import styles from './receive.module.css'
import Title from '../../components/Title/Title'
import SelectToken from './../../components/SelectToken/SelectToken'
import Buttons from '../../components/Buttons/Buttons'
import Par from '../../components/Par/Par'
import Svg from './../../svgs/Svg'
import qrIcon from './iconfinder_qr_code_9040588 1.png'
import { setCurrentPage } from '../../actions/createActions'
import { useDispatch } from 'react-redux'
const Receive = () => {
	const dispatch = useDispatch()
	return (
		<section className='bg-white'>
			<div className='wallet-body'>
				<div className='wallet-top'>
					<div className='wallet-header'>
						<Buttons
							onClick={() => dispatch(setCurrentPage('Wallet'))}
							type='back'></Buttons>
						<Title>Payment Information</Title>
						<div></div>
					</div>
					<SelectToken />
				</div>
				<div className='wallet-bottom'>
					<div className={styles.qr_code}>
						<img src={qrIcon} alt='' />
					</div>
					<Par color='black'>
						Please scan the QR code to get information for payment
					</Par>
					<label className={styles.label}>Your wallet address</label>
					<button className={styles.btn}>
						3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5 <Svg type='copy' />
					</button>
				</div>
			</div>
		</section>
	)
}
export default Receive
