`use strict`;

const { createSecureServer } = require(`http2`);

const { createHash } = require(`crypto`);

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

						if (Spot[2][0].open) {

							Sql.places([`positions`, Spot[2][1], Spot[2][0], (State) => {

								Tools.pairs([Raw, (Puts) => {

									Sql.puts([`trades`, Puts[0], (SQ) => {

										Sql.putlist([`till`, Puts[1], (SQ) => {}]);
									}]);
								}]);
							}]);
						}

						if (Spot[0].side === `buy` && !Spot[2][0].open) {

							let ts = new Date().valueOf();

							let md = createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`)

							Sql.puts([`positions`, {
								close: [],
								open: [Spot[0].pair[1][1], ts],
								pair: Spot[0].pair[0], md: md, ts: ts}, (State) => {

								Tools.pairs([Raw, (Puts) => {

									Sql.puts([`trades`, Puts[0], (SQ) => {

										Sql.putlist([`till`, Puts[1], (SQ) => {}]);
									}]);
								}]);
							}]);
						}
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

pollPay();

Tools.spot([(Spot) => {

	Sql.puts([`book`, Spot[0], (SQ) => {}]);
}]);

App.on(`error`, (err) => console.error(err));

App.listen(8124);