import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create_page from './pages/Create_page'
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create_page/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App