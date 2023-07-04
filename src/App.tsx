import { AppProvider } from './contexts/AppContext'
import { Main } from './pages/Maix'

function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  )
}

export default App
