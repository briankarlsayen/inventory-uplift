import {useState} from 'react'
import axios from 'axios'
import Backdrop from '../Backdrop/Backdrop'

const withLoading = WrappedComponent => (props) => {
  const [show, setShow] = useState(false)

  axios.interceptors.request.use(
    (config) => {
      setShow(true)
      return config
    },
    (error) => {
      setShow(false)
      return Promise.reject(error)
    }
  )

  axios.interceptors.response.use(
    (config) => {
      setShow(false)
      return config
    },
    (error) => {
      setShow(false)
      return Promise.reject(error)
    }
  )

  return(
    <div>
      <Backdrop show={show} />
      <WrappedComponent {...props} />
    </div>
  )

}

export default withLoading