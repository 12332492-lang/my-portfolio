import { useState } from 'react';

function TodoList() {

const [tasks, setTasks] = useState([]);
const [taskInput, setTaskInput] = useState('');
const [completedCount, setCompletedCount] = useState(0);

const addTask = () => {
if (tasks.length < 10 && taskInput.trim() !== '') {
setTasks([...tasks, { text: taskInput, completed: false }]);
setTaskInput('');
}
};

const completeTask = (index) => {
if (!tasks[index].completed) {
const newTasks = [...tasks];
newTasks[index].completed = true;
setTasks(newTasks);
setCompletedCount(completedCount + 1);
}
};

const deleteTask = (index) => {
if (tasks[index].completed) {
setCompletedCount(completedCount - 1);
}
const newTasks = [...tasks];
newTasks.splice(index, 1);
setTasks(newTasks);
};

const getPercentage = () => {
if (tasks.length === 0) return 0;
return Math.min(100, Math.floor((completedCount / tasks.length) * 100));
};

const getProgressMessage = (percentage) => {
if (percentage <= 30) return 'This task requires more attention';
if (percentage <= 60) return 'You are making great progress!';
if (percentage < 100) return 'Congratulations! You are almost finished with the tasks on the list!';
return 'Congratulations! You have completed and finished the tasks on the list!';
};

const getColor = (percentage) => {
if (percentage <= 30) return 'red';
if (percentage <= 60) return 'orange';
return 'green';
};

const percentage = getPercentage();

return (

<div id="todo" className="container" style={{marginTop: "100px"}}>
<h1>Task Management List & To-Do List</h1>

<div className="content-wrapper">

<div className="image-container">
<img src="https://img.freepik.com/free-vector/flat-design-kanban-illustration_23-2149337644.jpg?w=996&t=st=1706726988~exp=1706727588~hmac=0f6e48b34925867254abd85c99b6d3255001262e95b79652628d26210b28d3db" alt="Illustration" />
</div>

<div className="task-list-container">

<input
type="text"
placeholder="Enter a task..."
value={taskInput}
onChange={(e) => setTaskInput(e.target.value)}
/>
<button onClick={addTask}>Add Task</button>

<ul id="taskList">
{tasks.map((task, index) => (
<li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
<span>{task.text}</span>
<div>
<button onClick={() => completeTask(index)}>Complete</button>
<button onClick={() => deleteTask(index)}>Delete</button>
</div>
</li>
))}
</ul>

</div>

</div>

<div className="progress-container">
<div className="progress-bar" style={{ width: percentage + '%', backgroundColor: getColor(percentage) }}></div>
<div className="progress-info">
<span>{percentage}%</span> completed
</div>
<div className="progress-label">{getProgressMessage(percentage)}</div>
</div>

</div>

  );
}

export default TodoList;