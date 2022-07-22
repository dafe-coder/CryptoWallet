import { useHttp } from '../hooks/http.hook'
import { useSelector } from 'react-redux'
import CoinGecko from 'coingecko-api'
import Web3 from 'web3'

const useWalletService = () => {
	const { restoreAddress } = useSelector((state) => state.restore)
	const { error, loading, request, clearError } = useHttp()
	const _apiBase = 'https://api.covalenthq.com/v1/1/'

	const _apiKey = 'ckey_2b56a98c14d8454b8afe42afbfd'
	const getDataWallet = async (apiAddress = restoreAddress) => {
		const res = await request(
			`${_apiBase}address/${apiAddress}/balances_v2/?&key=${_apiKey}`
		)
		return rebuildObj(res.data.items)
	}

	const getWalletToken = async (apiAddress = restoreAddress) => {
		const res = await request(
			`${_apiBase}tokens/${apiAddress}/token_holders/?&key=${_apiKey}`
		)
		return res.data
	}

	const getAllTokens = async (callback) => {
		const CoinGeckoClient = new CoinGecko()
		let data = await CoinGeckoClient.coins.all()

		let newList = data.data.map((item) => {
			return {
				...item,
				market_data: {
					...item.market_data,
					balance: 0,
					balance_crypto: { usd: 0 },
				},
			}
		})
		callback(newList)
	}

	// const getCharacter = async (id) => {
	// 	const res = await request(`${_apiBase}/characters/${id}?${_apiKey}`)
	// 	return _transformCharacter(res.data.results[0])
	// }
	function rebuildObj(list) {
		const newList = list.map((obj) => {
			return {
				id: obj.contract_name,
				name: obj.contract_name,
				symbol: obj.contract_ticker_symbol,
				contract_address: obj.contract_address,
				market_data: {
					current_price: {
						usd: obj.quote_rate,
					},
					balance: Number(
						Web3.utils.fromWei(String(obj.balance), 'ether')
					).toFixed(10),
					balance_crypto: {
						usd: obj.quote,
					},
					high_24h: {
						usd: obj.quote_rate_24h,
					},
				},
				image: {
					thumb: obj.logo_url,
				},
			}
		})
		return newList
	}
	return {
		getDataWallet,
		getWalletToken,
		error,
		loading,
		clearError,
		getAllTokens,
	}
}

export default useWalletService
