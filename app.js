`use strict`;

const { createSecureServer } = require(`http2`);

const { readFileSync, writeFileSync } = require(`fs`);

const { Sql, Tools } = require(`./tools`);

const { Call, pollPay} = require(`./route`);

Sql.Sql([readFileSync(`constants/sql.sql`, {encoding: `utf8`}), () => {}]);

Sql.pulls(Raw => {

	Tools.values([Raw, (SQ) => {

		Sql.putlist([`book`, SQ[0], (SQ) => {

			Tools.execute([Raw, (Spot) => {

				Sql.puts([`book`, Spot[0], (SQ) => {

					Sql.putlist([`autospot`, Spot[1], (SQ) => {

						Tools.pairs([Raw, (Puts) => {

							Sql.puts([`trades`, Puts[0], (SQ) => {

								Sql.putlist([`till`, Puts[1], (SQ) => {}]);
							}]);
						}]);
					}]);
				}]);
			}]);
		}]);	
	}]);
});

let App = createSecureServer({
  	key: readFileSync(`http2/ssl/privkey.pem`),
  	cert: readFileSync(`http2/ssl/fullchain.pem`),
  	allowHTTP1: true}, (call, put) => {Call([call, put]);});

//pollPay();

App.on(`error`, (err) => console.error(err));

App.listen(8124);