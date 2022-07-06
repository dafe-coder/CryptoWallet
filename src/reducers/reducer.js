const initialState = {
	phrase: '',
	phraseArr: [],
	currentPage: 'CreateWalletReg',
	password: '',
	passwordCheck: '',
	passwordMatch: null,
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_PHRASE':
			return {
				...state,
				phrase: action.payload,
			}
		case 'SET_PHRASE_ARR':
			return {
				...state,
				phraseArr: action.payload,
			}
		case 'SET_CURRENT_PAGE':
			return {
				...state,
				currentPage: action.payload,
			}
		case 'SET_PASSWORD':
			return {
				...state,
				password: action.payload,
			}
		case 'SET_PASSWORD_CHECK':
			return {
				...state,
				passwordCheck: action.payload,
			}
		case 'SET_PASSWORD_MATCH':
			return {
				...state,
				passwordMatch: action.payload,
			}
		default:
			return state
	}
}

export default reducer
