export const ADD_ITEM = 'qgo/assessment/ADD_ITEM';
export const TOGGLE_TODE = 'qgo/assessment/TOGGLE_TODO';
export const TOGGLE_CHECK = 'qgo/assessment/TOGGLE_CHECK';
export const DELETE_ITEM = 'qgo/assessment/DELETE_ITEM';

export const addItem = content => {
    return { type: ADD_ITEM, content };
};

export const toggleTodo = id => {
    return { type: TOGGLE_TODE, id };
};

export const toggleCheck = id => {
    return { type: TOGGLE_CHECK, id };
};

export const deleteItems = () => {
    return { type: DELETE_ITEM };
};

export const initialState = {
    items: [
        { id: 1, content: 'Call mum', completed: false, checked: false },
        { id: 2, content: 'Buy cat food', completed: false, checked: false },
        { id: 3, content: 'Water the plants', completed: false, checked: false },
    ],
};

const reducer = (state = initialState, action) => {
    console.log('reducer todos');
    switch (action.type) {
        case ADD_ITEM:
            const nextId =
                state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
            const newItem = {
                id: nextId,
                content: action.content,
                completed: false,
                checked:false
            };

            return {
                ...state,
                items: [...state.items, newItem]
            };
        case TOGGLE_TODE:
            const completedItems = state.items.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );

            return {
                ...state,
                items: [...completedItems]
            }
        case TOGGLE_CHECK:
            const checkedItems = state.items.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, checked: !todo.checked }
                    : todo
            );

            return {
                ...state,
                items: [...checkedItems]
            }
        case DELETE_ITEM:
            const items = state.items.filter(item => !item.checked);
            return {...state,items: items}
        default:
            return state;
    }
};

export default reducer;
