import InputLayout from "./InputLayout";
import TodosList from "../components/TodosList";
import classes from "./Layout.module.css"


const Layout = () => {

  return <div className={classes.container}>
    <div className={classes.grid}>
      <InputLayout />
      <TodosList />
        
      </div>
  </div>
}

export default Layout;