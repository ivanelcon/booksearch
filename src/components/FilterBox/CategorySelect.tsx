import {useDispatch, useSelector} from "../../redux/config"
import {actions} from "../../redux/slices/filterbox"
import Select from "../Select"

export const items = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
export default () => {
  const dispatch = useDispatch()
  const category = useSelector(state => state.filterbox.category)
  const onChange = (value: any) => dispatch(actions.updateCategory(value))
  
  return <Select name='category' onChange={onChange} items={items} selected={category} />
}