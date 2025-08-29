import { useState } from 'react'
import ButtonCom from '../ButtonCom/ButtonCom'
import InputFieldCom from '../InputFields/InputFieldCom'
import Navbar from '../Navbar/Navbar'



export const Dashboard = () => {


    const [todoValue, setTodoValue] = useState("")
    const [todos, setTodos] = useState([])
    const [editTodoValue, seteditTodoValue] = useState(null)
    const [saveTodoValue, setsaveTodoValue] = useState("")

    // console.log(todos);


    const addTodo = () => {

        if (todoValue.length < 3) {
            alert('Please enter value above 3 words')
            return
        }

        todos.push(todoValue)
        setTodos([...todos])
        setTodoValue("")
    }


    const deleteTodo = (inderNumber) => {
        // console.log("delete", inderNumber);
        todos.splice(inderNumber, 1)
        setTodos([...todos])
    }

    const editHandler = (inderNumber) => {
        // console.log("edittodo", inderNumber);
        seteditTodoValue(inderNumber)
        setsaveTodoValue(todos[inderNumber]);
    }


    const saveTodo = (inderNumber) => {
        // console.log("inderNumber" , inderNumber);
        todos.splice(inderNumber, 1, saveTodoValue)
        setTodos([...todos])
        seteditTodoValue(null)
    }

    const cancelEdit = () => {
        seteditTodoValue(null)
    }



    return (
        <>


            <Navbar />

            <div className='flex flex-wrap justify-center mt-7'>
                <InputFieldCom
                    type="text"
                    placeholder="Enter your todos...."
                    onChange={(e) => setTodoValue(e.target.value)}
                    value={todoValue}
                />
                <ButtonCom
                    title="ADD TODO"
                    style={{ backgroundColor: "Lightgreen" }}
                    onClick={addTodo}
                />
            </div>


            <div className='mt-5'>

                <ul className="space-y-2">
                    {todos.map((value, index) => {
                        return editTodoValue === index ?
                            (
                                <div key={index}
                                    className="flex flex-wrap items-center justify-between px-4 py-2 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition mt-3"
                                >
                                    <InputFieldCom
                                        type="text"
                                        placeholder="Update todos...."
                                        style={{ border: "none", backgroundColor: "#f3f4f6" }}
                                        onChange={(e) => setsaveTodoValue(e.target.value)}
                                        value={saveTodoValue}
                                    />
                                    <div>
                                        <ButtonCom
                                            title="Save"
                                            style={{ backgroundColor: "LightGreen" }}
                                            onClick={() => saveTodo(index)}
                                        />
                                        <ButtonCom
                                            title="Cancel"
                                            style={{ backgroundColor: "black", color: "white" }}
                                            onClick={() => cancelEdit(index)}
                                        />

                                    </div>
                                </div>

                            )
                            :
                            (<li
                                key={index}
                                className="flex flex-wrap items-center justify-between px-4 py-2 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition mt-3"
                            >
                                <span className="text-gray-800 font-medium break-words max-w-[100%]">
                                    {index + 1}: {value}
                                </span>

                                <div className="flex space-x-2 mt-2 sm:mt-0">
                                    <ButtonCom
                                        title="Edit"
                                        style={{ backgroundColor: "Lightblue" }}
                                        onClick={() => editHandler(index)}
                                    />
                                    <ButtonCom
                                        title="Delete"
                                        style={{ backgroundColor: "red" }}
                                        onClick={() => deleteTodo(index)}
                                    />
                                </div>
                            </li>
                            );
                    })}
                </ul>


            </div>

        </>
    )
}


export default Dashboard