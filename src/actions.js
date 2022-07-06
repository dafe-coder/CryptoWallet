export const setPhrase = (phrase) => {
	return {
		type: 'SET_PHRASE',
		payload: phrase,
	}
}
export const setPhraseArr = (phraseArr) => {
	return {
		type: 'SET_PHRASE_ARR',
		payload: phraseArr,
	}
}
export const setCurrentPage = (pageSelector) => {
	return {
		type: 'SET_CURRENT_PAGE',
		payload: pageSelector,
	}
}
