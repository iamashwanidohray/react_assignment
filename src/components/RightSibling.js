import React, {useState,useEffect} from 'react'

function RightSibling({formData}) {

    const [formValue,setFormValue] = useState(formData)

    useEffect(() => {
        setFormValue(formData)
    },[formData])

    const onChangeHandler = (e,index) => {
        let newObject = {...formValue[index]};
        newObject.value = e.target.value;
        formValue.splice(index,1,newObject);
        setFormValue([...formValue])
    }

    const onSubmitHandler = (e) => {
        console.log(e.target);
        alert()
        e.preventDefault();
    }

    return (
        <div style={{display: 'inline-block', float: 'left', width: '40%'}}>
            <h1>Right Component</h1>
            <div>
                <form onSubmit={onSubmitHandler}>
                    {
                        formValue && formValue.map((inputEl,index) => {
                            return(
                                <div key={index}>
                                    <label>{inputEl.label}</label><br/>
                                    <input type={inputEl.type} name={inputEl.name} value={inputEl.value} onChange={(e) => onChangeHandler(e,index)} /><br/>
                                </div>
                            )
                        })
                    }
                    <div>
                        <input type="submit" name="Submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RightSibling
