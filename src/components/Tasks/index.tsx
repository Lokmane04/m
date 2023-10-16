import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Tasks = () => {
  return (
    <div className="tasks-container">
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Tasks;
