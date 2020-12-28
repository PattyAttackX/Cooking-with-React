import React, {useState} from 'react';
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext()

function App() {
  console.log("Render App")
  const [theme, setTheme] = useState('red')
  // .innerHTML / document.createElement('h1')
  return ( 
    // wrapping with <div> will return both h1 and h3
    //  <div>
/*     <>
    <h1>
      Hello World
    </h1>
    <h3>Subtitle</h3>
    </> */
// </div>
// JSX everything needs to have a closing tag or div
// to return one object
//always needs to have value attribute
  <ThemeContext.Provider value={{backgroundColor: theme}}>
  Counter
    <Counter initialCount={0} />
  Counter Hooks
    <CounterHooks initialCount={5}></CounterHooks>
    <button onClick={() => setTheme(prevTheme => {
      return prevTheme === 'red' ? 'blue' : 'red' 
    })}>Toggle Theme</button>
  </ThemeContext.Provider>
  )
}

export default App;
