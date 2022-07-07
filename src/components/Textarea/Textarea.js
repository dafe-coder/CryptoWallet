import React from 'react'
import { useState } from 'react'
import Par from '../Par/Par'
import styles from './textarea.module.css'
import cn from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import {
	setRestorePhrase,
	setRestorePhraseValid,
} from '../../actions/restoreActions'

const Textarea = ({ id, label, errorPar }) => {
	const [phrase, setPhrase] = useState('')
	const [marginInput, setMarginInput] = useState(null)

	const { restorePhraseValid, chooseCountWordRestore } = useSelector(
		(state) => state.restore
	)
	const dispatch = useDispatch()

	function onBlur(value) {
		if (value.length > 0) {
			setMarginInput(true)
		} else {
			setMarginInput(false)
		}
	}
	const onNameValidate = (e) => {
		let phrase = e.target.value
		let phraseArr = phrase.trim().split(' ')
		setPhrase(phrase)
		dispatch(setRestorePhrase(phraseArr))
		console.log(chooseCountWordRestore)
		if (phraseArr.length == +chooseCountWordRestore) {
			dispatch(setRestorePhraseValid(true))
		} else if ('own' == chooseCountWordRestore && phraseArr.length > 1) {
			dispatch(setRestorePhraseValid(true))
			console.log(restorePhraseValid)
		} else {
			dispatch(setRestorePhraseValid(false))
		}
	}
	return (
		<div
			className={styles.wallet_input}
			style={
				marginInput || phrase.length > 1
					? { marginTop: '40px' }
					: { marginTop: 0 }
			}>
			<textarea
				onInput={(e) => onNameValidate(e)}
				onFocus={() => setMarginInput(true)}
				onBlur={() => onBlur(phrase)}
				className={cn(styles.textarea, {
					[styles.success]: restorePhraseValid == true,
					[styles.error]: restorePhraseValid == false,
				})}
				type='text'
				id={id}
				phrase='phrase'
				required={true}
				value={phrase}></textarea>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
			{errorPar ? (
				restorePhraseValid == false ? (
					<Par type='error'>{errorPar}</Par>
				) : (
					<></>
				)
			) : (
				<></>
			)}
		</div>
	)
}

export default Textarea
