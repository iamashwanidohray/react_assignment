import React,{useState} from 'react'

function LeftSibling({onUpdateJson}) {

    const [data,setData] = useState()

    const onChangeHandler = (e) => {
        setData(e.target.value)
    }


    return (
        <div style={{display: 'inline-block', float: 'left', width: '40%'}}>
            <h1>Left Component</h1>
            <div >
                <textarea rows="20" cols="30" onChange={onChangeHandler}>{data}</textarea>
                <button onClick={() => onUpdateJson(data)}>Submit</button>
            </div>
        </div>
    )
}

export default LeftSibling
