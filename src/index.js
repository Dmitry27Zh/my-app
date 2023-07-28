import reactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Counter from './components/counter'

const App = () => {
  return <Counter></Counter>
}

reactDom.render(<App></App>, document.getElementById('root'))
