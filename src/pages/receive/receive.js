import React, { useState } from 'react'
import cn from 'classnames'
import styles from './receive.module.css'
import Title from '../../components/Title/Title'
import SelectToken from './../../components/SelectToken/SelectToken'
import Buttons from '../../components/Buttons/Buttons'
import Par from '../../components/Par/Par'
import Svg from './../../svgs/Svg'
import { setCurrentPage } from '../../actions/createActions'
import { useDispatch, useSelector } from 'react-redux'
import QRCode from 'react-qr-code'
import copyText from '../Func.wallet/copy'
import SvgPhrase from '../../components/PhraseBox/SvgPhrase'

const Receive = () => {
	const [copied, setCopied] = useState(false)
	const dispatch = useDispatch()
	const { restoreAddress } = useSelector((state) => state.restore)

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
						<div id='qrcode'>
							<QRCode size={110} value={restoreAddress} />
						</div>
					</div>
					<Par color='black'>
						Please scan the QR code to get information for payment
					</Par>
					<label className={styles.label}>Your wallet address</label>
					<button
						className={styles.btn}
						onClick={() => copyText(restoreAddress, setCopied)}>
						{restoreAddress}
						{copied == true ? (
							<>
								<SvgPhrase type='check' />
							</>
						) : (
							<>
								<SvgPhrase type='copy' />
							</>
						)}
					</button>
				</div>
			</div>
		</section>
	)
}
export default Receive
