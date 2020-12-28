/*Hooks allow states to be used in function components */

import React, {useState, useContext} from 'react'
import { ThemeContext } from './App'

//Object Deconstruction way, easier to read with few props
//Functions cannot use states (not native), but a React hook can
export default function CounterHooks({initialCount}){
    // useState returns a state as an array.
    // first value returned is the actual state
    // second value returned is the function that allows us to set the state
    // need to use the previous state because setState runs asynchronously
    // essentially running the same function over and over produces same result
    // useState can take in an object ({ }) or a primitive type
    // can use multiple useState calls in functional component unlike class components
    // in class component, need to use an object full of states
    // Hooks must be on the top line of the function, so it can keep track
    // of all your states
    // Only rerenders the component instead of the entire app
    console.log('Render Counter Hooks')
    const [count, setCount] = useState(initialCount)
    const style = useContext(ThemeContext)
    return(
    <div>
    <button style={style} onClick={() => setCount( prevCount => prevCount -1)}>-</button>
    <span> {count} </span>
    <button style={style} onClick={() => setCount( prevCount => prevCount + 1) }>+</button>
    </div>
    )
}

/*
export default function CounterHooks2(props){
    return(
        <div>
            <button>+</button>
            <span>{props.initialCount}</span>
            <button>-</button>
        </div>
    )
}*/

/*
export default function CounterHooks({initialCount}){
    const [state, setCount] = useState(initialCount)
    return(
    <div>
    <button onClick={() => setState( prevState=> {
    return ({count: prevState.count - 1})})}>-</button>
    <span> {state.count} </span>
    <button onClick={() => setState( prevState=>{ 
    return ({count: prevState.count + 1})})}>+</button>
    </div>
    )
}
*/