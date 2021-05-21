import './styles.css'

function Input ({required = "", name = "", disabled = false, type, checked, label, placeholder, value, onChange, pattern, width = "280px"}) {
   
    const Input = (
        <input 
            required = {required}
            type={type || "text"} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}   
            pattern={pattern}  
            name={name}   
            checked={checked} 
            disabled={disabled}  
        />
    )
    if(type == "radio"){
        return (
            <div className="InputRadio" style={{width:"auto"}}>
                {Input} 
                <label style={{marginBottom: "0px"}}> {label} </label>
            </div>
        )

    } else {
        return (
            <div className="Input" style={{width:width}}>
                <label>{label}</label>
                {Input}   
            </div>
        )
    }

}

export default Input;