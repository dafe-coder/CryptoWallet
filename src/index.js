import React from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/main/main'
import './index.css'
import CreateWalletReg from './pages/create-wallet-reg/create-wallet-reg'
import CreateWalletSuccess from './pages/create-wallet-reg-success/create-wallet-success'
import WalletBackup from './pages/wallet-backup/wallet-backup'
import CreatePhrase from './pages/create-phrase/create-phrase'
import VerificatePhrase1 from './pages/verificate-phrase/verificate-phrase-1'
import Modal from './components/modal/Modal'
import Title from './components/Title/Title'
import store from './store/store'
import { Provider } from 'react-redux'

const App = () => {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<Home />
				<CreateWalletReg />
				<CreateWalletSuccess />
				<WalletBackup />
				<CreatePhrase />
				<VerificatePhrase1 />
				<Modal id='#error-verification-modal'>
					<svg
						width='97'
						height='84'
						viewBox='0 0 97 84'
						fill='#F04848'
						xmlns='http://www.w3.org/2000/svg'>
						<path d='M48.9999 54C49.7499 54 50.4999 53.4375 50.4999 52.5V22.5C50.4999 21.75 49.7499 21 48.9999 21C48.0624 21 47.4999 21.75 47.4999 22.5V52.5C47.4999 53.4375 48.0624 54 48.9999 54ZM95.8749 72.1875L55.9374 3.9375C54.2499 1.3125 51.6249 0 48.9999 0C46.1874 0 43.5624 1.3125 41.8749 3.9375L1.7499 72.1875C-1.0626 77.4375 2.6874 84 8.8749 84H88.9374C95.1249 84 98.8749 77.4375 95.8749 72.1875ZM93.2499 78.5625C92.3124 80.0625 90.8124 81 88.9374 81H8.8749C6.9999 81 5.4999 80.25 4.5624 78.5625C3.6249 77.0625 3.6249 75.375 4.5624 73.875L44.4999 5.625C45.4374 3.9375 47.1249 3 48.9999 3C50.6874 3 52.3749 3.9375 53.3124 5.625L93.2499 73.875C94.1874 75.375 94.1874 77.0625 93.2499 78.5625ZM48.9999 63C47.3124 63 45.9999 64.5 45.9999 66C45.9999 67.6875 47.3124 69 48.9999 69C50.4999 69 51.9999 67.6875 51.9999 66C51.9999 64.5 50.4999 63 48.9999 63Z' />
					</svg>
					<Title type='error'>Please check your details again!</Title>
				</Modal>
			</Provider>
		</React.StrictMode>
	)
}

const container = document.createElement('div')
container.setAttribute('id', 'app')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
