import '../../App.css';
import {useState} from 'react'
import UserForm from './UserForm'
import TaskCount from './TaskCount';
import Tasks from './Tasks';
import Theme from './Theme'
import styles from './styling/Theme.module.css'
import {NavLink,Link, Switch, Route} from 'react-router-dom'

function TasksProject() {
  const [state, setState] = useState({
    count: 0,
    task:[
      {
        title: 'Clean Room',
        completed: false
      },
      {
        title: 'Read Book',
        completed: false
      },
      {
        title: 'Run',
        completed: false
      }
    ]
  })
  const [theme, setTheme] = useState('white')

  const theTheme = [
    theme === 'red' && styles.colorRed, 
    theme === 'white' && styles.colorWhite, 
    theme === 'blue' && styles.colorBlue, 
    theme === 'yellow' && styles.colorYellow
  ]
  

  return (
    <div className={theTheme.join(' ')}>
      <h1 >Task manager</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/user">User</NavLink>
          </li>
          <li>
            <NavLink to="/theme">Theme</NavLink>
          </li>
          <li>
            <NavLink to="/tasks">Tasks</NavLink>
          </li>
        </ul> 
      </nav>
      <Switch>
        <Route exact path="/user"><UserForm /></Route>
        <Route path="/tasks"><Tasks task={state.task} setTask={setState} state={state}/></Route>
        <Route path="/theme"><Theme setTheme={setTheme} /></Route>
        <Route path="/"><TaskCount count={state.count} /></Route>
      </Switch>

      
      
      
      
    </div>
  );
}

export default TasksProject;
