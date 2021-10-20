import {useState, useEffect} from "react";
import "./styles/App.css";
import Form from "./components/form";
import TodoList from "./components/todoList";

function App() {
	const [inputText, setInputText] = useState("");
	const [todo, setTodo] = useState([]);
	const [title, setTitle] = useState("Do you have something to do today?");

	useEffect(() => {
		console.log("hey brother");
	}, [todo]);

	return (
		<div className="todoContainer">
			<div className="todoContainer__imageContainer">
				<h1 className="title">{title}</h1>
			</div>

			<Form todo={todo} setTodo={setTodo} inputText={inputText} setInputText={setInputText} />
			<TodoList todo={todo} setTodo={setTodo} />
		</div>
	);
}

export default App;
