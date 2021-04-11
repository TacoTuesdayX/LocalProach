var axios = require('axios');

const getFive = (term, loc) => {

  //URI is manipulated using inputed term and location.
  var uri = 'https://api.yelp.com/v3/businesses/search?term='+term+'&location='
            +loc+'&sort_by=review_count&open_now=true&attributes =hot_and_new';
  //log URI
  console.log(uri);

  //stage the request using private bearer !REMOVE TOKEN WHEN PUBLISHING TO GIT!
  //or rip my CC somebody bout to spam 50000 req/s
  var config = {
      method: 'get',
      url: uri,
      headers: {
        'Authorization': 'bearer 1vx9NL7UjCgR7T587ZuBiiMsetO7iYHqhtGOKx_0K183IRX'
        +'KLxPitikXd8vBxpVRf0EfU9HaPjGcFtU0ROC5azb2uTawwT-sa30dh_PMOlsu-eFu1Ng8c'
        +'ByTHPhxYHYx'
    }
  };

  //axios() makes call based off of config, get req
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

//test case!
console.log(getFive('sushi','92122'));
