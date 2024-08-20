import './HorizentalCard.css'

const HorizentalCard = ({img, title, sub}) => {
  return (
    <div className='horizental_card'>
        <img src={img} alt={title} />
        <div>
            <h2>{title}</h2>
            <p>{sub}</p>
        </div>
    </div>
  )
}

export default HorizentalCard