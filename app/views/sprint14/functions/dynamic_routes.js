var dynamic_routes = {
  urls: function(req, res) {
    var urls = {};
    var fraud_urls = {};


    // Details
    if (req.path === '/details') {
      if (req.body.name && req.body.address && req.body.age ||
          req.body.nino && req.body.name ||
          req.body.nino && req.body.address ||
          req.body.nino && req.body.age)
      {
        urls.next = '/sprint14/details-more';
      } else {
        urls.next = '/sprint14/exit';
      }
      urls.back = '/sprint14/start-page';
    }

    // Fraud Type
    if (req.path === '/fraud-type') {
      fraud_urls = req.body;

      if ( fraud_urls.employment === "true" ) {
        urls.next = 'employment-details';
      } else if ( fraud_urls.partner === "true" ) {
        urls.next = 'partner-details';
      } else if ( fraud_urls.disability === "true" ) {
        urls.next = 'disability';
      } else if ( fraud_urls.carers === "true" ) {
        urls.next = 'carers';
      } else if ( fraud_urls.abroad === "true" ) {
        urls.next = 'abroad';
      } else if ( fraud_urls.identity === "true" ) {
        urls.next = 'identity';
      } else if ( fraud_urls.income === "true" ) {
        urls.next = 'income';
      } else if ( fraud_urls.other === "true" ) {
        urls.next = 'other';
      }
    }

    // Employment Details
    if (req.path === '/employment-details') {
      fraud_urls = req.cookies.fraud_urls;

      if ( fraud_urls.partner === "true" ) {
        urls.next = 'partner-details';
      } else if ( fraud_urls.disability === "true" ) {
        urls.next = 'disability';
      } else if ( fraud_urls.carers === "true" ) {
        urls.next = 'carers';
      } else if ( fraud_urls.abroad === "true" ) {
        urls.next = 'abroad';
      } else if ( fraud_urls.identity === "true" ) {
        urls.next = 'identity';
      } else if ( fraud_urls.income === "true" ) {
        urls.next = 'income';
      } else if ( fraud_urls.other === "true" ) {
        urls.next = 'other';
      } else {
        urls.next = 'additional-information';
      }
    }

    // Partner Employment
    if (req.path === '/partner-employment') {
      fraud_urls = req.cookies.fraud_urls;

      if ( fraud_urls.disability === "true" ) {
        urls.next = 'disability';
      } else if ( fraud_urls.carers === "true" ) {
        urls.next = 'carers';
      } else if ( fraud_urls.abroad === "true" ) {
        urls.next = 'abroad';
      } else if ( fraud_urls.identity === "true" ) {
        urls.next = 'identity';
      } else if ( fraud_urls.income === "true" ) {
        urls.next = 'income';
      } else if ( fraud_urls.other === "true" ) {
        urls.next = 'other';
      } else {
        urls.next = 'additional-information';
      }
    }

    // Disability
    if (req.path === '/disability') {
      fraud_urls = req.cookies.fraud_urls;

      if ( fraud_urls.carers === "true" ) {
        urls.next = 'carers';
      } else if ( fraud_urls.abroad === "true" ) {
        urls.next = 'abroad';
      } else if ( fraud_urls.identity === "true" ) {
        urls.next = 'identity';
      } else if ( fraud_urls.income === "true" ) {
        urls.next = 'income';

      } else {
        urls.next = 'review';
      }
    }

    // Carers More
    if (req.path === '/carers-more') {
      fraud_urls = req.cookies.fraud_urls;

      if ( fraud_urls.abroad === "true" ) {
        urls.next = 'abroad';
      } else if ( fraud_urls.identity === "true" ) {
        urls.next = 'identity';
      } else if ( fraud_urls.income === "true" ) {
        urls.next = 'income';
      } else if ( fraud_urls.other === "true" ) {
        urls.next = 'other';
      } else {
        urls.next = 'additional-information';
      }
    }

    // Abroad
    if (req.path === '/abroad') {
      fraud_urls = req.cookies.fraud_urls;

      if ( fraud_urls.identity === "true" ) {
        urls.next = 'identity';
      } else if ( fraud_urls.income === "true" ) {
        urls.next = 'income';
      } else if ( fraud_urls.other === "true" ) {
        urls.next = 'other';
      } else {
        urls.next = 'additional-information';
      }
    }

    // Identity
    if (req.path === '/identity') {
      fraud_urls = req.cookies.fraud_urls;

      if ( fraud_urls.income === "true" ) {
        urls.next = 'income';
      } else if ( fraud_urls.other === "true" ) {
        urls.next = 'other';
      } else {
        urls.next = 'review';
      }
    }

    // Income More
    if (req.path === '/income-more') {
      fraud_urls = req.cookies.fraud_urls;

      if ( fraud_urls.other === "true" ) {
        urls.next = 'other';
      } else {
        urls.next = 'additional-information';
      }
    }

    // exit More
    if (req.path === '/exit') {
      fraud_urls = req.cookies.fraud_urls;

      if ( fraud_urls.other === "true" ) {
        urls.next = 'other';
      } else {
        urls.next = 'review-ub';
      }
    }

    return urls;
  },
};

module.exports = dynamic_routes;
