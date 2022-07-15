import React from 'react'
import styles from './allow-data.module.css'
import SwitchButton from '../SwitchButton/SwitchButton'
const AllowData = () => {
	return (
		<div className={styles.body}>
			<div className={styles.info}>
				<h4 className={styles.title}>Allow Data Collection</h4>
				<p className={styles.par}>
					Polygon Wallet collects your data to provide you with an improved user
					experience.
				</p>
			</div>
			<div className={styles.btn}>
				<SwitchButton check={true} />
			</div>
		</div>
	)
}
export default AllowData
