import { setRestoreAddress } from '../../actions/restoreActions'

export default function getData(dispatch, getDataWallet, callback) {
	chrome.storage.local.get(['userData'], function (res) {
		if (res.userData.length >= 1) {
			res.userData.forEach((item) => {
				chrome.storage.local.get(['WalletChoose'], function (result) {
					if (item.name == result.WalletChoose) {
						dispatch(setRestoreAddress(item.restoreAddress))
						getDataWallet(item.restoreAddress).then((data) =>
							callback(data.items)
						)
					}
				})
			})
		}
	})
}
