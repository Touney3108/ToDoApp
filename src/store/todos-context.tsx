import React,{ReactNode,useState} from "react";
import TodoType from "../classes/TodoType";

type TodosContextObj = {
    todosList: TodoType[],
    order: string,
    display: string,
    editMode: boolean,
    inputData:{title:string,description:string,priority:string,submitable:boolean},
    submitTodo: () => void,
    removeTodo: (id: string) => void,
    editDoneTodo: (id: string, done: boolean) => void,
    editOpen: (id: string) => void,
    setConfiguration: (newOrder: string, newDisplay: string) => void,
    setInputData:(title:string,description:string,priority:string,submitable:boolean)=>void,
    

}

export const TodosContext = React.createContext<TodosContextObj>({
    todosList: [],
    order:"",
    display: "",
    editMode: false,
    inputData:{title:"",description:"",priority:"",submitable:false},
    submitTodo: () => { },
    removeTodo:(id:string)=>{ },
    editDoneTodo: (id: string, done: boolean) => { },
    editOpen: (id: string) => { },
    setConfiguration: (newOrder: string, newDisplay: string) => { },
    setInputData:(title:string,description:string,priority:string,submitable:boolean)=>{},
});

const TodosContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  
  const [todos, setTodos] = useState<TodoType[]>([
    //FAKE STARTING DATA//
    {
      id:"a",
      title: "Todo:create a React ToDo Application",
      description: "Make your app interactive",
      priority: "High",
      done:false,
      editOpen:false,
    },
    {
      id:"b",
      title: "Todo:2:...",
      description: "Lorem ipsum...",
      priority: "Mid",
      done:false,
      editOpen:false,
    },
    {
      id:"c",
      title: "Really long description",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nihil illum ipsa voluptate architecto nesciunt, animi quo maiores praesentium sunt blanditiis tempore laboriosam quas sint fugiat vero quam autem quia!",
      priority: "High",
      done:true,
      editOpen:false,
    },
    {
      id:"d",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nihil illum ipsa voluptate architecto nesciunt, animi quo maiores praesentium sunt blanditiis tempore laboriosam quas sint fugiat vero quam autem quia!",
      description: "Really long title",
      priority: "Low",
      done:false,
      editOpen:false,
    },
  //FAKE STARTING DATA
  ]);
  const [order, setOrder] = useState("High to low")
  const [display, setDisplay] = useState("All");
  const [editMode, setEditMode] = useState(false);
  const [inputData, setInputData] = useState({ title: "", description: "", priority: "",submitable:false});
  
  const editDone = () => {
    setInputData({ title: "", description: "", priority: "", submitable: false })
    setEditMode(false);
  }

 

  const submitTodoHandler = () => {
  if(inputData.submitable)
    {
      if (!editMode) {
      const newTodo = new TodoType(inputData.title,inputData.description,inputData.priority);
      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo)
      })
    }
    else {
      const editableTodo = todos.find(todo => todo.editOpen === true)
      if (editableTodo) {
        editableTodo.title = inputData.title;
        editableTodo.description = inputData.description;
        editableTodo.priority = inputData.priority;
        editableTodo.editOpen = false;
      }
    }
    editDone();
    }
  }

  const removeTodoHandler = (id:string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(element=>element.id!==id)
    })
    editDone();
  }
  const editDoneTodoHandler = (id: string, done: boolean) => {
    if(inputData.submitable){
      const editableTodo = todos.find(todo => todo.id === id);
      if (editableTodo) {
        editableTodo.done = done;
        editableTodo.title = inputData.title;
        editableTodo.description = inputData.description;
        editableTodo.priority = inputData.priority;
        editableTodo.editOpen = false;
      }
      editDone()
    }
    
  }
  const editOpenHandler = (id: string) => {
    setTodos((prevTodos) => {
      const updatedTodos:any=prevTodos.map(element => {
        if (element.id === id) {
          if (!element.editOpen) { 
            setEditMode(true);
            setInputData({title:element.title,description:element.description,priority:element.priority,submitable:true})
          }
          else setEditMode(false);
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
  }

  const setInputDataHandler = (title: string, description: string, priority: string,submitable:boolean) => {
    setInputData({title,description,priority,submitable})
  }
  


  
    const contextValue:TodosContextObj= {
        todosList: todos,
        order: order,
        display: display,
        editMode: editMode,
        inputData:inputData,
        submitTodo: submitTodoHandler,
        removeTodo: removeTodoHandler,
        editDoneTodo: editDoneTodoHandler,
        editOpen: editOpenHandler,
        setConfiguration: setConfigurationHandler,
        setInputData:setInputDataHandler,
    }
    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}


export default TodosContextProvider;