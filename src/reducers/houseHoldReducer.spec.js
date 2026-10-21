import { ADD_CHILD, FETCH_MEMBERS_SUCCESS } from '../actions/houseHoldActions.js';
import householdReducer from './houseHoldReducer.js';

const initialState = {
    allUsers: [],
    members: [],
    children: [],
    error: '',
    loading: false
};

describe("household reducer", () => {
    it('returns the initial state', () => {
        expect(householdReducer(undefined, {})).toEqual(initialState);
    });

    it('adds a child while preserving the adults and existing children', () => {
        const adult = { id: 3, username: 'Parent' };
        const existingChild = { id: 4, username: 'Older child', child: true };
        const newChild = { id: 5, username: 'New child', child: true };
        const state = {
            ...initialState,
            members: [adult],
            children: [existingChild],
            allUsers: [adult, existingChild]
        };

        expect(householdReducer(state, { type: ADD_CHILD, payload: newChild }))
            .toEqual({
                ...state,
                children: [existingChild, newChild],
                allUsers: [adult, existingChild, newChild]
            });
        expect(state.children).toEqual([existingChild]);
    });

    it('loads the member and child lists returned by the household API', () => {
        const member = { id: 3, username: 'Parent' };
        const child = { id: 5, username: 'Child', child: true };

        expect(householdReducer(
            { ...initialState, loading: true, error: 'previous error' },
            { type: FETCH_MEMBERS_SUCCESS, payload: { members: [member], children: [child] } }
        )).toEqual({
            ...initialState,
            members: [member],
            children: [child],
            allUsers: [member, child]
        });
    });
});
