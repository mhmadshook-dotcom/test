import './GaminLabrary.css'
import { GamingLibraryCard, SectionHeader,SectionWrapper } from '../../Component'
import GamingLiraryData from '../../Data/GamingLibraryData'

const GamingLibrary = () => {
    const  cards = GamingLiraryData.map(card =>{
    return(<GamingLibraryCard key={card.id} image={card.image} Title={card.Title} category={card.category} DateAdded={card.DateAdded} HourPlayed={card.HourPlayed} Currently={card.Currently} /> )
  })
  return (
      <SectionWrapper>
              <SectionHeader> your Gaming Library </SectionHeader>
              <div className='GamingLibrary-items'>
                {cards}
              </div>
        </SectionWrapper>
  )
}

export default GamingLibrary