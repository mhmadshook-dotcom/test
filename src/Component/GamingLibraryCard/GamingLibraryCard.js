import './GamingLibraryCard.css'
import { SecondaryButton } from '../Buttons/Buttons'

const GamingLibraryCard = (props) => {
  return (
    <div  className='GamingLibrary-Card'>
        <ul>
            <li><img src={props.image} alt=''/> </li>
            <li><h4>{props.Title}</h4><span>{props.category}</span></li>
            <li><h4>DateAdded</h4><span>{props.DateAdded}</span></li>
            <li><h4>HourPlayed</h4><span>{props.HourPlayed}</span></li>
            <li><h4>Currently</h4><span>{props.Currently}</span></li>
           
           <SecondaryButton> Download </SecondaryButton>
           {/* <div className='main-button'>
                <a href='.#'> Download </a>
            </div>*/}
        </ul>
        
    </div>
  )
}

export default GamingLibraryCard