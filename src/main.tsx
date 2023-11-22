import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { store } from './store/store.ts'
import AddTotalAmount from './pages/addTotalAmount/addTotalAmount.tsx'
// import Test from './test.tsx'
// import "./app/globals.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
    <AddTotalAmount/>
    </Provider >
    {/* <Test/> */}

  </React.StrictMode>,
)
