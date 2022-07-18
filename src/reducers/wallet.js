const initialState = {
	dataLabels: [],
	dataPrices: [],
	password: '',
	portfolioSort: 'name',
	portfolioOpen: 'ETH',
	portfolioData: [],
	chooseTimeOut: null,
}

const restore = (state = initialState, action) => {
	switch (action.type) {
		case 'CHECK_PASSWORD':
			return {
				...state,
				restorePhrase: action.payload,
			}
		case 'SET_DATA_WALLET_LABELS':
			return {
				...state,
				dataLabels: action.payload,
			}
		case 'SET_DATA_WALLET_PRICES':
			return {
				...state,
				dataPrices: action.payload,
			}
		case 'SET_PORTFOLIO_SORT':
			return {
				...state,
				portfolioSort: action.payload,
			}
		case 'SET_PORTFOLIO_OPEN':
			return {
				...state,
				portfolioOpen: action.payload,
			}
		case 'SET_PORTFOLIO_DATA':
			return {
				...state,
				portfolioData: action.payload,
			}
		case 'SET_CHOOSE_TIMEOUT':
			return {
				...state,
				chooseTimeOut: action.payload,
			}
		default:
			return state
	}
}

export default restore
