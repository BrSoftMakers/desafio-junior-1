import { persistStore } from 'redux-persist';
import { createStore } from 'redux';

import persistReducer from './persistReducers';
import rootReducer from './modules/rootReducer';

const store = createStore(persistReducer(rootReducer));
const persistor = persistStore(store);

export { store, persistor };
