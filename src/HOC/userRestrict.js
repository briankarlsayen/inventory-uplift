import { useSelector } from "react-redux";
import {Redirect} from 'react-router-dom'
const userRestrict = WrapperComponent => props => {
  const logged = useSelector(state => state.users.user[0].id)
  return(
    <div>
      {(logged) ? <WrapperComponent  /> :
      <Redirect to="login" /> }
    </div>
  )
}

export default userRestrict