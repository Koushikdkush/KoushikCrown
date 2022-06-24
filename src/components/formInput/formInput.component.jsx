import './form-input.style.scss';
const FormInput = ({ label, ...otherprops }) => {
    return (
        <div className='group'>
             <input {...otherprops} className='form-input' />
            {
                label &&
                <label className={`${otherprops.value.length ? 'shrink' : ''}
            
            form-input-label`}>{label}</label>
            }
           
        </div>
    )
}
export default FormInput;