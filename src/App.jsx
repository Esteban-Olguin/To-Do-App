import { useState } from 'react';
import './App.css';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';

function App() {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo,
	} = useTodo();

	return (
		<>
			<div className="container">

				<h1>¡Bienvenido!</h1>

				<div className='card-to-do'>
					<h2>Lista de tareas</h2>
					<div className='counter-todos'>
						<h3>
							N° Tareas: <span>{todosCount}</span>
						</h3>
						<h3>
							Tareas Pendientes: <span>{pendingTodosCount}</span>
						</h3>
					</div>

					<div className='add-todo'>
						<h3>Agregar Tarea</h3>
						<TodoAdd handleNewTodo={handleNewTodo} />
					</div>

					<TodoList
						todos={todos}
						handleUpdateTodo={handleUpdateTodo}
						handleDeleteTodo={handleDeleteTodo}
						handleCompleteTodo={handleCompleteTodo}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
