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
