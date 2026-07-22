import './App.css'

function App() {

  return (
    <>
      <div>
        hello world
      </div>
      <Text display="whats up"></Text>
      <Text display="hello"></Text>
    </>
 
  )
}

function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}

export default App
