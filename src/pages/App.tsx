import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import style from './app.module.scss'
import { ITasks } from '../types/ITasks';

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([])

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Timer />
    </div>
  );
}

export default App;
