export const setRestorePhrase = (phrase) => {
	return {
		type: 'SET_RESTORE_PHRASE',
		payload: phrase,
	}
}
export const setRestorePhraseArr = (phrase) => {
	return {
		type: 'SET_RESTORE_PHRASE_ARR',
		payload: phrase,
	}
}
export const setRestorePhraseValid = (valid) => {
	return {
		type: 'SET_RESTORE_PHRASE_VALID',
		payload: valid,
	}
}

export const setChooseCountRestore = (str) => {
	return {
		type: 'SET_CHOOSE_COUNT_RESTORE',
		payload: str,
	}
}
export const setRestoreAddress = (str) => {
	return {
		type: 'SET_RESTORE_ADDRESS',
		payload: str,
	}
}
export const setRestoreDataLog = (data) => {
	return {
		type: 'SET_RESTORE_DATA_LOG',
		payload: data,
	}
}
