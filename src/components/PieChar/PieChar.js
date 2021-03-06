import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { useState, useEffect } from 'react'
import useWalletService from '../../services/WalletService'
import { setDataWalletLabels, setDataWalletPrices } from '../../actions/wallet'
import { useDispatch, useSelector } from 'react-redux'
import Web3 from 'web3'
import getData from '../../pages/Func.wallet/getDataWallet'

const ApexChart = () => {
	const dispatch = useDispatch()
	const { loading, error, getDataWallet } = useWalletService()

	const { dataLabels, dataPrices } = useSelector((state) => state.wallet)
	useEffect(() => {
		getData(dispatch, getDataWallet, onPieCharLoaded)
	}, [])

	const onPieCharLoaded = (list) => {
		const arr = []
		const arrPrice = []
		list.forEach((item) => {
			arr.push(item.symbol)
			arrPrice.push(
				+Number(
					+Number(item.market_data.balance) *
						+Number(item.market_data.current_price.usd)
				).toFixed(2)
			)
		})
		dispatch(setDataWalletLabels(arr))
		dispatch(setDataWalletPrices(arrPrice))
	}

	const state = {
		series: dataPrices,
		options: {
			labels: dataLabels,
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 210,
						},
					},
				},
			],
			plotOptions: {
				pie: {
					expandOnClick: false,
					offsetX: 0,
					offsetY: 0,
					customScale: 1,
					dataLabels: {
						offset: 10,
						minAngleToShowLabel: 100,
					},
					donut: {
						size: '83%',
						labels: {
							show: true,
							name: {
								show: false,
							},
							value: {
								show: true,
								fontFamily: 'Inter',
								fontSize: '20px',
								fontWeight: 600,
								color: '#06040D',
								formatter: function (val) {
									return '$' + val
								},
							},
							total: {
								show: true,
								formatter: function (w) {
									return (
										'$' +
										w.globals.seriesTotals.reduce((a, b) => {
											return +Number(a + b).toFixed(2)
										}, 0)
									)
								},
							},
						},
					},
				},
			},
			dataLabels: {
				enabled: false,
			},
			legend: {
				position: 'right',
				itemMargin: {
					horizontal: 5,
					vertical: 0,
				},
				markers: {
					width: 4,
					height: 4,
					offsetX: -5,
					offsetY: -3,
				},
				fontFamily: 'Inter',
				fontSize: '14px',
				itemMargin: {
					horizontal: 15,
				},
			},
		},
	}

	return (
		<div id='chart'>
			{loading ? (
				<h3>Loading ...</h3>
			) : (
				<ReactApexChart
					options={state.options}
					series={state.series}
					type='donut'
				/>
			)}
		</div>
	)
}
export default ApexChart
