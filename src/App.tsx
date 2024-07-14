import { useState } from 'react'
import './App.css'
console.log(1)
function App() {
  const [count, setCount] = useState({ name: "", pass: '' })
  console.log(count)

    return (
    <>

      <div >
       
        <form name="add" className="card">
          <input className="add" type="text" placeholder="имя" required min="5"  max="5" onChange={(e) => setCount((prev) => ({ ...prev, name: e.target.value }))} />
          name {count.name}

          <input className="add" type="text" placeholder="пароль" required min="5" max="5" onChange={(e) => setCount((prev) => ({ ...prev, pass: e.target.value }))} />
          pass {count.pass}
          <button className='button' type="submit">
            Отправить
          </button>
          <button className='button' type="reset">
            Очистить
          </button>
        </form>

      </div >
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
