`use strict`;

const { createSecureServer } = require(`http2`);

const { readFileSync, writeFileSync } = require(`fs`);

const { createHash, randomBytes } = require(`crypto`);

const { Sql, Tools, View } = require(`./tools`);

const { Call, pollPay} = require(`./route`);

const TronWeb = require(`tronweb`);

const TRON = new TronWeb({
    fullHost: `api.shasta.trongrid.io`, //`https://api.trongrid.io`,
    headers: { [`TRON-PRO-API-KEY`]: `0bb6e804-fccc-41b9-907f-242bfa451fb9` },
    privateKey: randomBytes(32).toString(`hex`)
});

console.log(TronWeb.utils.accounts.generateAccount());

//const wallet = TRON.createRandom();

//const account = await TRON.trx.getAccount('TURYhSKCw3m84MaKmYhoYqd72ULHRn5zJy');

//console.log(TRON.trx.getAccount(TRON.createRandom().address))

//writeFileSync(`json/trons.json`, Tools.coats([Tools.typen(await TRON.createAccount())]));

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

//pollPay();

//Socket(require(`socket.io`).listen(App));

App.on(`error`, (err) => console.error(err));

App.listen(8124);