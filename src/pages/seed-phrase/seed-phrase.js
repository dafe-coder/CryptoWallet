import React from 'react'
import Button from '../../components/Button/Button'
import Buttons from '../../components/Buttons/Buttons'
import Title from '../../components/Title/Title'
import Par from '../../components/Par/Par'
import Alert from './../../components/Alert/Alert'
import Input from './../../components/Input/Input'
import SeedPhraseBox from '../../components/SeedPhrase/SeedPhrase'
import { setCurrentPage } from '../../actions/createActions'
import { useDispatch } from 'react-redux'

const SeedPhrase = () => {
	const dispatch = useDispatch()
	return (
		<section className='bg-white'>
			<div className='wallet_body'>
				<div className='wallet-top'>
					<div className='wallet-header'>
						<Buttons
							onClick={() => dispatch(setCurrentPage('Settings'))}
							type='back'
						/>
						<Title>Seed Phrase</Title>
						<div></div>
					</div>
					<Par>
						If you ever change browsers or move computers, you will need this
						seed phrase to access your accounts. Save them somewhere safe and
						secret.
					</Par>
					<Alert
						title='Keep Mnemonic Phrase Safe!'
						danger={true}
						style={{ margin: '20px 0' }}>
						Do not share this phrase with anyone! These words can be used to
						steal all of your accounts.
					</Alert>
					<Input label='password' id='password-seed' type='pass-log' />
					<SeedPhraseBox show={false} />
				</div>
				<div className='wallet-bottom'>
					<Button mb type='primary'>
						Next
					</Button>
					<Button mt='0' type='border-primary'>
						Cancel
					</Button>
				</div>
			</div>
		</section>
	)
}
export default SeedPhrase
