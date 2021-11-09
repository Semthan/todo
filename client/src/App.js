import './App.css';
import { Route, Switch } from 'react-router-dom';
import { TodosPage } from './Pages/TodosPage';
import { EditTodoPage } from './Pages/EditTodoPage';

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
