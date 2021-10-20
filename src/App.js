import {useState} from "react";
import "./styles/App.css";
import Form from "./components/form";
import TodoList from "./components/todoList";

function App() {
	const [inputText, setInputText] = useState("");
	const [todo, setTodo] = useState([]);

	return (
		<div className="todoContainer">
			<div className="todoContainer__imageContainer">
				<h1 className="title">Do you have something to do today?</h1>
			</div>

			<Form todo={todo} setTodo={setTodo} inputText={inputText} setInputText={setInputText} />
			<TodoList todo={todo} setTodo={setTodo} />
		</div>
	);
}

export default App;
