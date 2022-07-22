import React from 'react'
import cn from 'classnames'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import PhraseBox from '../../components/PhraseBox/PhraseBox'
import Par from './../../components/Par/Par'
import Alert from '../../components/Alert/Alert'
import Modal from '../../components/modal/Modal'
import QRCode from 'react-qr-code'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../actions/createActions'
import GoBack from '../../components/GoBack/GoBack'
const CreatePhrase = () => {
	const [openQr, setOpenQr] = useState(false)
	const { phrase } = useSelector((state) => state.create)
	const dispatch = useDispatch()

	const goToVereficatePhrase = () => {
		dispatch(setCurrentPage('VerificatePhrase1'))
	}

	return (
		<section className={cn('bg-white')}>
			<GoBack goTo='WalletBackup' />
			<Title>Verify Mnemonic</Title>
			<div className='wallet_body'>
				<div className='wallet_body__top'>
					<PhraseBox setOpenQr={setOpenQr} />
					<Par>
						Be sure to back up the mnemonic phrase of your wallet, as it will be
						the only way to recover your assets under all circumstances.
					</Par>
				</div>
				<div className='wallet_body__bottom'>
					<Alert title='Keep Mnemonic Phrase Safe!' danger={true}>
						Anyone with your mnemonic can access your wallet assets. Please back
						up your mnemonic before you receive transfers or delete the app.
					</Alert>
					<Button
						onClick={goToVereficatePhrase}
						type='primary'
						id='confirm-info-btn'>
						Yes, I’ve written it down
						<i className='fa-solid fa-arrow-right-long'></i>
					</Button>
				</div>
				<Modal id='qr-modal' open={openQr}>
					<Title>Mnemonic Phrase QR Code</Title>
					<div id='qrcode'>
						<QRCode size={220} value={phrase} />
					</div>
					<Button type='primary' onClick={setOpenQr}>
						Close
					</Button>
				</Modal>
			</div>
		</section>
	)
}

export default CreatePhrase
