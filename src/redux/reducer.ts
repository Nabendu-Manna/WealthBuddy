import { COUNTER_INCREMENT, COUNTER_SET } from './constants';

const initialState: {
    counter: number,
} = {
    counter: 0,
};

export const reducer = (state = initialState, action: { type: any; data: number; }) => {
    switch (action.type) {
        case COUNTER_SET:
            return {
                ...state,
                counter: action.data,
            };
        case COUNTER_INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            };
        default:
            return state;
    }
};
