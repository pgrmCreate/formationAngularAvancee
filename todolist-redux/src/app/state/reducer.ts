import {createReducer, MetaReducer, on} from "@ngrx/store";
import {addAction, initAction} from "./todo-actions";

const initialState = {
    todoList: []
}

export const reducer = createReducer(
    initialState,
    on(initAction, (state) => {
        return {...state}
    }),
    on(addAction, (state: any, action: any) => {
        return {...state,
            todoList: [...state.todoList, {
                id: state.todoList.length === 0 ? 0 : state.todoList[state.todoList.length -1].id + 1,
                name: action.name,
                isDone: false
            }]
        }
    })
);

function log() {
    return (state: any, action: any) => {
        const newState = reducer(state, action);

        console.log('prev state', state);
        console.log('new state', newState);

        return newState;
    }
}

export const metaReducers: MetaReducer[] = [log];
