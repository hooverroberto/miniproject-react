
import './App.css';
import { Routes, Route} from 'react-router-dom';

import Header from './pages/Header'
import Inicio from './pages/Inicio';
import Notas from './components/notas/Notas';
import TodoList from './components/todo/TodoList';
import Calendario from './components/calendar/Calendario';
import Calculadora from './components/calculadora/Calculadora';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/notas' element={<Notas />} />
        <Route path='/calculadora' element={<Calculadora />} />
        <Route path='/todolist' element={<TodoList />} />
        <Route path='/calendario' element={<Calendario/>} />
      </Routes>
    </div>

  );
}

export default App;
