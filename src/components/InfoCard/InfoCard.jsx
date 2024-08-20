import './InfoCard.css'

const InfoCard = ({number, text}) => {
  return (
    <div className='info_card'>
        <p className='number text-orange'>{number}</p>
        <p className='text'>{text}</p>
        <div className='circle'></div>
    </div>
  )
}

export default InfoCard