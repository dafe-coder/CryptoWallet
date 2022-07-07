const initialState = {
	restorePhrase: '',
	restorePhraseValid: null,
	chooseCountWordRestore: '',
}

const restore = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_RESTORE_PHRASE':
			return {
				...state,
				restorePhrase: action.payload,
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
		default:
			return state
	}
}

export default restore
