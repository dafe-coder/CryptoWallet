import { useHttp } from '../hooks/http.hook'
import { useSelector } from 'react-redux'

const useWalletService = () => {
	const { restoreAddress } = useSelector((state) => state.restore)
	const { error, loading, request, clearError } = useHttp()
	const _apiBase = 'https://api.covalenthq.com/v1/1/'

	const _apiKey = 'ckey_2b56a98c14d8454b8afe42afbfd'
	const getDataWallet = async (apiAddress = restoreAddress) => {
		const res = await request(
			`${_apiBase}address/${apiAddress}/balances_v2/?&key=${_apiKey}`
		)
		return res.data
	}

	const getWalletToken = async (apiAddress = restoreAddress) => {
		const res = await request(
			`${_apiBase}tokens/${apiAddress}/token_holders/?&key=${_apiKey}`
		)
		return res.data
	}

	// const getCharacter = async (id) => {
	// 	const res = await request(`${_apiBase}/characters/${id}?${_apiKey}`)
	// 	return _transformCharacter(res.data.results[0])
	// }

	return {
		getDataWallet,
		getWalletToken,
		error,
		loading,
		clearError,
	}
}

export default useWalletService
