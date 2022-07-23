export const setDataWalletLabels = (data) => {
	return {
		type: 'SET_DATA_WALLET_LABELS',
		payload: data,
	}
}
export const setDataWalletPrices = (data) => {
	return {
		type: 'SET_DATA_WALLET_PRICES',
		payload: data,
	}
}
export const setPortfolioSort = (sort) => {
	return {
		type: 'SET_PORTFOLIO_SORT',
		payload: sort,
	}
}
export const setPortfolioOpen = (open) => {
	return {
		type: 'SET_PORTFOLIO_OPEN',
		payload: open,
	}
}
export const setPortfolioData = (data) => {
	return {
		type: 'SET_PORTFOLIO_DATA',
		payload: data,
	}
}
export const setChooseTimeOut = (time) => {
	return {
		type: 'SET_CHOOSE_TIMEOUT',
		payload: time,
	}
}
export const setWalletChoose = (walletName) => {
	return {
		type: 'SET_WALLET_CHOOSE',
		payload: walletName,
	}
}
export const setTokenTransaction = (walletName) => {
	return {
		type: 'SET_TOKEN_TRANSACTION',
		payload: walletName,
	}
}
export const setTokenTransactionAmount = (amount) => {
	return {
		type: 'SET_TOKEN_TRANSACTION_AMOUNT',
		payload: amount,
	}
}
export const setCurrencyValue = (amount) => {
	return {
		type: 'SET_CURRENCY_VALUE',
		payload: amount,
	}
}
export const setTokenBuy = (token) => {
	return {
		type: 'SET_TOKEN_BUY',
		payload: token,
	}
}
export const setCurrentCurrency = (currency) => {
	return {
		type: 'SET_CURRENT_CURRENCY',
		payload: currency,
	}
}
