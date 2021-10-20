import {useEffect} from "react";
import "../styles/input.css";

const Form = ({todo, setTodo, inputText, setInputText}) => {
	const inputTextHandler = e => {
		setInputText(e.target.value);
	};

	const generateKey = _ => {
		return `item_${new Date().getTime()}`;
	};

	const todoHandler = e => {
		e.preventDefault();
		setTodo([...todo, {completed: false, name: inputText, id: generateKey()}]);
		setInputText("");
	};

	return (
		<form className="inputContainer" onSubmit={todoHandler}>
			<input onChange={inputTextHandler} value={inputText} type="text" className="todoInput" />
			<button type="submit" className="sendInput">
				<i className="fas fa-paper-plane "></i>
			</button>
		</form>
	);
};

export default Form;
