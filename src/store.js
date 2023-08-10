import { applyFlexMiddleware, FlexReducer, flexStoreEnhancer } from "@twilio/flex-ui";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from 'redux-saga'
import { mySaga } from "./sagas";



const defaultAppState = {
    someProp: "myStateProp"
};

const sagaMiddleware = createSagaMiddleware()


export function sampleContactCenterReducer(state = defaultAppState, action) {
    switch (action.type) {
        case "CUSTOM_REDUX_ACTION":
            return { ...state, ...action.payload };

        default:
            return state;
    }
}

const reducers = combineReducers({
    flex: FlexReducer,
    sampleContactCenter: sampleContactCenterReducer
});

const devToolsOpts = {
    /* istanbul ignore next */
    actionSanitizer: (action) => action,
    /* istanbul ignore next */
    stateSanitizer: (state) =>
        state.flex.config
            ? {
                ...state,
                flex: {
                    ...state.flex,
                    chat: "<<CUT FOR DEV>>"
                }
            }
            : state
};

export const myReduxStore = createStore(
    reducers,
    composeWithDevTools(devToolsOpts)(applyMiddleware(sagaMiddleware), applyFlexMiddleware(), flexStoreEnhancer)
);

// Then run the saga
sagaMiddleware.run(mySaga)