import * as functions from 'firebase-functions';

exports.createItem = functions.firestore
.document('items/{itemId}')
.onCreate((snap, context) => {
    const newValue = snap.data();

    console.log("hello world at: " + newValue.date);
});