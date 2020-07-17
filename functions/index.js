const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const axios = require('axios')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.getHerbalProducts = functions.https.onRequest((request, response) => {
  console.log('fired in firebase')
  cors(request, response, () => {
    axios.get('https://sandbox.naturessunshine.com/us/api/getItems?excludeInactive=true')
      .then(res => {
        // console.log(res.data);
        return response.status(200).send(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  });
});