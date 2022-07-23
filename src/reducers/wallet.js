const initialState = {
	dataLabels: [],
	dataPrices: [],
	password: '',
	portfolioSort: 'name',
	portfolioOpen: 'ETH',
	portfolioData: [],
	chooseTimeOut: null,
	login: true,
	loginUser: '',
	tokenTransaction: null,
	tokenTransactionAmount: '',
	currencyValue: '',
	currentCurrency: '',
	tokenBuy: {},
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
		case 'SET_WALLET_CHOOSE':
			return {
				...state,
				loginUser: action.payload,
			}
		case 'SET_TOKEN_TRANSACTION':
			return {
				...state,
				tokenTransaction: action.payload,
			}
		case 'SET_TOKEN_TRANSACTION_AMOUNT':
			return {
				...state,
				tokenTransactionAmount: action.payload,
			}
		case 'SET_CURRENCY_VALUE':
			return {
				...state,
				currencyValue: action.payload,
			}
		case 'SET_TOKEN_BUY':
			return {
				...state,
				tokenBuy: action.payload,
			}
		case 'SET_CURRENT_CURRENCY':
			return {
				...state,
				currentCurrency: action.payload,
			}
		default:
			return state
	}
}

export default restore
