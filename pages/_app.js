import React from 'react'
import App from 'next/app'
import { Layout } from '../components/layout/layout'

class MyApp extends App {
	state = {
		title: 'Mercado Libre',
		containerStyle: {}
	}

	setTitle({ title }) {
		this.setState(state => ({ ...state, title }))
	}

	setContainerStyle({ containerStyle }) {
		this.setState(state => ({ ...state, containerStyle }))
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<Layout
				title={this.state.title}
				containerStyle={this.state.containerStyle}
			>
				<Component
					{...pageProps}
					setTitle={title => this.setTitle({ title: title })}
					setContainerStyle={containerStyle =>
						this.setContainerStyle({ containerStyle })
					}
				/>
			</Layout>
		)
	}
}

export default MyApp
