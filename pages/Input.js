
import  {useState} from 'react';


const Input = ()=>{
  
  
  const  [userinput, setUserInput] = useState('');
  const [todolist, setTodoList] = useState([]);
  const handleChange=(e)=>{
    e.preventDefault()
    setUserInput(e.target.value)
    console.log(userinput)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setTodoList([
      userinput,
      ...todolist
    ])
  }
  const handleDelete = (todo) => {
    const updateArr = todolist.filter(todoItem => todolist.indexOf(todoItem) != todolist.indexOf(todo))
    setTodoList(updateArr)
  }

    return(
      <div>
        <form >
          <input type="text" onChange={handleChange}/>
          <br></br>
          <button type="submit"onClick={handleSubmit} > Luu lai</button>
        </form>
        <ul>
          {
            todolist.length>=1 ? todolist.map((todo, index) => {
              return <li key={index}>{todo}<button onClick={(e) => {
                e.preventDefault()
                handleDelete(todo)
              }}>Delete</button></li>
            })
            : 'Enter text'
          }
        </ul>
        
      </div>
    )
  
 
}

export default Input;