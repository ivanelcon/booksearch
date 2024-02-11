import CircularProgress from "@mui/material/CircularProgress"
import {FunctionComponent} from "react"

interface SpinnerProperties {
  size: number
  text: string
}

const Spinner: FunctionComponent<SpinnerProperties> = props => {
  const {size, text} = props
  return <div>{text} <CircularProgress size={size} /></div>
}
export default Spinner