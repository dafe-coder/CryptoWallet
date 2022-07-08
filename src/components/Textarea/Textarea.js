import React from 'react'
import { useState } from 'react'
import Par from '../Par/Par'
import styles from './textarea.module.css'
import cn from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import {
	setRestorePhrase,
	setRestorePhraseValid,
	setRestorePhraseArr,
} from '../../actions/restoreActions'

const Textarea = ({ id, label, errorPar }) => {
	const [marginInput, setMarginInput] = useState(null)

	const { restorePhraseValid, chooseCountWordRestore, restorePhrase } =
		useSelector((state) => state.restore)
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
		dispatch(setRestorePhrase(phrase))
		dispatch(setRestorePhraseArr(phraseArr))
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
				marginInput || restorePhrase.length > 1
					? { marginTop: '40px' }
					: { marginTop: 0 }
			}>
			<textarea
				onInput={(e) => onNameValidate(e)}
				onFocus={() => setMarginInput(true)}
				onBlur={() => onBlur(restorePhrase)}
				className={cn(styles.textarea, {
					[styles.success]: restorePhraseValid == true,
					[styles.error]: restorePhraseValid == false,
				})}
				type='text'
				id={id}
				phrase='phrase'
				required={true}
				value={restorePhrase}></textarea>
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
