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
export const setPassword = (password) => {
	return {
		type: 'SET_PASSWORD',
		payload: password,
	}
}
export const setPasswordCheck = (passwordCheck) => {
	return {
		type: 'SET_PASSWORD_CHECK',
		payload: passwordCheck,
	}
}
export const setPasswordMatch = (password) => {
	return {
		type: 'SET_PASSWORD_MATCH',
		payload: password,
	}
}
