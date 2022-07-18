import { hdkey } from 'ethereumjs-wallet'
import { mnemonicToSeedSync } from 'bip39'

export default function generateAddressesFromSeed(mnemonic, count) {
	let seed = mnemonicToSeedSync(mnemonic)
	let hdwallet = hdkey.fromMasterSeed(seed)
	let wallet_hdpath = "m/44'/60'/0'/0/"

	let accounts = []
	for (let i = 0; i < count; i++) {
		let wallet = hdwallet.derivePath(wallet_hdpath + i).getWallet()
		let address = '0x' + wallet.getAddress().toString('hex')
		let privateKey = wallet.getPrivateKey().toString('hex')
		accounts.push({ address: address, privateKey: privateKey })
	}
	return accounts
}
