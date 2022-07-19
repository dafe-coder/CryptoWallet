import { useHttp } from '../hooks/http.hook'
import { useSelector } from 'react-redux'

const useWalletService = () => {
	const { restoreAddress } = useSelector((state) => state.restore)
	const { error, loading, request, clearError } = useHttp()
	const _apiBase = 'https://api.covalenthq.com/v1/1/'
	// const _apiAddress = restoreAddress[0].address
	const _apiAddress = '0x4fDBFD3f466079897b67D7623fb0B2845Da5D1e6'
	const _apiKey = 'ckey_2b56a98c14d8454b8afe42afbfd'
	const getDataWallet = async () => {
		const res = await request(
			`${_apiBase}address/${_apiAddress}/balances_v2/?&key=${_apiKey}`
		)
		return res.data
	}

	const getWalletToken = async () => {
		const res = await request(
			`${_apiBase}tokens/${_apiAddress}/token_holders/?&key=${_apiKey}`
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
