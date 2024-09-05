import { COUNTER_INCREMENT, COUNTER_SET } from './constants';

export function counterIncrement() {
    return {
        type: COUNTER_INCREMENT,
    };
}
export function counterSet(count: number) {
    return {
        type: COUNTER_SET,
        data: count,
    };
}
