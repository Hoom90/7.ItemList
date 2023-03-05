import { useState } from 'react'
import file from './component-practice-data.js'
import CardList from './components/cardList/CardList'
const App = () =>{
    let [counter,setCounter] = useState(0)

    const counterHandler = () => {
        setCounter(counter + 1)
    }

    return (
      <div className="container">
        <header>
          <span>{counter}</span>
          <span>: مقالات افزوده شده</span>
        </header>
        <main>
          <CardList items={file} doIt={counterHandler}/>
        </main>
      </div>
    );
}

export default App