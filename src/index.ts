



export const getItems = async () => {
    const response = await fetch('https://dummyjson.com/todos')
    const jsonData = await response.json()
    console.log(jsonData)
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
    console.log(jsonData)
    return jsonData
}
