import Hello from '../components/Hello';
import * as actions from '../redux_store/actions';
// import { StoreState } from '../redux_store/types/index';
import { connect, Dispatch } from 'react-redux';

/* const mapStateToProps = ({ enthusiasmLevel, languageName}: StoreState) => {
  return {
    enthusiasmLevel,
    name: languageName
  };
}; */
const mapStateToProps = ({ helloState }: any) => {
  return {
    enthusiasmLevel: helloState.enthusiasmLevel,
    name: helloState.languageName
  };
};
const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);