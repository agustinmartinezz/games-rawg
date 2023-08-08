import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/store';
import GamesList from './components/GamesList'
import Header from './components/Header'


function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <GamesList />
      </Provider>
    </>
  )
}

export default App
