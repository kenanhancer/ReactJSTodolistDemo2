import reducer, { initialState, addItem, toggleTodo, toggleCheck, deleteItems } from '../todos';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should add new items on ADD_ITEM', () => {
    const state = {
      items: [
        { id: 1, content: 'first', completed: false, checked: false },
        { id: 2, content: 'second', completed: false, checked: false },
      ]
    };

    const mockAction = addItem('third');
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(3);
    expect(result.items[2].id).toEqual(3);
    expect(result.items[2].content).toEqual('third');
  });

  it('should toggle todo item on TOGGLE_TODE', () => {
    const state = {
      items: [
        { id: 1, content: 'first', completed: false, checked: false },
        { id: 2, content: 'second', completed: false, checked: false },
      ]
    };

    const mockAction = toggleTodo(2);
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(2);
    expect(result.items[1].completed).toEqual(true);
  });

  it('should check todo item on TOGGLE_CHECK', () => {
    const mockAction = toggleCheck(3);
    const result = reducer(initialState, mockAction);
    expect(result.items).toHaveLength(3);
    expect(result.items[2].checked).toEqual(true);
  });

  it('should delete todo item on DELETE_ITEM', () => {
    let mockAction = toggleCheck(3);
    let result = reducer(initialState, mockAction);

    expect(result.items[2].checked).toEqual(true);

    mockAction = deleteItems();
    result = reducer(result, mockAction);

    expect(result.items).toHaveLength(2);
  });
});