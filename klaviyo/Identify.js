const
  express = require('express'),
  router = express.Router(),
  Klaviyo = require('klaviyo-node');

router.route('/identify')
  .get((req, res) => {
    const client = new Klaviyo(req.query.token);
    client.identify(req.query.email, {
        '$first_name': req.query.first_name,
        '$last_name': req.query.last_name
      })
      .then(result => {
        if(result === 1){
          res.send('Your request done')
        } else {
          res.send('Your request not done')
        }
      })
      .catch(err => {
        console.error(err)
      })
  })

module.exports = router;