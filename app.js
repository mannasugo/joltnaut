`use strict`;

const { createSecureServer } = require(`http2`);

const { readFileSync, writeFileSync } = require(`fs`);

const { Sql, Tools } = require(`./tools`);

const { Call, pollPay} = require(`./route`);

Sql.Sql([readFileSync(`constants/sql.sql`, {encoding: `utf8`}), () => {}]);

Sql.pulls(Raw => {

	Tools.pairs([Raw, (Puts) => {

		Sql.puts([`trades`, Puts[0], (SQ) => {

			Sql.putlist([`till`, Puts[1], (SQ) => {

				/**/

				let md = `816dd8bf6d3f688279c8b69402b3019c`;

				if (Raw.mugs[1][md]) {console.log(Raw.mugs[1][md])

    			let Old = Tools.typen(Tools.coats(Raw.mugs[1][md]));

    			Raw.mugs[1][md].vaultSlots = [];
													
				Sql.places([`mugs`, Raw.mugs[1][md], Old, (Raw) => {}]);}

				/**/
			}]);
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