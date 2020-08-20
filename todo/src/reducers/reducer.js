export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]

export const taskReducer = (state, action) => {

    switch(action.type){
        case "ADD_TASK":
            return[...state, action.payload]
        case "CLEAR_COMPLETED":
            const filter = state.filter(task => !task.completed)
            return filter;
        case "TOGGLE":
            return (state.map(task => {
                if (task.id === action.payload) {
                  return {
                    ...task,
                    completed: !task.completed
                  };
                }
                return task;
                })
              )
        default:
            return (state);
    }
};