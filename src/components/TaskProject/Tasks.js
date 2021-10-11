import React from 'react'

//create component called theme
//add four btn
//name four btn four diff colors
//when clicked, change background to color of btn

function Tasks({setTask, state}) {
  const{task} = state
  let tasks;
  if(task.length > 0){
    tasks = task.map((tasked, index) => {
      return(
        <div className="task" key={index}>
            <h3>{tasked.title}</h3>
            <h3>
            {tasked.completed ? 'Completed' : 'Not Completed'}
            </h3>
            <button onClick={()=>doneTask(index)}>Click me!</button>
          </div>
      )
    })
  }
  const doneTask = (num) => {
    let newState = {...state}
    if(!newState.task[num].completed){
      newState.task[num].completed = true
      newState.count++
      setTask(newState)
    }
  }
  return (
    <div className="app__task">
      <h2>Tasks</h2>
      <div className="appTask">
        {tasks}
      </div>
    </div>
  )
}

export default Tasks
