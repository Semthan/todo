import './App.css';
import axios from 'axios'
import { Route, Switch } from 'react-router-dom';
import { TodosPage } from './Pages/TodosPage';
import { EditTodoPage } from './Pages/EditTodoPage';

/* const url = axios.create({
  baseURL: 'http://localhost:5000/'
}) */

/* const getAllTodos = () => url.get('/todo')

url.get('/todo')
  .then(function (getAllTodos) {
    console.log(getAllTodos.data);
  }) */

function App() {
  return (
    <>
      <Switch>
        <Route path="/todo/edit/:id" component={EditTodoPage} />
        <Route path="/" component={TodosPage} />
      </Switch>
    </>
  );
}

export default App;
