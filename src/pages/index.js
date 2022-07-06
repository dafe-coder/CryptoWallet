import React from 'react'
import Home from './main/main'
import CreateWalletReg from './create-wallet-reg/create-wallet-reg'
import CreateWalletSuccess from './create-wallet-reg-success/create-wallet-success'
import WalletBackup from './wallet-backup/wallet-backup'
import CreatePhrase from './create-phrase/create-phrase'
import VerificatePhrase1 from './verificate-phrase/verificate-phrase-1'
import { useSelector } from 'react-redux'

const Pages = () => {
	const { currentPage } = useSelector((state) => state)

	const renderPages = () => {
		switch (currentPage) {
			case 'Home':
				return <Home />
			case 'CreateWalletReg':
				return <CreateWalletReg />
			case 'CreateWalletSuccess':
				return <CreateWalletSuccess />
			case 'WalletBackup':
				return <WalletBackup />
			case 'CreatePhrase':
				return <CreatePhrase />
			case 'VerificatePhrase1':
				return <VerificatePhrase1 />
			default:
				return <></>
		}
	}
	return renderPages()
}

export default Pages
