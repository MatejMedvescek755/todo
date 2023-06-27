



export const getItems = async () => {
    const response = await fetch('https://dummyjson.com/todos')
    const jsonData = await response.json()
    return jsonData
}

export const addItem = async (todo: string, completed?: boolean,
    userId?: number) => {
    const response = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            todo: todo,
            completed: false,
            userId: 5,
        })
    })
    const jsonData = await response.json()
    return jsonData
}

export const deleteItem =async (id:number) => {
    const response = await fetch('https://dummyjson.com/todos/'+id, {method: 'DELETE',
    })
    const jsonData = await response.json()
    return jsonData
}

export interface Todos{
        todos: Array<Todo>
        total: number
        skip: number,
        limit:number
    
}

interface Todo{
    id: number,
    todo: string,
    completed: boolean,
    userId: number,
    isDeleted?:boolean
}