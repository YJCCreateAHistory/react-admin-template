import React from 'react'
import Router from './route/index'
import { ConfigProvider } from 'antd'
import { HashRouter } from 'react-router-dom'
function App() {
    return (
        <HashRouter>
            <ConfigProvider>
                <Router/>
            </ConfigProvider>
        </HashRouter>
    )
}
export default App