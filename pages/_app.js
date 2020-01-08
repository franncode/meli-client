import React from 'react'
import App from 'next/app'
import dynamic from 'next/dynamic'
import { Layout } from '../components/layout/layout'
const Loader = dynamic(() => import('../components/loader/loader'))

class MyApp extends App {
	state = {
		alert: {
			show: false,
			message: ''
		},
		loading: false
	}

	setAlert({ message, show }) {
		this.setState(state => ({ ...state, alert: { message, show } }))
	}

	setLoading({ loading }) {
		this.setState(state => ({ ...state, loading: loading }))
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<Layout loading={this.state.loading}>
				{this.state.loading && <Loader />}
				<Component
					{...pageProps}
					setAlert={alert => this.setAlert(alert)}
					setLoading={loading => this.setLoading(loading)}
				/>
			</Layout>
		)
	}
}

export default MyApp
