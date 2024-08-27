import React from 'react'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import { router } from './router/index'

const App = () => {
  return (
    <div>
      <>
        <Header/>
        <Routes>
          {
            router.map((route, index)=>(
              <Route key={index} path={route.path} element={route.element}/>
            ))
          }
        </Routes>
      </>
    </div>
  )
}

export default App
