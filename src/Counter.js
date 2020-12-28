import React, { Component } from 'react'
//use curly braces to grab the named export
import {ThemeContext} from './App'

/*Class component*/
export default class Counter extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            count: props.initialCount
        }
    }
    

    /*When you change state, it will only render component or child components*/
    render(){
        console.log("Render Counter")
        return (
            //Consumer needs a function or else have an error
        <ThemeContext.Consumer> 
            {style => (
                <div>
                <button style={style} onClick={() => this.changeCount(-1)}>-</button>
                <span>{this.state.count}</span>
                <button style={style} onClick={() => this.changeCount(+1)}>+</button>
            </div>
            )}
        </ThemeContext.Consumer>
        )
    }

    changeCount(amount){

        // Function version of the state. Will always work in every scenario
        this.setState( prevState => {
            return { count: prevState.count + amount}
        })

        // Second call will increment again because it is calling the previous state
        this.setState( prevState => {
            return { count: prevState.count + amount}
        })

        /* Use when you don't need to reference previous state
        this.setState({
            count: this.state.count + amount
        })
        */

        /*  Repeating this line of code again will run the same thing, because setState runs asynchronously       
            Not increment anymore
            this.setState({
            count: this.state.count + amount
        })  */
    }
}

// <span>{this.props.initialCount}</span>