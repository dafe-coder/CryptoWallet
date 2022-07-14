import React from 'react'
import cn from 'classnames'
import styles from './sort.module.css'
import Svg from '../../svgs/Svg'
import { setPortfolioSort } from '../../actions/wallet'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Sort = ({ filterData, sortOpen }) => {
	const { portfolioSort } = useSelector((state) => state.wallet)
	const dispatch = useDispatch()
	function onFilter(value) {
		filterData(value)
		dispatch(setPortfolioSort(value))
	}
	return (
		<ul
			className={cn(styles.body, {
				[styles.open]: sortOpen == true,
			})}>
			<li
				onClick={() => onFilter('value')}
				className={cn({
					[styles.active]: portfolioSort == 'value',
				})}>
				Portfolio Value
			</li>
			<li
				className={cn({
					[styles.active]: portfolioSort == 'name',
				})}
				onClick={() => onFilter('name')}>
				Name
			</li>
			<li
				className={cn({
					[styles.active]: portfolioSort == 'volume',
				})}
				onClick={() => onFilter('volume')}>
				24H Change
			</li>
		</ul>
	)
}
export default Sort
