import './PropertyCard.css'

const PropertyCard = ({img, type, price, location, features, button}) => {

    const featuresEntries = Object.entries(features)
    console.log(featuresEntries);
    

  return (
    <div className='card'>
        <img src={img} alt="" className='img' />
        <div className='price_container'>
            <div className='type_badge'>
                <p>{type}</p>
            </div>
            <p className='price'>{price}</p>
        </div>
        <p className='location'>{location}</p>
        <div className='features_container'>
            {
                featuresEntries.map(([key, value], index) => (
                    <p key={index}>{key}: <b>{value}</b></p>
                ))
            }
        </div>
        <button className='button'>{button}</button>
    </div>
  )
}

export default PropertyCard