import './scss/global.scss'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import store from './redux/config'
import Main from './components/Main'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <Main />
  </Provider>
)