import React from 'react'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import { setCurrentPage } from '../../actions/createActions'
import { useDispatch, useSelector } from 'react-redux'
import RestoreCountWords from '../../components/RestoreCountWordsList/RestoreCountWords'
import cn from 'classnames'

const WalletRestore = () => {
	const dispatch = useDispatch()
	const { chooseCountWordRestore } = useSelector((state) => state.restore)
	const goReg = () => {
		if (chooseCountWordRestore != null) {
			dispatch(setCurrentPage('RestoreWalletReg'))
		}
	}
	return (
		<section className='bg-white'>
			<Title>Restore Wallet</Title>
			<div className='wallet_body'>
				<div className='wallet_body__top'>
					<RestoreCountWords />
				</div>
				<div className='wallet-body__bottom' style={{ paddingBottom: '20px' }}>
					<Button
						onClick={goReg}
						arrow={true}
						className={cn({
							['disabled']: chooseCountWordRestore == null,
						})}
						type='primary'>
						Continue
					</Button>
				</div>
			</div>
		</section>
	)
}

export default WalletRestore
