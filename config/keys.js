module.exports = {
  mongoURI:
    "mongodb+srv://dev:XPPhQurcRgDKX20h@cluster0-pb1wa.mongodb.net/WhatFlix?retryWrites=true&w=majority",
  secretOrKey: "WhatFlixKey"
};


if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}