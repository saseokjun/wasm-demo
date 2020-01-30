import React, { useState } from 'react'
import './App.css'
import waApi from './wa-api'

const App: React.FC = () => {
  const [value, setValue] = useState(5)
  const [result, setResult] = useState()
  
  const onChangeValue = (e: any) => {
    const { value } = e.target
    setValue(value)
  }

  const onClickButton = () => {
    async function fac(value: number){
      const res = (await waApi).factorial(value)
      setResult(res)
    }
    fac(value)
  }
  // async function func(){
  //   const result = (await waApi).scramble("string to scramble")
  //   console.log(result)
  // }
  // func()
  
  return (
    <div>
      <div>
        The factorial of
        <input value={value} onChange={onChangeValue} />
        is {result}
      </div>
      <button onClick={onClickButton}>Calculate</button>
    </div>
  )
}

export default App
