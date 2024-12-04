const express = require('express');
const admin = require('firebase-admin');
const app = express();
const port = process.env.PORT || 3000;

// Initialize Firebase Admin SDK with the service account credentials
const serviceAccount = require('./config/serviceAccountKey.json');  // Ensure this path is correct

// Initialize Firebase App (Firestore only, no need for databaseURL for Firestore)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

console.log("Firebase Initialized: ", admin.apps.length);

const db = admin.firestore();  // Firestore instance

// Middleware to parse JSON request bodies
app.use(express.json());

// Import routes from the routes.js file
const routes = require('./routes/routes');  // Ensure the correct path to routes.js

// Use the routes with the app
app.use('/api', routes);  // All routes in routes.js will be prefixed with /api

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
