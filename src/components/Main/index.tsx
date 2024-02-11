import './Main.scss'
import Books from '../../components/Books'
import FilterBox from '../../components/FilterBox'

export default () => {
  return <main className='main'>
    <FilterBox />
    <Books />
  </main>
}