`use strict`;

const { createSecureServer } = require(`http2`);

const { readFileSync } = require(`fs`);

const { Sql, View } = require(`./tools`);

const { Call, pollPay, Socket } = require(`./route`);

Sql.Sql([readFileSync(`constants/sql.sql`, {encoding: `utf8`}), () => {}]);

let App = createSecureServer({
  	key: readFileSync(`http2/ssl/privkey.pem`),
  	cert: readFileSync(`http2/ssl/fullchain.pem`),
  	allowHTTP1: true
}, (call, put) => {

	Call([call, put]);

});

pollPay();

Socket(require(`socket.io`).listen(App));

App.on(`error`, (err) => console.error(err));

App.listen(8124);