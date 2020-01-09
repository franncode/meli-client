import React from 'react'
import App from 'next/app'
import { Layout } from '../components/layout/layout'

class MyApp extends App {
	state = {
		title: 'Mercado Libre'
	}

	setTitle({ title }) {
		this.setState(state => ({ ...state, title }))
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<Layout title={this.state.title}>
				<Component
					{...pageProps}
					setTitle={title => this.setTitle({ title: title })}
				/>
			</Layout>
		)
	}
}

export default MyApp
