import './FormInput.css'

const FormInput = ({lable, inputType, placrholder, textArea}) => {
  return (
    <div className='input_container'>
        <label htmlFor={lable}>{lable}</label>
        {
            textArea
            ? <textarea className='contact_input' rows={7} id={lable} placeholder={placrholder}></textarea>
            : <input className='contact_input' id={lable} type={inputType} placeholder={placrholder} />
        }
    </div>
  )
}

export default FormInput