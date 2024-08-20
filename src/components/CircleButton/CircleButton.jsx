import './CircleButton.css'

const CircleButton = ({icon, text}) => {
  return (
    <div className="nav_button">
      <div>{icon}</div>
      <p>{text}</p>
    </div>
  )
}

export default CircleButton