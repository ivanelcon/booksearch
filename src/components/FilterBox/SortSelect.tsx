import {useDispatch, useSelector} from "../../redux/config"
import {actions} from "../../redux/slices/filterbox"
import Select from "../Select"

export const items = ['relevance', 'newest']
export default () => {
  const dispatch = useDispatch()
  const sort = useSelector(state => state.filterbox.sort)
  const onChange = (value: any) => dispatch(actions.updateSort(value))

  return <Select name='sort' onChange={onChange} items={items} selected={sort} />
}