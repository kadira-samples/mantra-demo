import methodStubs from './configs/method_stubs';
import actions from './actions';
import reducers from './configs/reducers';

export default {
  actions,
  reducers,
  load(context) {
    methodStubs(context);
  }
};
