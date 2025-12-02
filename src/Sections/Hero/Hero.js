import  './Hero.css'
import PrimaryButton from '../../Component/Buttons/Buttons'

const Hero = () => {
  return (
    <div className='hero-main'>
        <div className='hero-text'>
            
            <h6 className='hero-subtitle'> Welcome To Cyborg </h6>
            <h1 className='hero-title'><em>BROWSE</em> OUR POPULAR GAMES HERE </h1>
            <PrimaryButton> Browse Now </PrimaryButton>
            
        </div>
    </div>
  )
}

export default Hero
//<div className='main-button'><a href='browse.html'> Browse Now </a></div>