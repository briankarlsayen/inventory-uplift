import { useSelector } from "react-redux";
import {Redirect} from 'react-router-dom'
const userRestrict = WrapperComponent => props => {
  const name = useSelector(state => state.user.name)
  return(
    <div>
      {(name ==='admin') ? <WrapperComponent  /> :
      <Redirect to="login" /> }
    </div>
  )
}

export default userRestrict