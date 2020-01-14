import React from 'react'
import App from 'next/app'
import { Layout } from '../components/layout/layout'
import { UserContextProvider } from '../context/userContext'

class MyApp extends App {
	state = {
		title: 'Mercado Libre',
		containerStyle: {},
		favorites: [],
		history: []
	}

	componentDidMount = () => {
		const favorites = localStorage.getItem('favorites')
		if (favorites) {
			this.setState(state => ({ ...state, favorites }))
		}

		const history = localStorage.getItem('history')
		if (history) {
			this.setState(state => ({ ...state, history }))
		}
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
			<UserContextProvider
				value={{ favorites: this.state.favorites, history: this.state.history }}
			>
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
			</UserContextProvider>
		)
	}
}

export default MyApp
