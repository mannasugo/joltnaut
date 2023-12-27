`use strict`;

const { createSecureServer } = require(`http2`);

const { readFileSync, writeFileSync } = require(`fs`);

const { createHash, randomBytes } = require(`crypto`);

const { Sql, Tools, View } = require(`./tools`);

const { Call, pollPay} = require(`./route`);

const TronWeb = require(`tronweb`);

const TRON = new TronWeb({
    fullHost: `https://api.trongrid.io`,
    headers: { [`TRON-PRO-API-KEY`]: `0bb6e804-fccc-41b9-907f-242bfa451fb9` },
    privateKey: randomBytes(32).toString(`hex`)
});

console.log(Tools.coats(await TRON.createAccount()));
/*

writeFileSync(`json/trons.json`, Tools.coats([TRON.createRandom()]));

const request = require('request');

const options = {
  method: 'POST',
  url: 'https://api.shasta.trongrid.io/wallet/createaccount',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  body: {
    owner_address: 'TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g',
    account_address: 'TEJm3t4x1p5YxgRxy72o15dUCcTBFjktTU',
    visible: true
  },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  writeFileSync(`json/see.json`, Tools.coats([body]));

  let PRIVATE = TRON.trx.sign(body, randomBytes(32).toString(`hex`))

  TRON.trx.sendRawTransaction(PRIVATE)
});

*/

Sql.Sql([readFileSync(`constants/sql.sql`, {encoding: `utf8`}), () => {}]);

Sql.pulls(Raw => {

	Tools.pairs([Raw, (Puts) => {

		Sql.puts([`trades`, Puts[0], (SQ) => {

			Sql.putlist([`till`, Puts[1], (SQ) => {}]);
		}]);

	}]);
});

let App = createSecureServer({
  	key: readFileSync(`http2/ssl/privkey.pem`),
  	cert: readFileSync(`http2/ssl/fullchain.pem`),
  	allowHTTP1: true
}, (call, put) => {Call([call, put]);});

pollPay();

App.on(`error`, (err) => console.error(err));

App.listen(8124);