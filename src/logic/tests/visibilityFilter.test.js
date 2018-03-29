import visibilityFilter from '../visibilityFilter';
import { initialState } from '../todos';

describe('visibilityFilter', () => {
    it('visibilityFilter check', () => {
        const mockState = { test: 'testItem' };
        expect(visibilityFilter(mockState, { type: 'SET_VISIBILITY_FILTER', filter: 'active' })).toEqual('active')
    });
});