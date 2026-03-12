import { useState } from "react";

function Tasks() {

  // input: valor atual do campo de texto
  // setInput: função usada para atualizar esse valor
  // começa vazio
  const [input, setInput] = useState("");

  // aqui guardamos a lista de tarefas
  // começa como um array vazio (nenhuma tarefa ainda)
  // cada tarefa será um objeto
  const [tasks, setTasks] = useState([]);


  // função para adicionar uma tarefa nova: ela é chamada quando clicamos no botão Add ou quando pressionamos Enter no input
  function addTask() {

    // trim remove espaços em branco. Se o input estiver vazio, a função para aqui
    // isso evita criar tarefas vazias
    if (!input.trim()) return;

    // criando um objeto de tarefa
    const newTask = {
      id: crypto.randomUUID(), 
      title: input, 
      completed: false, 
    };

    // criamos um novo array copiando as tarefas existentes e adicionando a nova tarefa no final. Isso mantém a imutabilidade que o React precisa
    setTasks([...tasks, newTask]);


    setInput("");
  }


  function completeTask(task) {

    // percorremos todas as tarefas com map .Se a tarefa atual for a clicada: criamos uma nova versão dela mudando o completed
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );

    // ...t copia todas as propriedades da tarefa e completed: !t.completed alterna entre true e false

    // atualizamos o estado com o novo array.Isso faz o React re-renderizar a interface
    setTasks(updatedTasks);
  }


  function deleteTask(task) {

    // filter cria um novo array mantendo apenas as tarefas com id diferente da que queremos remover
    const filteredTasks = tasks.filter((t) => t.id !== task.id);


    setTasks(filteredTasks);
  }



  return (
  <div className="bg-slate-900 min-h-screen text-white flex flex-col items-center pt-10">


    {/* Tasks section */}
    <div className="w-full max-w-md flex flex-col items-center gap-4">
      <h2 className="text-lg text-slate-300 font-medium tracking-wide">Tasks</h2>

      {/* Input */}
      <div className="flex gap-2 w-full">
        <input
          className="flex-1 p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button
          className="px-5 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition-colors"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      {/* Task list */}
      <ul className="w-full space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between p-3 bg-white/5 rounded-lg border border-white/10 ${
              task.completed ? "opacity-50 line-through" : ""
            }`}
          >
            <span onClick={() => completeTask(task)} className="cursor-pointer">
              {task.title}
            </span>
            <button className="text-red-400 hover:text-red-300" onClick={() => deleteTask(task)}>
              ×
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="text-white/30 mt-4 text-sm">No tasks yet</p>
      )}
    </div>
  </div>
);
}

export default Tasks;