class TodoType{
    id: string;
    title: string;
    description: string;
    priority: string;
    done: boolean;
    editOpen: boolean;

    constructor(title: string, description: string, priority: string,done:boolean=false,editOpen:boolean=false){
        this.id = new Date().toISOString();
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.done = done;
        this.editOpen = editOpen;
    }
}

export default TodoType;