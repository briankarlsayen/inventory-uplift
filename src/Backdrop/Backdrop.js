import Spinner from '../icons/spinner.svg'
import './Backdrop.css'
const Backdrop = (props) => {
  return props.show ? (
    <div className="Backdrop">
      <img className="rotate" src={Spinner} alt="spinner" />
    </div>
  ): null
}

export default Backdrop