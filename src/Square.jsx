import Circle from "./Circle"
import Cross from "./Cross"

const Square = ({position, value, take_turn}) => {
  const Checkturn = () => {
      if(value == "EMPTY")
      take_turn(position)
  }
  
  return (
  <div className="square" onClick={Checkturn}>
      {value == "CIRCLE" && <Circle/>}
      {value == "CROSS" && <Cross/>}
      </div>
  )
}
export default Square
