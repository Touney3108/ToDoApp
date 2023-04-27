import React,{ReactNode,useState} from "react";
import TodoType from "../classes/TodoType";

type TodosContextObj = {
    todosList: TodoType[],
    order: string,
    display:string,
    addTodo: (title: string, description: string, priority: string) => void,
    removeTodo: (id: string) => void,
    editDoneTodo: (id: string, done: boolean) => void,
    editOpen: (id: string) => void,
    setConfiguration: (newOrder: string,newDisplay:string) => void,
    

}

export const TodosContext = React.createContext<TodosContextObj>({
    todosList: [],
    order:"",
    display:"",
    addTodo: () => { },
    removeTodo:(id:string)=>{ },
    editDoneTodo: (id: string, done: boolean) => { },
    editOpen: (id: string) => { },
    setConfiguration: (newOrder: string,newDisplay:string) => { },
});

const TodosContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  
  const [todos, setTodos] = useState<TodoType[]>([
    //FAKE STARTING DATA//
    {
      id:"a",
      title: "Ova aplikacija",
      description: "Treba napraviti interaktivnu aplikaciu prema uputama sa pdfa tako da bude interaktivna",
      priority: "High",
      done:false,
      editOpen:false,
    },
    {
      id:"b",
      title: "Spavanje",
      description: "Treba spavati da mogu otići sutra na posao",
      priority: "Mid",
      done:false,
      editOpen:false,
    },
    {
      id:"c",
      title: "Baciti se na posao i programirati",
      description: "Treba napraviti interaktivnu aplikaciu prema uputama sa pdfa tako da bude interaktivna",
      priority: "High",
      done:true,
      editOpen:false,
    },
    {
      id:"d",
      title: "Piti vodu",
      description: "Treba piti vodu cim budes zedan no ukoliko nisi zanemari ovaj todo",
      priority: "Low",
      done:false,
      editOpen:false,
    },
  //FAKE STARTING DATA
  ]);
  const [order, setOrder] = useState("High to low")
  const [display, setDisplay] = useState("All");
  

 

  const addTodoHandler = (title: string, description: string, priority: string) => {
    const newTodo = new TodoType(title,description,priority);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo)
    })
  }

  const removeTodoHandler = (id:string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(element=>element.id!==id)
    })
  }
  const editDoneTodoHandler = (id: string, done: boolean) => {
    setTodos((prevTodos) => {
      const updatedTodos:any=prevTodos.map(element => {
        if (element.id === id) {
          return { ...element, done: done,editOpen:false }
        } else {
          return element;
        }
      })
    return updatedTodos;
    })
    
  }
  const editOpenHandler = (id: string) => {
    setTodos((prevTodos) => {
      const updatedTodos:any=prevTodos.map(element => {
        if (element.id === id) {
          return { ...element,editOpen:!element.editOpen}
        } else {
          return { ...element,editOpen:false};
        }
      })
    return updatedTodos;
    })
    
  }
  const setConfigurationHandler = (newOrder: string,newDisplay:string) => {
    if (newOrder !== order) setOrder(newOrder);
    if (newDisplay !== display) setDisplay(newDisplay);
    console.log(display,order)
    console.log(newDisplay,newOrder)

  }
  


  
    const contextValue:TodosContextObj= {
        todosList: todos,
        order: order,
        display:display,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
        editDoneTodo: editDoneTodoHandler,
        editOpen: editOpenHandler,
        setConfiguration: setConfigurationHandler,
    }
    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}


export default TodosContextProvider;