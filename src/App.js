import './App.css';

import Home from './pages/Home/Home';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


export default function App () {
  return (
    <DndProvider backend={HTML5Backend}>
      <Home/>
    </DndProvider>
  );
}
