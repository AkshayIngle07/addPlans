import React, {useReducer} from 'react'

const reducer = (state,action)=>{

    if(action.type === 'INCR'){
        state = state + 1;
    }

    if(state > 0 && action.type === 'DECR'){
        state = state - 1;
    }

    return state;

}

const ButUseReducer = () => {

    const initialData = 0;

    const [state, dispatch] = useReducer(reducer, initialData);

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
                <div className='d-flex justify-content-center' style={{fontSize : '2rem', color : 'grey'}}>{state}</div><br/>
                <div className='d-flex justify-content-center '>
                    <button onClick={()=>dispatch({type : 'INCR'})} type="button" class="btn btn-warning mx-3">Increament</button>
                    <button onClick={()=>dispatch({type : 'DECR'})} type="button" class="btn btn-danger mx-3">Decriment</button>
                </div>
            </div>
        </>
    )
}

export default ButUseReducer
