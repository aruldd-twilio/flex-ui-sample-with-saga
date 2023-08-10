import { all, takeEvery } from 'redux-saga/effects';

function* onToggleDialer(action) {
    console.log("Hey saga works !");
    yield
}

function* checkTakeEvery() {
    yield takeEvery("VIEW_TOGGLE_OUTBOUND_DIALER", onToggleDialer);
};

export function* mySaga() {
    yield all(
        [
            checkTakeEvery(),
        ]
    )
}
