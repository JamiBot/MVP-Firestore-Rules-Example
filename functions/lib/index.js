"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
exports.createItem = functions.firestore
    .document('items/{itemId}')
    .onCreate((snap, context) => {
    const newValue = snap.data();
    console.log("hello world at: " + newValue.date);
});
//# sourceMappingURL=index.js.map