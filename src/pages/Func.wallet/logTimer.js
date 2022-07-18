export const logTimer = (value) => {
	function startDeadline(deadline) {
		chrome.storage.session.remove(['timer'])
		chrome.storage.session.set({ timer: deadline })
	}

	console.log(value)
	let deadline = new Date()
	switch (value) {
		case '5 minutes':
			startDeadline(deadline.setMinutes(deadline.getMinutes() + 5))
			break
		case '15 minutes':
			startDeadline(deadline.setMinutes(deadline.getMinutes() + 15))
			break
		case '30 minutes':
			startDeadline(deadline.setSeconds(deadline.getSeconds() + 10))
			break
		case '1 hour':
			startDeadline(deadline.setMinutes(deadline.getMinutes() + 60))
			break
		case '6 hours':
			startDeadline(deadline.setMinutes(deadline.getMinutes() + 60 * 6))
			break
		case 'never':
			break
		default:
			break
	}
}
