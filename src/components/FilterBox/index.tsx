import './FilterBox.scss'
import Searcher from "./Searcher"
import CategorySelect from "./CategorySelect"
import SortSelect from "./SortSelect"

export default () => {
  return (
    <div className="filterbox">
      <Searcher />
      <div className="filterbox__selectors">
        <CategorySelect />
        <SortSelect />
      </div>
    </div>
  )
}