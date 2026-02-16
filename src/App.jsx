import { useState } from 'react'
import Counter from './Components/Counter'
import ClickCounter from './Components/ClickCounter'
import HoverCounter from './Components/HoverCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
    </>
  )
}

export default App
