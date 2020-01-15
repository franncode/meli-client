import React from 'react'
import App from 'next/app'
import { Layout } from '../components/layout/layout'
import { UserContextProvider } from '../context/userContext'

class MyApp extends App {
	state = {
		title: 'Mercado Libre',
		containerStyle: {},
		favorites: [],
		history: [],
		isMoblie: false
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

		if (this.isMobileBrowser()) {
			this.setState(state => ({ ...state, isMoblie: true }))
		}
	}

	isMobileBrowser = () => {
		return (
			navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPod/i) ||
			navigator.userAgent.match(/BlackBerry/i) ||
			navigator.userAgent.match(/Windows Phone/i)
		)
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
				value={{
					favorites: this.state.favorites,
					history: this.state.history,
					isMoblie: this.state.isMoblie
				}}
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
