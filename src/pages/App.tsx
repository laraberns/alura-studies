import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import style from './app.module.scss'
import { ITasks } from '../types/ITasks';

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([])
  const [selected, setSelected] = useState<ITasks>()

  function selectTask(taskSelected: ITasks) {
    setSelected(taskSelected)
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    }))) 
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selected={selected}/>
    </div>
  );
}

export default App;
