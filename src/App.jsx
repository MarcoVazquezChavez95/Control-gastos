import { useState } from 'react'
import Header from './Components/Header'
import ListadoGastos from './Components/ListadoGastos'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './Components/Modal'
import { generarId } from './helpers'


function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [gastos, setGastos] = useState([])
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  const guardarGasto = gasto => {
    gasto.id = generarId()
    setGastos([...gastos, gasto])
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  return (
    <>
      <div>
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
        {isValidPresupuesto && (
          <>
            <main>
              <ListadoGastos
              gastos={gastos}
              />
            </main>
            <div className='nuevo-gasto'>
              <img
                src={IconoNuevoGasto}
                alt='icono nuevo gasto'
                onClick={handleNuevoGasto}
              />
            </div>
          </>
        )}

        {modal &&
          <Modal
            setModal={setModal}
            animarModal={animarModal}
            setAnimarModal={setAnimarModal}
            guardarGasto={guardarGasto}
          />
        }
      </div>
    </>
  )
}

export default App
