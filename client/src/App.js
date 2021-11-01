import './App.css';
import axios from 'axios'

const url = axios.create({
  baseURL: 'http://localhost:5000/'
})

const getAllTodos = () => url.get('/todo')

url.get('/todo')
  .then(function (getAllTodos) {
    console.log(getAllTodos.data);
  })

function App() {
  return (
    <div>

    </div>
  );
}

export default App;
