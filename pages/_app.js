import React from 'react'
import App from 'next/app'
import { Layout } from '../components/layout/layout'

class MyApp extends App {
	state = {
		alert: {
			show: false,
			message: ''
		}
	}

	setAlert({ message, show }) {
		this.setState(state => ({ ...state, alert: { message, show } }))
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<Layout>
				<Component {...pageProps} setAlert={this.setAlert} />
			</Layout>
		)
	}
}

export default MyApp
