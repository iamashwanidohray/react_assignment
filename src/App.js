import React,{useState} from 'react'
import LeftSibling from './components/LeftSibling'
import RightSibling from './components/RightSibling'

function App() {

    /*const json = [
        {"label":"First Name", "type":"text", "value": "Enter First Name"},
        {"label":"Last Name", "type":"text", "value": "Enter Last Name"},
        {"label":"Age", "type":"number", "value": "0"},
        {"label":"email", "type":"text", "value": "Enter "}
    ];*/

    const [jsonData,setJsonData] = useState([])

    const onChangeJson = (json) => {
        setJsonData(JSON.parse(json))
    }

    return (
        <div>
            <h1>React Application</h1>
            <LeftSibling onUpdateJson={onChangeJson} />
            <RightSibling formData={jsonData} />
        </div>
    )
}

export default App
