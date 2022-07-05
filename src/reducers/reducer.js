const initialState = {
	phrase: '',
	phraseArr: [],
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
		default:
			return state
	}
}

export default reducer
