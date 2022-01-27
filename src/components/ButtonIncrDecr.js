import React, {useState} from 'react'

const ButtonIncrDecr = () => {

    const [changeNum, setChangeNum] = useState(0);

    const incrNum = ()=>{
        setChangeNum(changeNum + 1);
    };

    const decrNum = ()=>{
        if(changeNum > 0){
            setChangeNum(changeNum - 1);
        }else{
            setChangeNum(0);
        }
    };

    const myStyle = {
        color : 'grey',
        display : 'block'
    }

    return (
        <>  
            <div style={{marginTop : '200px'}} className="mainDiv">
                <div className='d-flex justify-content-center'>
                    <h1 style={myStyle}>myData</h1>    
                </div>
                <div className='d-flex justify-content-center' style={{fontSize : '2rem', color : 'grey'}}>{changeNum}</div><br/>
                <div className='d-flex justify-content-center '>
                    <button onClick={incrNum} type="button" class="btn btn-warning mx-3">Increament</button>
                    <button onClick={decrNum} type="button" class="btn btn-danger mx-3">Decriment</button>
                </div>
            </div>
        </>
    )
}

export default ButtonIncrDecr
