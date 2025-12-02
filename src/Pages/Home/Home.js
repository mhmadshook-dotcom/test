import './Home.css'
import {Hero,MostPopular, GamingLibrary } from '../../Sections/index'

const Home = () => {
  return (
    <div>
        <h1> Home page </h1><br/>
        <Hero/>
        <MostPopular/>
        <GamingLibrary/>
    </div>
  )
}

export default Home