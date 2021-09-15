import React from "react"
import type { AppProps } from "next/app"
import Head from "next/head"

import { ipcRenderer } from 'electron'

import 'tailwindcss/tailwind.css'


function MyApp({ Component, pageProps }: AppProps) {
	
	return (
		<React.Fragment>
			<Head>
				<title>Gerador de Nitro</title>
			</Head>
			<Component {...pageProps} />
		</React.Fragment>
	)
}

export default MyApp
