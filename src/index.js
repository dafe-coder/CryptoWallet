import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pages from './pages'
import store from './store/store'
import { Provider } from 'react-redux'
const App = () => {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<Pages />
			</Provider>
		</React.StrictMode>
	)
}

const container = document.createElement('div')
container.setAttribute('id', 'app')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
