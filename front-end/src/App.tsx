import { Provider } from 'react-redux'
import { store } from './stateManagement/store'

function App() {


  return (
    <>
      <Provider store={store}>
          Hello
      </Provider>
    </>
  )
}

export default App
