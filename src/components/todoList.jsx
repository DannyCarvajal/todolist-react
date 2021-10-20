import "../styles/todoList.css";

const todoList = ({todo, setTodo}) => {
	const eraseTodo = e => {
		const todoName = e.currentTarget.previousSibling.innerText;
		setTodo([...todo].filter(t => t.name !== todoName));
	};

	const completeTodo = e => {
		const todoItem = e.currentTarget.previousSibling.previousSibling;
		const todoName = todoItem.innerText;
		const updatedTodo = [...todo].map(t => {
			if (t.name === todoName) {
				todoItem.classList.toggle("completed");
				return {...t, completed: !t.completed};
			}
			return t;
		});
		setTodo(updatedTodo);
	};

	return (
		<div className="todoList">
			{todo.map(t => {
				return (
					<div className="todo">
						<h2 className="todo__title">{t.name}</h2>
						<button className="todo__erase" onClick={eraseTodo}>
							<i className="fa fa-trash"></i>
						</button>
						<button className="todo__complete" onClick={completeTodo}>
							<i className="fas fa-check-square"></i>
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default todoList;
