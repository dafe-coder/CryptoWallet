const initialState = {
	restorePhrase: '',
	restoreAddress: '',
	restorePhraseArr: [],
	restorePhraseValid: null,
	chooseCountWordRestore: null,
	restoreDataLog: null,
}

const restore = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_RESTORE_PHRASE':
			return {
				...state,
				restorePhrase: action.payload,
			}
		case 'SET_RESTORE_PHRASE_ARR':
			return {
				...state,
				restorePhraseArr: action.payload,
			}
		case 'SET_RESTORE_PHRASE_VALID':
			return {
				...state,
				restorePhraseValid: action.payload,
			}
		case 'SET_CHOOSE_COUNT_RESTORE':
			return {
				...state,
				chooseCountWordRestore: action.payload,
			}
		case 'SET_RESTORE_ADDRESS':
			return {
				...state,
				restoreAddress: action.payload,
			}
		case 'SET_RESTORE_DATA_LOG':
			return {
				...state,
				restoreDataLog: action.payload,
			}
		default:
			return state
	}
}

export default restore
