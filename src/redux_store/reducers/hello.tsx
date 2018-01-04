// reducers/hello.tsx
import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';
const initialState = {
  enthusiasmLevel: 1,
  languageName: 'World'
};
const helloState = (state: StoreState = initialState, action: EnthusiasmAction): StoreState => {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return {...state, enthusiasmLevel: state.enthusiasmLevel + 1};
    case DECREMENT_ENTHUSIASM:
      return {...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)};
    default:
      return state;
  }
};

export default helloState;