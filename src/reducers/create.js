const initialState = {
	phrase: '',
	phraseArr: [],
	phraseArrScattered: [],
	currentPage: 'WalletBackup',
	name: '',
	password: '',
	passwordCheck: '',
	passwordMatch: null,
	passwordValid: null,
	nameValid: null,
	word1: '',
	word2: '',
	word3: '',
	showErrorVerification: false,
	showSuccessVerification: false,
}
const create = (state = initialState, action) => {
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
		case 'SET_PHRASE_ARR_SCATTERED':
			return {
				...state,
				phraseArrScattered: action.payload,
			}
		case 'SET_CURRENT_PAGE':
			// chrome.storage.session.set({ currentPage: action.payload }, function () {
			// 	console.log('Value is set to ' + action.payload)
			// })

			// chrome.storage.session.clear()
			return {
				...state,
				currentPage: action.payload,
			}
		case 'SET_NAME':
			return {
				...state,
				name: action.payload,
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
		case 'SET_PASSWORD_VALID':
			return {
				...state,
				passwordValid: action.payload,
			}
		case 'SET_NAME_VALID':
			return {
				...state,
				nameValid: action.payload,
			}
		case 'SET_WORD1':
			return {
				...state,
				word1: action.payload,
			}
		case 'SET_WORD2':
			return {
				...state,
				word2: action.payload,
			}
		case 'SET_WORD3':
			return {
				...state,
				word3: action.payload,
			}
		case 'SET_SHOW_ERROR_VERIFICATION':
			return {
				...state,
				showErrorVerification: action.payload,
			}
		case 'SET_SHOW_SUCCESS_VERIFICATION':
			return {
				...state,
				showSuccessVerification: action.payload,
			}
		default:
			return state
	}
}

export default create
