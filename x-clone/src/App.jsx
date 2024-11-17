import './App.css'

function App() {

  return (
    <>
        <h2 id='titulo' >Aluritter</h2>
        <div id='form'>
        <input type="text" className='form' placeholder='email@exemplo.com'/>
        <input type="password" className='form' placeholder='Senha' />
        </div>
        <button id='button'>Crie uma nova conta</button>
        <div>
          <p id='subtitulo'>Já possui uma conta? <a href="#" id='link'>Acesse agora</a></p>
        </div>
    </>
  )
}

export default App
