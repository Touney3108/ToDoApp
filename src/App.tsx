import Layout from "./layout/Layout";
import TodosContextProvider from "./store/todos-context";
function App() {
  
  return <>
    <TodosContextProvider>
    <Layout />
    </TodosContextProvider>
  </>
}

export default App;
