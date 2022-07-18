import { useHttp } from '../hooks/http.hook'
import { useSelector } from 'react-redux'
const useWalletService = () => {
	const { restoreAddress } = useSelector((state) => state.restore)
	const { error, loading, request, clearError } = useHttp()
	const _apiBase = 'https://api.covalenthq.com/v1/1/address/'
	const _apiAddress = restoreAddress[0].address
	// const _apiAddress = '0xeaf4A01Fb4C9d74222e5e406F402EB8121920e5f'
	const _apiKey = 'ckey_2b56a98c14d8454b8afe42afbfd'

	const getDataWallet = async () => {
		const res = await request(
			`${_apiBase}${_apiAddress}/balances_v2/?&key=${_apiKey}`
		)
		return res.data
	}

	// const getCharacter = async (id) => {
	// 	const res = await request(`${_apiBase}/characters/${id}?${_apiKey}`)
	// 	return _transformCharacter(res.data.results[0])
	// }

	return {
		getDataWallet,
		error,
		loading,
		clearError,
	}
}

export default useWalletService
