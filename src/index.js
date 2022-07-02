import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const test = <h1>React</h1>

const container = document.createElement('div')
container.setAttribute('id', 'app')
document.body.appendChild(container)

const root = createRoot(container)
root.render(test)
