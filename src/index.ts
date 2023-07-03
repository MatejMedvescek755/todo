
export const getItem =async (id:number) => {
    const response = await fetch(`https://dummyjson.com/todos/${id}`)
    const jsonData = await response.json()
    return jsonData
}

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

export const deleteItem = async (id:number) => {
    const response = await fetch(`https://dummyjson.com/todos/${id}`, {method: 'DELETE',})
    const jsonData = await response.json()
    return jsonData
}

export const getUsers = async () => {
    const response = await fetch('https://dummyjson.com/users')
    const jsonData = await response.json()
    console.log(jsonData.users)
    return jsonData.users
}

export interface Todos{
        todos: Array<Todo>
        total?: number
        skip?: number,
        limit?:number
}

export interface Todo{
    id: number,
    todo: string,
    completed: boolean,
    userId: number,
    isDeleted?:boolean
}

export interface User {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: string
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: string
    hair: Hair
    domain: string
    ip: string
    address: Address
    macAddress: string
    university: string
    bank: Bank
    company: Company
    ein: string
    ssn: string
    userAgent: string
  }
  
  export interface Hair {
    color: string
    type: string
  }
  
  export interface Address {
    address: string
    city: string
    coordinates: Coordinates
    postalCode: string
    state: string
  }
  
  export interface Coordinates {
    lat: number
    lng: number
  }
  
  export interface Bank {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
  }
  
  export interface Company {
    address: Address
    department: string
    name: string
    title: string
  }
  

  