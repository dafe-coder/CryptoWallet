import React from 'react'
import Buttons from './../../components/Buttons/Buttons'
import Title from '../../components/Title/Title'
import SelectToken from './../../components/SelectToken/SelectToken'
import Amount from './../../components/Amount/Amount'
import Modal from '../../components/modal/Modal'
import BoxWithIcon from '../../components/BoxWithIcon/BoxWithIcon'
import styles from './sent.module.css'
import cn from 'classnames'
import Par from './../../components/Par/Par'
import PaymentDetails from '../../components/PaymentDetails/PaymentDetails'
const Sent = () => {
	return (
		<section className='bg-white'>
			<div className='wallet-body'>
				<div className='wallet-top'>
					<div className='wallet-header'>
						<Buttons type='back' />
						<Title>Sent</Title>
						<div></div>
					</div>
					<SelectToken />
					<div className='wallet-input'>
						<input className='input' type='text' id='address' required={true} />
						<label className='label' htmlFor='address'>
							Enter Adress
						</label>
					</div>
					<Amount />
					<PaymentDetails />
				</div>
				<div className='wallet-bottom'></div>
			</div>
			<Modal padding='20' open={false}>
				<BoxWithIcon style={{ margin: '0' }}>
					<Title>Request sent</Title>
					<svg
						style={{ marginTop: '20px', marginBottom: '20px' }}
						width='94'
						height='94'
						viewBox='0 0 94 94'
						fill='#4F33A3'
						xmlns='http://www.w3.org/2000/svg'>
						<rect opacity='0.1' width='94' height='94' rx='47' fill='#4F33A3' />
						<path
							opacity='0.9'
							d='M62.0469 36.9531C62.9609 37.7969 62.9609 39.2734 62.0469 40.1172L44.0469 58.1172C43.2031 59.0312 41.7266 59.0312 40.8828 58.1172L31.8828 49.1172C30.9688 48.2734 30.9688 46.7969 31.8828 45.9531C32.7266 45.0391 34.2031 45.0391 35.0469 45.9531L42.4297 53.3359L58.8828 36.9531C59.7266 36.0391 61.2031 36.0391 62.0469 36.9531Z'
						/>
					</svg>
					<Title color='dark' mb='0'>
						TX Result
					</Title>
					<Par>Pending block validation...</Par>
					<div className={styles.sent_btn}>
						<button className={cn(styles.transparent, styles.btn)}>
							View Details
						</button>
						<button className={cn(styles.primary, styles.btn)}>Got it</button>
					</div>
				</BoxWithIcon>
			</Modal>
		</section>
	)
}
export default Sent
