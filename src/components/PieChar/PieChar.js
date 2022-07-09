import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default class ApexChart extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			series: [1000, 50000, 123, 12421],
			options: {
				labels: ['BTC', 'ETH', 'Polygon', 'Other'],
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
												return a + b
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
	}

	render() {
		return (
			<div id='chart'>
				<ReactApexChart
					options={this.state.options}
					series={this.state.series}
					type='donut'
				/>
			</div>
		)
	}
}
