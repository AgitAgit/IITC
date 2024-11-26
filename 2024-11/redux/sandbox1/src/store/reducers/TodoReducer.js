

const initialState = {
    todos: [
        { id: 123456, text: "first todo", completed: false }
    ]
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id:Date.now(), text: action.payload, completed: false }
                ]
            }
    }
}