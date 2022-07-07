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
export const setPhraseArrScattered = (phraseArr) => {
	return {
		type: 'SET_PHRASE_ARR_SCATTERED',
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
export const setPasswordValid = (valid) => {
	return {
		type: 'SET_PASSWORD_VALID',
		payload: valid,
	}
}
export const setNameValid = (valid) => {
	return {
		type: 'SET_NAME_VALID',
		payload: valid,
	}
}
export const setWord1 = (valid) => {
	return {
		type: 'SET_WORD1',
		payload: valid,
	}
}
export const setWord2 = (valid) => {
	return {
		type: 'SET_WORD2',
		payload: valid,
	}
}
export const setWord3 = (valid) => {
	return {
		type: 'SET_WORD3',
		payload: valid,
	}
}
export const setShowErrorVerification = (open) => {
	return {
		type: 'SET_SHOW_ERROR_VERIFICATION',
		payload: open,
	}
}
export const setShowSuccessVerification = (open) => {
	return {
		type: 'SET_SHOW_SUCCESS_VERIFICATION',
		payload: open,
	}
}
