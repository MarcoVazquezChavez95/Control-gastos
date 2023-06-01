import Gasto from './Gasto'

const ListadoGastos = ({gastos}) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
        {gastos.map(gasto => {
           console.log(gasto)
        })}
    </div>
  )
}

export default ListadoGastos