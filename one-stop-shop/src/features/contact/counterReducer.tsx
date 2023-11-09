//ACTION TYPES
export const INCREMENET_COUNTER = "INCREMENET_COUNTER";
export const DECREMENET_COUNTER = "DECREMENET_COUNTER";
//END OF ACTION TYPES

export interface CounterState {
  data: number;
  title: string;
}

const initialState: CounterState = {
  data: 42,
  title: "Yet abother redux context",
};

//ACTION CREATORS
export function increment(amount = 1) {
  return { type: INCREMENET_COUNTER, payload: amount };
}

export function decrement(amount = 1) {
  return { type: DECREMENET_COUNTER, payload: amount };
}
// END OF ACTION CREATORS

interface CounterAction {
  type: string;
  payload: number;
}

export default function counterReducer(
  state = initialState,
  action: CounterAction
) {
  switch (action.type) {
    case INCREMENET_COUNTER:
      return {
        ...state,
        data: state.data + action.payload, //   data: state.data + 1,
      };

    case DECREMENET_COUNTER:
      return {
        ...state,
        data: state.data - action.payload,
      };
    default:
      return state;
  }
  return state;
}
