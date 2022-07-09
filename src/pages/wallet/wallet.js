import React from 'react'
import { useDispatch } from 'react-redux'
import WalletHeader from './../../components/WalletHeader/WalletHeader'
import ApexChart from '../../components/PieChar/PieChar'
import styles from './wallet.module.css'
import PortfolioList from './../../components/PortfolioList/PortfolioList'
import TransferBtn from '../../components/TransferBtn/TransferBtn'

const Wallet = () => {
	const dispatch = useDispatch()
	return (
		<section className={'bg-white'}>
			<div className='wallet-body'>
				<WalletHeader />
				<div className='wallet-top' style={{ position: 'relative' }}>
					<TransferBtn type='send'>Transfer</TransferBtn>
					<ApexChart />
					<TransferBtn type='receive'>Receive</TransferBtn>
				</div>
				<div className='wallet-bottom'>
					<ul className={styles.navigation}>
						<li>
							<svg
								width='5'
								height='5'
								viewBox='0 0 5 5'
								fill='#4F33A3'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M1.92116 4.80114V0H2.87642V4.80114H1.92116ZM0 2.87642V1.92472H4.80114V2.87642H0Z' />
							</svg>
							Manage assets
						</li>
						<li>
							<svg
								width='12'
								height='9'
								viewBox='0 0 12 9'
								fill='#4F33A3'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M6.8873 7.8125H5.9498C5.67637 7.8125 5.48105 8.02734 5.48105 8.28125C5.48105 8.55469 5.67637 8.75 5.9498 8.75H6.8873C7.14121 8.75 7.33652 8.55469 7.33652 8.28125C7.33652 8.02734 7.14121 7.8125 6.8873 7.8125ZM8.11777 5.3125H5.9498C5.67637 5.3125 5.48105 5.52734 5.48105 5.78125C5.48105 6.05469 5.67637 6.25 5.9498 6.25H8.11777C8.37168 6.25 8.58652 6.05469 8.58652 5.78125C8.58652 5.52734 8.39121 5.3125 8.11777 5.3125ZM9.36777 2.8125H5.9498C5.67637 2.8125 5.48105 3.02734 5.48105 3.28125C5.48105 3.55469 5.67637 3.75 5.9498 3.75H9.36777C9.62168 3.75 9.83652 3.55469 9.83652 3.28125C9.83652 3.02734 9.64121 2.8125 9.36777 2.8125ZM10.6178 0.3125H5.9498C5.67637 0.3125 5.48105 0.527344 5.48105 0.78125C5.48105 1.05469 5.67637 1.25 5.9498 1.25H10.6178C10.8717 1.25 11.0865 1.05469 11.0865 0.78125C11.0865 0.527344 10.8912 0.3125 10.6178 0.3125ZM3.87949 5.9375L2.8248 7.08984V0.488281C2.8248 0.214844 2.60996 0 2.35605 0C2.08262 0 1.8873 0.214844 1.8873 0.488281V7.08984L0.813085 5.9375C0.715428 5.83984 0.598241 5.80078 0.481053 5.80078C0.363866 5.80078 0.246678 5.83984 0.149022 5.91797C-0.0462903 6.09375 -0.0462903 6.38672 0.129491 6.58203L1.98496 8.61328C2.16074 8.80859 2.49277 8.80859 2.66855 8.61328L4.52402 6.58203C4.6998 6.38672 4.6998 6.09375 4.50449 5.91797C4.34824 5.74219 4.05527 5.76172 3.87949 5.9375Z' />
							</svg>
							Portfolio Value
							<svg
								width='7'
								height='4'
								viewBox='0 0 7 4'
								fill='#4F33A3'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M6.81748 0.813085L3.84873 3.60605C3.75107 3.70371 3.63389 3.74277 3.53623 3.74277C3.41904 3.74277 3.30185 3.70371 3.2042 3.62558L0.235448 0.813085C0.0401355 0.637303 0.0401355 0.344335 0.215917 0.149022C0.391698 -0.0462903 0.684667 -0.0462903 0.879979 0.129491L3.53623 2.62949L6.17295 0.129491C6.36826 -0.0462903 6.66123 -0.0462903 6.83701 0.149022C7.01279 0.344335 7.01279 0.637303 6.81748 0.813085Z' />
							</svg>
						</li>
					</ul>
					<PortfolioList className={styles.portfolio_list} />
				</div>
			</div>
		</section>
	)
}

export default Wallet
