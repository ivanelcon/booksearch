import {useDispatch, useSelector} from "../../redux/config"
import {actions} from "../../redux/slices/filterbox"
import Search from "../Search"

export default () => {
  const dispatch = useDispatch()
  const value = useSelector(state => state.filterbox.searchInput)
  const onChange = (value: string) => dispatch(actions.updateSearchInput(value))
  const onSubmit = (value: string) => dispatch(actions.updateSearch(value))

  return <Search value={value} onSubmit={onSubmit} onChange={onChange} />
}