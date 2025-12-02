import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'

//    import Header from './Component/Header/Header'
//  import Container from './Component/Container/Container'
//  import Footer from './Component/Footer/Footer'
import {Container} from './Component/index'
import {Header,Footer,Hero,MostPopular,GamingLibrary } from './Sections/index'
import { Home, Profile } from './Pages/index'

const App = () => {
  return (
    <div>
      
      <Router basename={'/test'}>
      <Header/>
       <Container>  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
       </Container>
       <Footer/>
       </Router>

    </div>
  )
}

export default App