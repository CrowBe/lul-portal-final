import express from 'express';

const router = express.Router();

// All of the following routes will require authentication
// This is established in the index page using authentication middleware

router.get('/jobs', (req, res) => {
    // Retrieve the jobs collection from the database, scoped using relevant parameters
    // Send the requested data to the frontend
});

router.post('/job', (req, res) => {
    // Pull the required information from the request body
    const { firstName, surname } = req.body;
    console.log(`${firstName} ${surname}`)
    // Create an initial job document, setting the job stage to 0 = "request stage"
    res.json({success: "success"})
    // Save the job to the database
    // reroute user to /job/:id with the new job id as :id parameter
});

router.route('/job/:id')
    .get((req, res) => {
        // Retreieve the job id from the req params
        // Match the job id to the database and retrieve the document
        // Send the document to the frontend
    })
    .put((req, res) => {
        // Retreieve the job id from the req params
        // Match the job id to the database and retrieve the document
        // Update the document
        // Send the document to the frontend with update confirmation
    })
    .patch((req, res) => {
        // Retreieve the job id from the req params
        // Match the job id to the database and retrieve the document
        // Update the document
        // Send the document to the frontend with update confirmation
    })
    .delete((req, res) => {
        // Retreieve the job id from the req params
        // Match the job id to the database and retrieve the document
        // delete the document
        // redirect the user to the jobs index page
    });

export default router;