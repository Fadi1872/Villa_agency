import './Title.css'

const Title = ({subtitle, title, center, white}) => {
  return (
    <div className='title'>
        <p className={`text-orange ${center ? "center": ''}`}><b>| {subtitle}</b></p>
        <h1 className={`${center ? "center": ""} ${white ? "white": ""}`}>{title}</h1>
    </div>
  )
}

export default Title