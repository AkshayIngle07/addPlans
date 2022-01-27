
import React, {useState, useEffect} from 'react'

const ButUseEffect = () => {

    const [changeNum, setChangeNum] = useState(0);

    useEffect(() => {
        document.title = `chats(${changeNum})`
    })

    const incrNum = ()=>{
        setChangeNum(changeNum + 1);
    };

    const myStyle = {
        color : 'grey',
        display : 'block'
    }

    return (
        <div>
            <div style={{marginTop : '200px'}} className="mainDiv">
                <div className='d-flex justify-content-center'>
                    <h1 style={myStyle}>myData</h1>    
                </div>
                <div className='d-flex justify-content-center' style={{fontSize : '2rem', color : 'grey'}}>{changeNum}</div><br/>
                <div className='d-flex justify-content-center '>
                    <button onClick={incrNum} type="button" class="btn btn-warning mx-3">Increament</button>
                </div>
            </div>
        </div>
    )
}

export default ButUseEffect
