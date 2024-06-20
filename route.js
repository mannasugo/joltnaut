`use strict`;

const { readdir, readFile, readFileSync, createReadStream, mkdir, stat, writeFile, writeFileSync } = require(`fs`);

const { createHash, randomBytes } = require(`crypto`);

const get = require(`request`);

const HTTPS = require(`https`);

const TronWeb = require(`tronweb`);

const { Sql, Tools } = require(`./tools`);

const APK_VER = 202307201417;

const hold = new Date(`1996-01-20`).valueOf();

class Route {

	Call (Arg) {

		let url = (`./${Arg[0].url}`).replace(`//`, `/`).replace(/%(...)/g, (match, hex) => {

			return String.fromCharCode(parseInt(hex, 16));
		});

		let State = url.split(`/`);

		let PullContent = File => {

			readFile(File[0], {encoding: `utf8`}, (A, B) => {
			
				return File[1](B);
			});
		}

		if (Arg[0].method === `GET`)  {

			if (State[1] === `favicon.ico`) {

				let File = createReadStream(`ssl/given/svg/joltnaut_202304191915.svg`);

				Arg[1].writeHead(200, {[`Content-Type`]: `image/svg+xml`});

				File.on(`data`, Arg[1].write.bind(Arg[1]));

				File.on(`close`, () => Arg[1].end());
			}

			else {

				PullContent([`constants/app.html`, (Raw) => {

					let Text = Raw;

					PullContent([`constants/app.css`, (Raw) => {

						Text = Text.replace(/`css`/, Raw);

						Arg[1].writeHead(200, {[`Content-Type`]: `text/html`});

						Arg[1].end(Text);

					}]);
				}]);
			}
		}

		else if (Arg[0].method == `POST`) {

			let blob = new Buffer.alloc(+Arg[0].headers[`content-length`]);

			let Pull = ``;

			let allocate = 0;

			Arg[0].on(`data`, (Data) => {

				Data.copy(blob, allocate);

			 	allocate += Data.length;

				Pull += Data;

			}).on(`end`, () => {

				let Pulls;

				if (Pull[0] === `{`) Pulls = JSON.parse(Pull);

				if (State[1] === `json`) {

					Arg[1].setHeader(`Content-Type`, `application/json`);

					if (State[2] === `360`) {

						Sql.pulls(Raw => {

							if (Pulls.pull === `app`) {

								let REFS = [[], []];

								Raw.promos[0].forEach(MD => {

									if (MD.issuant === Pulls.terminal) {

										REFS[0].push(MD);

										if (MD.mug.length === 1) {

											Raw.mugs[1][MD.mug[0]][`ref`] = MD.promo

											REFS[1].push(Raw.mugs[1][MD.mug[0]]);
										}
									}
								});

								/**

								let Old = [Tools.typen(Tools.coats(Raw.promos[1][`0937b26d0357d5bb7a2585cd11d590a2`]))];

								Raw.promos[1][`0937b26d0357d5bb7a2585cd11d590a2`][`mug`] = [`878006f49acb52827dd47bc47ff97d46`];

								Old.push(Raw.promos[1][`0937b26d0357d5bb7a2585cd11d590a2`]);

								Sql.places([`promos`, Old[1], Old[0], (State) => {

								**/

									Arg[1].end(Tools.coats({ 
										call: Raw.terminal[1][Pulls.terminal][`call`], clients: REFS[1], refs: REFS[0]}));
									//}]);
							}

							if (Pulls.pull === `pollRef`) {

								if (Raw.terminal[1][Pulls.terminal]) {

									let ts = new Date().valueOf();

									let md = createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`);

									Sql.puts([`promos`, {
										issuant: Pulls.terminal,
										md: md,
										mug: [],
										promo: (`${md.substr(0, 4)}${md.substr((md.length - 1) - 4, md.length - 1)}`).toUpperCase(),
										ts: ts}, (Raw) => {

											Arg[1].end(Tools.coats({terminal: Pulls.terminal}));
									}]);
								}
							}

							if (Pulls.pull === `terminalSlot`) {

								let Client = [
								//[`max@joltnaut.com`, 202406181157, 254790858214, 50, [`pm`, `portfolio manager`]]
								//[`mannasugo@joltnaut.com`, 32658507, 254704174162, 50, [`pm`, `portfolio manager`]]
								];

								let Slot = [[], [], []];

								Raw.terminal[0].forEach(MD => {

									if (MD.mail === Pulls.slot[0] 
										&& MD.lock === createHash(`md5`).update(`${Pulls.slot[1]}`, `utf8`).digest(`hex`)) {

										Slot[0] = [MD.md];
									}

									if (MD.mail === Pulls.slot[0]) Slot[1].push(MD.mail)
								});

								if (Slot[0].length > 0) {

									Arg[1].end(Tools.coats({terminal: Slot[0][0]}));
								}

								Client.forEach(Mail => {

									if (Mail[0] === Pulls.slot[0]) Slot[2] = Mail
								});

								if (Slot[0].length === 0 && Slot[1].length === 0 && Slot[2].length > 0) {

									let ts = new Date().valueOf();

									Sql.puts([`terminal`, {
										assign: Slot[2][4][0],
										call: Slot[2][2],
										lock: createHash(`md5`).update(`${Slot[2][1]}`, `utf8`).digest(`hex`),
										mail: Slot[2][0],
										md: createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`),
										ts: ts}, (Raw) => {

											Arg[1].end(Tools.coats({terminal: createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`)}));
									}]);
								}
							}
						});
					}

					if (State[2] === `auto`) {

						Sql.pulls(Raw => {

							if (Pulls.pull === `app`) {

								let Holding = [
								`aapl`, `amzn`, `aud`, `btc`, `cad`, `chf`, `eth`, `eur`, `gbp`, `hood`, `jpy`, `kes`, `ltc`, `msft`, `nflx`, `nok`, 
								`nvda`, `nzd`, `para`, `pypl`, `sek`, `spot`, `tsla`, `usdt`, `wbd`, `xmr`, `xrp`, `zar`];

								let USD = {usd: 1};

								Holding.forEach(holding => {

									let All = [];

									Raw.book[0].forEach(Book => {

										if (Book.pair[0][0] === holding) All.push([Book.pair[1][1], Book.ts_z]);
									});

									All = All.sort((A, B) => {return B[1] - A[1]});

									USD[holding] = (All[0])? All[0][0]: 0
								});

								let Spot = Tools.holding([Raw, Pulls.client, `auto`]);

								Arg[1].end(Tools.coats({ 
									call: Raw.clients[1][Pulls.client][`call`],
									spot: Spot,
									USD: USD, USD24: Tools.USD24(Raw)}));
							}

							if (Pulls.pull === `clientSlot`) {

								let Client = [
								//[`mannasugo@gmail.com`, 32658507, 254704174162, 50], 
								//[`gordonouma@joltnaut.com`, 13384247, 254722897207, 50]
								//[`oyugijerry@joltnaut.com`, 37722239, 254795455168, .25]
								];

								let Slot = [[], [], []];

								Raw.clients[0].forEach(MD => {

									if (MD.mail === Pulls.slot[0] 
										&& MD.lock === createHash(`md5`).update(`${Pulls.slot[1]}`, `utf8`).digest(`hex`)) {

										Slot[0] = [MD.md];
									}

									if (MD.mail === Pulls.slot[0]) Slot[1].push(MD.mail)
								});

								if (Slot[0].length > 0) {

									Arg[1].end(Tools.coats({client: Slot[0][0]}));
								}

								Client.forEach(Mail => {

									if (Mail[0] === Pulls.slot[0]) Slot[2] = Mail
								});

								if (Slot[0].length === 0 && Slot[1].length === 0 && Slot[2].length > 0) {

									let ts = new Date().valueOf();

									Sql.puts([`clients`, {
										call: Slot[2][2],
										lock: createHash(`md5`).update(`${Slot[2][1]}`, `utf8`).digest(`hex`),
										mail: Slot[2][0],
										md: createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`),
										ts: ts}, (Raw) => {

          									Sql.puts([`autospot`, {
												md: createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`), 
												symbol: `usd`,
												till: {
													[hold]: 0,
													[createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`)]: [0, Slot[2][3]]},
												ts: ts,
												tx: false,
												type: `deposit`}, (Raw) => {

													Arg[1].end(Tools.coats({client: createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`)}));}]);
									}]);
								}
							}

							if (Pulls.pull === `liquidate`) {

								if (Raw.clients[1][Pulls.client]) {

									let Hold = Tools.holding([Raw, Pulls.client, `auto`]);

									let Holding = [
										`aapl`, `amzn`, `aud`, `btc`, `cad`, `chf`, `eth`, `eur`, `gbp`, `hood`, `jpy`, `kes`, `ltc`, `msft`, `nflx`, `nok`, 
									`nvda`, `nzd`, `para`, `pypl`, `sek`, `spot`, `tsla`, `usdt`, `wbd`, `xmr`, `xrp`, `zar`];

									let USD = {usd: 1};

									Holding.forEach(holding => {

										let All = [];

										Raw.book[0].forEach(Book => {

											if (Book.pair[0][0] === holding) All.push([Book.pair[1][1], Book.ts_z]);
										});

										All = All.sort((A, B) => {return B[1] - A[1]});

										USD[holding] = (All[0])? All[0][0]: 0
									});

									if (Hold[`usd`] > Pulls.float*USD[`kes`] && Pulls.float <= 1/USD[`kes`]) {

										let ts = new Date().valueOf();

										let md = createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`);

										Sql.puts([`payout`,  {
          									complete: false,
          									float: Pulls.float*USD[`kes`],
          									id: Raw.clients[1][Pulls.client][`call`],
          									local: Pulls.float,
          									md: md,
          									mug: Pulls.client,
          									secs: ts,
          									ts: ts,
          									tx: {},
          									type: `auto`}, (Q) => {

          										Sql.puts([`autospot`, {
													md: md, 
													symbol: `usd`,
													till: {
														[hold]: 0,
														[Pulls.client]: [0, -(Pulls.float*USD[`kes`])]},
													ts: Bill.ts,
													tx: false,
													type: `withdrawal`}, (Pay) => {Arg[1].end(Tools.coats({mug: Pulls.mug}));}]);
										}]);
									}
								}	
							}

							if (Pulls.pull === `pollB4`) {

								if (Raw.clients[1][Pulls.client]) {

									let Slot = Pulls.slot;

									if (Slot.float > 0) {

										let ts = new Date().valueOf();

										let md = createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`);

										let Get = HTTPS.request({
        									hostname: `payment.intasend.com`,
        									port: 443,
        									path: `/api/v1/payment/mpesa-stk-push/`,
        									method: `POST`,
       										headers: {
       											Authorization: `Bearer ISSecretKey_live_c3481e0a-b1c5-4529-b761-bcee74225b6c`,
       											[`Content-Type`]: `application/json`,
       											INTASEND_PUBLIC_API_KEY: `ISPubKey_live_be13c375-b61d-4995-8c50-4268c604c335`}}, Got => {

												let got = ``;

												Got.on(`data`, (buffer) => {got += buffer;});
        										
        										Got.on('end', () => {

          											if (got) {

          												let TX = Tools.typen(got);

          												if (TX.id) {

          													Sql.puts([`invoice`, {
          														complete: false,
          														float: null,
          														id: `254` + Slot.call, 
          														invoice: TX.invoice.invoice_id, 
          														local: Slot.float,
          														md: md,
          														mug: Pulls.client,
          														ts: ts,
          														type: `autospot`}, (Bill) => {

																Arg[1].end(Tools.coats({client: Pulls.client}));
															}]);
														}
          											}
        										});
										});

										Get.write(Tools.coats({
											amount: parseFloat(Slot.float),
											api_ref: md,
											email: Raw.clients[1][Pulls.client].mail,
											phone_number: `254` + Slot.call}));

										Get.end();
									}
								}
							}
						});
					}

					if (State[2] === `gradle`) {

						let Put = {};

						Put.APK_VER = APK_VER.toString();

						Sql.pulls(Raw => {

							if (APK_VER === parseInt(Pulls.APK_VER)) {

								if (Pulls.pull === `inlet`) {

									let Wallets = {inlet: []};

									Raw.mugs[0].forEach(Mug => {

										if (Mug.inlet && Mug.inlet.USDT) {

											if (Mug.inlet.USDT.indexOf(Pulls.param) > -1) Wallets.inlet = [Mug.md];
										}
									});

                					let Old = Tools.typen(Tools.coats(Raw.mugs[1][Pulls.mug]));

									if (Wallets.inlet.length === 0) {

										if (!Raw.mugs[1][Pulls.mug].inlet) Raw.mugs[1][Pulls.mug][`inlet`] = {};

										if (!Raw.mugs[1][Pulls.mug].inlet.USDT) Raw.mugs[1][Pulls.mug].inlet[`USDT`] = [];

										Raw.mugs[1][Pulls.mug].inlet.USDT.push(Pulls.param); 

										Sql.places([`mugs`, Raw.mugs[1][Pulls.mug], Old, (Raw) => {

											Arg[1].end(Tools.coats({
												APK_VER: APK_VER.toString(),
												inlet: Pulls.param,
												mug: Pulls.mug
											}));
										}]);
									}
								}

								if (Pulls.pull === `pollMug`) {

									Raw.mugs[0].forEach(Mug => {

										if (Mug.mail === Pulls.param[1]) {

											Put[`bugs`] = [];

											Put.bugs.push(`mail`);
										}
									});

									if (!Put.bugs || Put.bugs.length === 0) {

										let secs = new Date().valueOf();

										Sql.puts([`mugs`, {
											lock: createHash(`md5`).update(Pulls.param[2], `utf8`).digest(`hex`),
											mail: Pulls.param[1],
											md: createHash(`md5`).update(`${secs}`, `utf8`).digest(`hex`),
											names: Tools.safe(Pulls.param[0]),
											secs: secs
										}, (Raw) => {

											Put[`md`] = createHash(`md5`).update(`${secs}`, `utf8`).digest(`hex`);

											Arg[1].end(Tools.coats(Put));
										}]);
									}
								}

								if (Pulls.pull === `pullMug`) {

									Raw.mugs[0].forEach(Mug => {

										if (Mug.mail === Pulls.param[0] 
											&& Mug.lock === createHash(`md5`).update(`${Pulls.param[1]}`, `utf8`).digest(`hex`)) {

											Put[`inlet`] = (Mug.inlet && Mug.inlet.USDT && Mug.inlet.USDT.length > 0)? Mug.inlet.USDT[0]: 0;
											Put[`mail`] = Mug.mail;
											Put[`md`] = Mug.md;
										}
									});

									Arg[1].end(Tools.coats(Put));
								}

								if (Pulls.pull === `splash`) Arg[1].end(Tools.coats(Put));

								if (Pulls.pull === `walletOutlet`) {

									Tools.collateralise([Raw, TX => {

										let Hold = Tools.hold([Raw, Pulls.mug]).sort((A, B) => {return B.secs - A.secs}), Outlet = [];

										Tools.hold([Raw, Pulls.mug]).forEach(MD => {

											if (MD.till[Pulls.mug] && MD.tx.length > 10) {

												let Months = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];

												let Day = new Date(MD.secs);

												MD[`ts_long`] = `${Day.getDate()} ${Months[Day.getMonth()]}, ${(Day.getHours() > 9)? Day.getHours(): `0` + Day.getHours()}:${(Day.getMinutes() > 9)? Day.getMinutes(): `0` + Day.getMinutes()}`;

												MD[`value`] = `${-(MD.till[hold].toFixed(2))}`;

												Outlet.push(MD)
											}
										});

										Put[`mug`] = Pulls.mug;
										Put[`outlet`] = Outlet.sort((A, B) => {return B.secs - A.secs});
										Put[`vault`] = `${(Hold[0].hold[0]).toFixed(2)}`;

                						let Old = Tools.typen(Tools.coats(Raw.mugs[1][Pulls.mug]));

                						Raw.mugs[1][Pulls.mug][`last_pin`] = [Pulls.geo_axis, new Date().valueOf()];

										Sql.places([`mugs`, Raw.mugs[1][Pulls.mug], Old, (Raw) => {

											if (TX.length > 0) {

												Sql.putlist([`till`, TX, (SQ) => {

													Arg[1].end(Tools.coats(Put));
												}]);
											}

											else Arg[1].end(Tools.coats(Put));
										}]);
									}]);
								}							
							}
						});
					}

					else if (State[2] === `ms`) {

						Sql.pulls(Raw => {

							if (Pulls.pull === `app`) {

								let TX = [[]], Mug = [Raw.mugs[0]];

								Raw.payout[0].forEach(Pay => {

									Pay.mail = Raw.mugs[1][Pay.mug].mail;

									Pay.name = Raw.mugs[1][Pay.mug].vaultSlots[0].mug;

									if (Pay.complete === false) TX[0].push(Pay);
								});

								Arg[1].end(Tools.coats({mugs: Mug[0], pays: TX[0]}));
							}

							if (Pulls.pull === `incoming`) {

								let Allows = [`0362b3ed20e7c006b05a732c0cb8e1a9`];

								if (Pulls.mug/*Raw.mugs[1][Pulls.mug] /*&& Allows.indexOf(Pulls.mug) > -1*/) {

									let TX = [];

									Raw.b4[0].forEach(B4 => {

										if (B4.complete === false) TX.push(B4);
									});

									Arg[1].end(Tools.coats({incoming: TX}));
								}
							}

							if (Pulls.pull === `pollB4`) {	

								if (Raw.b4[1][Pulls.md]) {

									if (typeof Pulls.float !== `number` || Pulls.float <= 0) return;

									let Bill = Raw.b4[1][Pulls.md];

									Sql.puts([`spot`, {
										md: Bill.md,
										symbol: Bill.symbol,
										till: {
											[hold]: 0,
											[Bill.mug]: [0, Pulls.float]},
										ts: Bill.ts,
										tx: false,
										type: `deposit`}, (Q) => {

                							let Old = Tools.typen(Tools.coats(Bill));

                							Bill.complete = true;

											Sql.places([`b4`, Bill, Old, (Q) => {Arg[1].end(Tools.coats({}));}]);
										}]);
								}
							}

							if (Pulls.pull === `pollPay`) {

          						if (Raw.payout[1][Pulls.md]) {

                					let Old = Tools.typen(Tools.coats(Raw.payout[1][Pulls.md]));

                					Raw.payout[1][Pulls.md].complete = true;

									Sql.places([`payout`, Raw.payout[1][Pulls.md], Old, (Q) => {

										Arg[1].end(Tools.coats({}));}]);
								}
							}

							if (Pulls.pull === `portal`) {

								let Allows = [
									[`0362b3ed20e7c006b05a732c0cb8e1a9`/*,`816dd8bf6d3f688279c8b69402b3019c`*/],
									["0dc00226105bbc48f57f7eb1a68e4ada", 
									`0ef4c14382a4fa952f93d25832692996`,
									"29b32367542aa82db47ff7528e0c650c",
									"3e7dde07ed4f9a694b242c5c46957d4c", 
									"5db3abb92b1692edabfc4b7de0e47459",
									`5fdacb67a06dc680e1b5952192ada4e5`, 
									`6fad552306a31273d06edfc91f67a87e`,
									`714a0f1cbbcff0b1c898b4ce64d5423c`, 
									"78ab8f16156200222538c90ae3b43fbe",
									"8bcb530c73d684f8a2e62dad3cfae428", 
									`816dd8bf6d3f688279c8b69402b3019c`,
									`850cc0422e6710ee319bd7b14098a007`, 
									`98b302e0107b2f8c205db83978525c95`]];

								if (Raw.mugs[1][Pulls.mug] && Allows[0].indexOf(Pulls.mug) > -1) {

									let Feats = [];

									Raw.mugs[0].forEach(Mug => {

										if (Allows[1].indexOf(Mug.md) > -1) {

											let Hold = Tools.hold([Raw, Mug.md]).sort((A, B) => {return B.secs - A.secs});

											let Feat = {
												account: `${Mug.names[0]} ${Mug.names[1]}`,
												cumulate: 0,
												hold: (Hold[0])? (Hold[0].hold[1]).toFixed(2): 0,
												outflow: 0
											};

											Raw.payout[0].forEach(TX => {

												if (TX.mug === Mug.md) Feat.outflow += parseFloat(TX.float);
											});

											Raw.till[0].forEach(TX => {

												if (TX.flag && TX.flag.trade && TX.till[Mug.md]) Feat.cumulate += parseFloat(TX.till[Mug.md][1]);
											});

											Feats.push(Feat);

										}
									});

									Arg[1].end(Tools.coats({
										feats: Feats, mug: [Raw.mugs[1][Pulls.mug].vaultSlots[0].mug, Raw.mugs[1][Pulls.mug][`mail`]]}));
								}
							}
						});
					}

					else if (State[2] === `web`) {

						Sql.pulls(Raw => {

							if (Pulls.pull === `allow`) {

								if (Raw.mugs[1][Pulls.mug] && Raw.peers[1][Pulls.param] && Raw.peers[1][Pulls.param].peers.indexOf(Pulls.mug) > -1 
									&& Raw.peers[1][Pulls.param].via[0] === true && Raw.peers[1][Pulls.param].via[1] === true) {

									let Couple = Raw.peers[1][Pulls.param], peer;

                					(Couple.peers[0] === Pulls.mug)? peer = Couple.peers[1]: peer = Couple.peers[0];

									let Hold = Tools.hold([Raw, Pulls.mug]).sort((A, B) => {return B.secs - A.secs});

									Arg[1].end(Tools.coats({
										allow: {
											hold: (Hold[0].hold[1]).toFixed(2),
											id: Raw.mugs[1][peer].secs,
											mail: Raw.mugs[1][peer].mail,
											md: Pulls.param,
											peer: peer}, mug: Pulls.mug}));		 
								}
							}

							if (Pulls.pull === `app`) {

								let Pairs = [];

								Raw.trades[0].forEach(Pair => {

									let P2 = {io: [Pair.pair[1][0], Pair.pair[1][1]], mugs: 0, pair: Pair.pair[0], pnl: [0, 0]};

									P2.pnl[0] += (((Pair.pair[1][1] - Pair.pair[1][0])/Pair.pair[1][0]))*100;

									Raw.till[0].forEach(TX => {

										if (TX.md === Pair.md) {

											P2.mugs += 1;

											for (let mug in TX.till) {

												if (mug.length !== 12) { P2.pnl[1] += parseFloat(TX.till[mug][1]); }
											}
										}
									});

									let era = Pair.ts_z - Pair.ts_a;

									if (era >= 3600000) P2.runs = `${(era/3600000).toFixed()}H ${(era - 3600000)/60000}MIN`;

									if (era < 3600000) P2.runs = `${era/60000}MIN`;

									P2.secs = Pair.ts_z;

									P2.ts = [new Date(Pair.ts_a), new Date(Pair.ts_z)];

									Pairs.push(P2)
								});

								if (Pulls.mug != false) {

									let Hold = Tools.hold([Raw, Pulls.mug]).sort((A, B) => {return B.secs - A.secs});

									let TX = [[], []];

									Raw.vows[0].forEach(Vow => {

										if (Vow.via[0] === true && Vow.via[1] === true 
											&& ((Vow.peers[0] === Pulls.mug && Vow.type === `outVault`) 
												|| (Vow.peers[1] === Pulls.mug && Vow.type === `inVault`))) {

											TX[0].push(Vow);
										}
									});

									Raw.invoice[0].forEach(Bill => {

										if (Bill.complete === true && Bill.mug === Pulls.mug) {

											TX[0].push({
												local: Bill.local/Bill.float,
												float: Bill.float,
												ts: Bill.ts,
												type: `inVault`
											});
										}
									});

									Raw.payout[0].forEach(Pay => {

										if (Pay.mug === Pulls.mug) {

											TX[0].push({
												complete: Pay.complete,
												local: Pay.local/Pay.float,
												float: Pay.float,
												ts: Pay.ts,
												type: `outVault`
											});
										}
									});

									let HoldXY = [[], 0];

									Raw.till[0].sort((A, B) => {return A.ts - B.ts}).forEach(MD => {

										if (MD.till[Pulls.mug] && MD.flag && MD.flag.w2w) {

											let peer;

											for (let vault in MD.till) {

												if (vault !== `${hold}` || vault !== Pulls.mug) peer = vault;
											}

											TX[1].push({
												float: (MD.till[Pulls.mug][1] < 0)? -(MD.till[Pulls.mug][1]): MD.till[Pulls.mug][1],
												gas: (MD.till[Pulls.mug][1] < 0)? MD.till[hold]: 0, 
												mail: Raw.mugs[1][peer].mail,
												ts: MD.ts,
												type: (MD.till[Pulls.mug][1] < 0)? `out`: `in`});
										}

										if (MD.till[Pulls.mug] && MD.ts < (new Date().valueOf() - 360000*24*354)) {

											HoldXY[1] += MD.till[Pulls.mug][1];
										}
									});

									let Day = new Date();

									let ts = new Date(`${Day.getFullYear()}-${Day.getMonth() + 1}-${Day.getDate()}`).valueOf();

									let PNL = [0, 0, 0];

									Raw.till[0].sort((A, B) => {return A.ts - B.ts}).forEach(TX => {

										if (TX.flag && TX.flag.trade && TX.till[Pulls.mug] && TX.ts > ts) {

											PNL[0] += (TX.till[Pulls.mug][1]*100)/TX.principal;

											PNL[1] += TX.till[Pulls.mug][1];								
										}

										if (TX.till[Pulls.mug] && TX.ts > (new Date().valueOf() - 360000*24*354)) {

											HoldXY[1] += TX.till[Pulls.mug][1];

											HoldXY[0].push({hold: HoldXY[1], ts: TX.ts});
										}
									});

									Raw.trades[0].forEach(Pair => {

										if (Pair.ts_a > ts) PNL[2] += (((Pair.pair[1][1] - Pair.pair[1][0])/Pair.pair[1][0]))*100							
										
									});

									let Flag = [];

									if (Raw.mugs[1][Pulls.mug].vaultSlots) {

										Raw.mugs[1][Pulls.mug].vaultSlots.forEach(Slot => {

											if (Slot.carrier === `safaricom` && Slot.id[0] !== `2`) Flag.push(Slot);
												
										});
									}

									if (Flag.length > 0) {

                						let Old = Tools.typen(Tools.coats(Raw.mugs[1][Pulls.mug]));

                						Raw.mugs[1][Pulls.mug].vaultSlots = [];
													
										Sql.places([`mugs`, Raw.mugs[1][Pulls.mug], Old, (Raw) => {

											Arg[1].end(Tools.coats({
												debit: (Hold[0])? (Hold[0].hold[1]).toFixed(2): 0,
												holdXY: HoldXY[0],
												pnl: PNL,
												till: Raw.till[0].length,
												ts: Raw.mugs[1][Pulls.mug][`secs`],
												tx: TX,
												vault: (Hold[0])? (Hold[0].hold[0]).toFixed(2): 0}));
										}]);
									}

									else {

										Arg[1].end(Tools.coats({
											debit: (Hold[0])? (Hold[0].hold[1]).toFixed(2): 0,
											holdXY: HoldXY[0],
											pairs: Pairs,
											pnl: PNL,
											till: Raw.till[0].length,
											ts: Raw.mugs[1][Pulls.mug][`secs`],
											tx: TX,
											vault: (Hold[0])? (Hold[0].hold[0]).toFixed(2): 0}));
									}
								}

								else {

									let Day = new Date();

									let ts = new Date(`${Day.getFullYear()}-${Day.getMonth() + 1}-${Day.getDate()}`).valueOf();

									let PNL = [0, 0, 0];

									Raw.trades[0].forEach(Pair => {

										PNL[0] += (((Pair.pair[1][1] - Pair.pair[1][0])/Pair.pair[1][0]))*100;

										if (Pair.ts_a > ts) PNL[2] += (((Pair.pair[1][1] - Pair.pair[1][0])/Pair.pair[1][0]))*100
									});

									Arg[1].end(Tools.coats({

										debit: 0,
										pairs: Pairs,
										pnl: PNL,
										till: Raw.till[0].length}));
								}
							}

							if (Pulls.pull === `c2s`) {

								let Vaults = [];

								Raw.mugs[0].forEach(Mug => {

									let Hold = Tools.hold([Raw, Mug.md]).sort((A, B) => {return B.secs - A.secs});

									if (Hold[0] && Hold[0].hold[0] > 15 && Mug.vaultSlots && Mug.vaultSlots.length > 0) {

										Mug[`vault`] = Hold[0].hold[0];

										Vaults.push(Mug);
									}
								});

								Arg[1].end(Tools.coats({
									mug: Pulls.mug,
									outlets: Vaults,
									vaultSlots: (Raw.mugs[1][Pulls.mug].vaultSlots)? Raw.mugs[1][Pulls.mug].vaultSlots: []}));
							}

							if (Pulls.pull === `cellSlots`) {

                				let Old = Tools.typen(Tools.coats(Raw.mugs[1][Pulls.mug]));

								if (!Raw.mugs[1][Pulls.mug].vaultSlots) Raw.mugs[1][Pulls.mug][`vaultSlots`] = [];

								if (Pulls.param[1].length !== 12) return;

								Raw.mugs[1][Pulls.mug].vaultSlots.push({
									carrier: `safaricom`,
									id: Pulls.param[1],
									mug: Pulls.param[0],
									ts: new Date().valueOf(),
									type: `mobile pay`});

								Sql.places([`mugs`, Raw.mugs[1][Pulls.mug], Old, (Raw) => {

									Arg[1].end(Tools.coats({mug: Pulls.mug}));
								}]);
							}

							if (Pulls.pull === `createVow`) {

								if (Raw.mugs[1][Pulls.mug]) {

									let Wallet = {
										btc: [
										`1BDEtH9AufT4pZiJuaVuQ4G5RvXwKPYfwa`,
										//`bc1qfppprm37g0e9m602a0x84ap6qcqc2cf3742hd0`,
										`bc1q2y8fnnhp5dsp37ndhfum2wjhx2p7tq06lre3s2`, 
										`34miqr44ju9RVdAFa2pHjkQEtP9V8MQZ4M`, 
										`387LYybUtUs6a6Nkgfsf2vpeeEhfqxReLo`], 
										usdt: [
										`TH9BuLCBLmCTfvtgBWB14Y4TxCjPdYx4WK`, 
										`THGN8p5Hx4GNCLJM7Mtq8kFG7T9qwqX5K3`, 
										//`TU5jQ1o9HiP2LJMZbLFqgjGFjjpxLnDEtn`, 
										`TWxNVYYtFWuZygwW346mqAZKfpmW6nU4mG`]};

									let B64 = [[], []];

									Raw.b4[0].forEach(B4 => {

										if (B4.symbol === Pulls.param.symbol && B4.ts_z > new Date().valueOf()) {

											B64[0].push(B4.b64);
										}
									});

									Wallet[Pulls.param.symbol].forEach(b64 => {

										if (B64[0].indexOf(b64) === -1) B64[1].push(b64);
									});

									if (B64[1].length > 0) {

										let Param = Pulls.param;

										let ts = new Date().valueOf();

										let md = createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`);

          								Sql.puts([`b4`, {
          									b64: B64[1][0],
          									complete: false,
          									float: Param.float,
          									md: md,
          									mug: Pulls.mug,
          									symbol: Param.symbol,
          									ts: ts,
          									ts_z: ts + (60000*15)}, (SQ) => {

												Arg[1].end(Tools.coats({float: Param.float, md: md, mug: Pulls.mug, ts_z: ts + (60000*15)}));
										}]);
									}
								}
							}

							if (Pulls.pull === `earn`) {

								let PAIRS = [];

								Raw.positions[0].forEach(MD => {

									if (MD.close.length === 0) PAIRS.push(MD)
								});

								let USD = {usd: 1};

								PAIRS.forEach(Position => {

									let All = [];

									Raw.book[0].forEach(Book => {

										if (Book.pair[0][0] === Position.pair[0]) All.push([Book.pair[1][1], Book.ts_z]);
									});

									All = All.sort((A, B) => {return B[1] - A[1]});

									USD[Position.pair[0]] = (All[0])? All[0][0]: 0

									Position[`cost`] = USD[Position.pair[0]]
								});

								//if (Raw.mugs[1][Pulls.mug]) {


								//}

								//else {

									Arg[1].end(Tools.coats({mug: Pulls.mug, states: PAIRS}));
								//}
							}

							if (Pulls.pull === `idVault`) {

								if (Raw.mugs[1][Pulls.mug].inlet && Raw.mugs[1][Pulls.mug].inlet.USDT 
									&& Raw.mugs[1][Pulls.mug].inlet.USDT.length > 0) {
									
									Arg[1].end(Tools.coats({
										idVault: (Raw.mugs[1][Pulls.mug].idVault)? true: false, 
										inlet: Raw.mugs[1][Pulls.mug].inlet.USDT[0], 
										mug: Pulls.mug,
										vaultSlots: (Raw.mugs[1][Pulls.mug].vaultSlots)? Raw.mugs[1][Pulls.mug].vaultSlots: false}));
								}

								else Arg[1].end(Tools.coats({inlet: false, mug: Pulls.mug}));
							} 

							if (Pulls.pull === `inlet`) {

								let Wallets = {inlet: []};

								Raw.mugs[0].forEach(Mug => {

									if (Mug.inlet && Mug.inlet.USDT) if (Mug.inlet.USDT.indexOf(Pulls.param) > -1) Wallets.inlet = [Mug.md];
								});

                				let Old = Tools.typen(Tools.coats(Raw.mugs[1][Pulls.mug]));

								if (Wallets.inlet.length === 0) {

									if (!Raw.mugs[1][Pulls.mug].inlet) Raw.mugs[1][Pulls.mug][`inlet`] = {};

									if (!Raw.mugs[1][Pulls.mug].inlet.USDT) Raw.mugs[1][Pulls.mug].inlet[`USDT`] = [];

									Raw.mugs[1][Pulls.mug].inlet.USDT.push(Pulls.param); 

									Sql.places([`mugs`, Raw.mugs[1][Pulls.mug], Old, (Raw) => {

										Arg[1].end(Tools.coats({
											inlet: Pulls.param,
											mug: Pulls.mug
										}));
									}]);
								}
							}

							if (Pulls.pull === `inVaultPollVow`) {

								if (Raw.mugs[1][Pulls.mug] && Raw.mugs[1][Pulls.md] && Pulls.mug !== Pulls.md 
									&& Raw.mugs[1][Pulls.mug].vaultSlots && Raw.mugs[1][Pulls.mug].vaultSlots.length > 0) {

									let Open = [];

									Raw.vows[0].forEach(Vow => {

										if ((new Date().valueOf() - Vow.ts) < 60000*15  
											&& (Vow.peers.indexOf(Pulls.mug) > -1 || Vow.peers.indexOf(Pulls.md) > -1)) {

											Open.push(Vow);
										}
									});

									let Hold = Tools.hold([Raw, Pulls.md]).sort((A, B) => {return B.secs - A.secs});

									if (Hold[0].hold[0] > parseFloat(Pulls.param[0]) && Open.length === 0) {

										let ts = new Date().valueOf();

										let md = createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`);

										Sql.puts([`vows`, {
											float: Pulls.param[0],
											local: Pulls.param[1],
											md: md, 
											peers: [Pulls.md, Pulls.mug], // [from, to]
											ts: ts,
											type: `inVault`,
											via: [false, false]}, (Raw) => {Arg[1].end(Tools.coats({mug: Pulls.mug, vow: md}));}]);
									}
								}
							}

							if (Pulls.pull === `letContact`) {

								if (Raw.mugs[1][Pulls.mug] && Raw.peers[1][Pulls.param] && Raw.peers[1][Pulls.param].peers[1] === Pulls.mug) {

                					let Old = Tools.typen(Tools.coats(Raw.peers[1][Pulls.param]));

                					Raw.peers[1][Pulls.param].via[1] = true;

									Sql.places([`peers`, Raw.peers[1][Pulls.param], Old, (Raw) => {

										Arg[1].end(Tools.coats({mug: Pulls.mug}));
									}]);		 
								}
							}

							if (Pulls.pull === `mug`) {

								if (Raw.mugs[1][Pulls.mug]) {
									
									Arg[1].end(Tools.coats({
										mug: Pulls.mug,
										vaultSlots: (Raw.mugs[1][Pulls.mug].vaultSlots)? Raw.mugs[1][Pulls.mug].vaultSlots: []}));
								}
							}

							if (Pulls.pull === `mugin`) {

								let Mugin = [];

								Raw.mugs[0].forEach(Mug => {

									if (Mug.mail === Pulls.param[0] 
										&& Mug.lock === createHash(`md5`).update(`${Pulls.param[1]}`, `utf8`).digest(`hex`)) {

										Mugin = [Mug.md];
									}
								});

								if (Mugin.length > 0) {

									Arg[1].end(Tools.coats({
										mug: Mugin[0]}));
								}
							}

							if (Pulls.pull === `mugup`) {

								let Flaw = [];

								Raw.mugs[0].forEach(Mug => {

									if (Mug.mail === Pulls.param[0]) Flaw.push(`mail`);
								});

								if (Flaw.length === 0) {

									let secs = new Date().valueOf();

									Sql.puts([`mugs`, {
										lock: createHash(`md5`).update(Pulls.param[2], `utf8`).digest(`hex`),
										mail: Pulls.param[0],
										md: createHash(`md5`).update(`${secs}`, `utf8`).digest(`hex`),
										names: [Tools.safe(Pulls.param[1]), Tools.safe(Pulls.param[3])],
										secs: secs
									}, (SQ) => {

										if (Pulls.ref && Pulls.ref.length === 9) {

											let ref;

											Raw.promos[0].forEach(MD => {

												if (Pulls.ref === MD.promo && MD.mug.length === 0) ref = MD.md;
											});

											if (ref && ref.length > 9) {

                								let Old = Tools.typen(Tools.coats(Raw.promos[1][ref]));

                								Raw.promos[1][ref].mug[0] = createHash(`md5`).update(`${secs}`, `utf8`).digest(`hex`);

												Sql.places([`promos`, Raw.promos[1][ref], Old, (Raw) => {

													Arg[1].end(Tools.coats({mug: createHash(`md5`).update(`${secs}`, `utf8`).digest(`hex`)}));
												}]);	
											}
										}

										else Arg[1].end(Tools.coats({mug: createHash(`md5`).update(`${secs}`, `utf8`).digest(`hex`)}));
									}]);
								}
							}

							if (Pulls.pull === `outVault`) {

								let hold = 0;

								let Swap = [
									[`euro`, `eur`, `eu`, 0.93], [`kenya shilling`, `kes`, `ke`, 128.98], [`us dollar`, `usd`, `us`, 1.01]]

								if (Pulls.mug !== false) {

									let Hold = Tools.hold([Raw, Pulls.mug]).sort((A, B) => {return B.secs - A.secs});

									hold = (Hold.length > 0)? Hold[0].hold[1]: 0;
								}

								Arg[1].end(Tools.coats({hold: hold, swap: Swap}));
							}

							if (Pulls.pull === `outVaultPollVow`) {

								if (Raw.mugs[1][Pulls.mug] && Raw.mugs[1][Pulls.md] && Pulls.mug !== Pulls.md 
									&& Raw.mugs[1][Pulls.mug].vaultSlots && Raw.mugs[1][Pulls.mug].vaultSlots.length > 0) {

									let Open = [];

									Raw.vows[0].forEach(Vow => {

										if ((new Date().valueOf() - Vow.ts) < 60000*15  
											&& (Vow.peers.indexOf(Pulls.mug) > -1 || Vow.peers.indexOf(Pulls.md) > -1)) {

											Open.push(Vow);
										}
									});

									let Hold = Tools.hold([Raw, Pulls.md]).sort((A, B) => {return B.secs - A.secs});

									let Bals = Tools.hold([Raw, Pulls.mug]).sort((A, B) => {return B.secs - A.secs});

									if (Bals[0].hold[1] > (Tools.gas([Pulls.param[0]]) + Pulls.param[0]) 
										&& Hold[0].hold[0] > parseFloat(Pulls.param[0]) && Open.length === 0) {

										let ts = new Date().valueOf();

										let md = createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`);

										Sql.puts([`vows`, {
											float: Pulls.param[0],
											local: Pulls.param[1],
											md: md, 
											peers: [Pulls.mug, Pulls.md], // [from, to]
											ts: ts,
											type: `outVault`,
											via: [false, false]}, (Raw) => {Arg[1].end(Tools.coats({mug: Pulls.mug, vow: md}));}]);
									}
								}
							}

							if (Pulls.pull === `p2p`) {

								let Vaults = [];

								Raw.mugs[0].forEach(Mug => {

									let Hold = Tools.hold([Raw, Mug.md]).sort((A, B) => {return B.secs - A.secs});

									if (Hold[0] && Hold[0].hold[0] > 15 && Mug.vaultSlots && Mug.vaultSlots.length > 0) {

										Mug[`vault`] = Hold[0].hold[0];

										Vaults.push(Mug);
									}

								});

								Arg[1].end(Tools.coats({
									mug: Pulls.mug,
									outlets: Vaults,
									vaultSlots: (Raw.mugs[1][Pulls.mug].vaultSlots)? Raw.mugs[1][Pulls.mug].vaultSlots: []}));
							}

							if (Pulls.pull === `peers`) {

								if (Raw.mugs[1][Pulls.mug]) {

									let Peers = [];

									Raw.peers[0].forEach(MD => {

										MD.mail = [Raw.mugs[1][MD.peers[0]].mail, Raw.mugs[1][MD.peers[1]].mail]

										if (MD.peers.indexOf(Pulls.mug) > -1) Peers.push(MD);
									});

									Arg[1].end(Tools.coats({mug: Pulls.mug, peers: Peers}));
								}
							}

							if (Pulls.pull === `pnl`) {

								if (Raw.mugs[1][Pulls.mug]) {

									let Pairs = [], pnl = 0;

									Raw.till[0].forEach(TX => {

										if (TX.flag && TX.flag.trade && TX.till[Pulls.mug]) {

											let Pair = Raw.trades[1][TX.md];

											let P2 = {amount: TX.principal, io: [Pair.pair[1][0], Pair.pair[1][1]], pair: Pair.pair[0], pnl: [0, 0, 0]};

											P2.pnl[0] += (((Pair.pair[1][1] - Pair.pair[1][0])/Pair.pair[1][0]))*100;

											P2.pnl[1] = parseFloat(TX.till[Pulls.mug][1]);

											Raw.till[0].forEach(TX2 => {

												if (TX2.till[Pulls.mug] && TX2.ts <= Pair.ts_z) P2.pnl[2] += parseFloat(TX2.till[Pulls.mug][1]);
											});

											let era = Pair.ts_z - Pair.ts_a;

											if (era >= 3600000) P2.runs = `${(era/3600000).toFixed()}H ${(era - 3600000)/60000}MIN`;

											if (era < 3600000) P2.runs = `${era/60000}MIN`;

											P2.secs = Pair.ts_z;

											P2.ts = [Pair.ts_a, Pair.ts_z];

											Pairs.push(P2)

											pnl += parseFloat(TX.till[Pulls.mug][1]);
										}
									});

									Arg[1].end(Tools.coats({mug: Pulls.mug, pairs: Pairs, pnl: pnl}));
								}
							}

							if (Pulls.pull === `pollBook`) {

								if (Raw.mugs[1][Pulls.mug]) {

									let Assets = [`btc`, `eth`, `ltc`, `usdt`, `aud`, `cad`, `eur`, `jpy`, `kes`, `nok`, `nzd`, `zar`, `sek`, `chf`, `gbp`];

									let USD = {usd: 1};

									Assets.forEach(holding => {

										let All = [];

										Raw.book[0].forEach(Book => {

											if (Book.pair[0][0] === holding) All.push([Book.pair[1][1], Book.ts_z]);
										});

										All = All.sort((A, B) => {return B[1] - A[1]});

										USD[holding] = All[0][0];
									});

									let ts = new Date().valueOf();

									let md = createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`);

									let Row = [{
										md: md, 
										symbol: Pulls.pair[0],
										till: {
											[hold]: 0,
											[Pulls.mug]: [0, -Pulls.float]},
										ts: ts,
										tx: false,
										type: `trade`}, {
										md: md, 
										symbol: Pulls.pair[1],
										till: {
											[hold]: 0,
											[Pulls.mug]: [0, Pulls.float*USD[Pulls.pair[0]]]},
										ts: ts,
										tx: false,
										type: `trade`}];

									let float = Pulls.float;

									if (Pulls.side === `buy`) {

										Pulls.float = Pulls.float*USD[Pulls.pair[0]];

										Row = [{
											md: md, 
											symbol: Pulls.pair[0],
											till: {
												[hold]: 0,
												[Pulls.mug]: [0, (Pulls.float/USD[Pulls.pair[0]])]},
											ts: ts,
											tx: false,
											type: `trade`}, {
											md: md, 
											symbol: Pulls.pair[1],
											till: {
												[hold]: 0,
												[Pulls.mug]: [0, -(Pulls.float)]},
											ts: ts,
											tx: false,
											type: `trade`}];
									}

									let Holding = Tools.holding([Raw, Pulls.mug]);

									if (Holding[Pulls.symbol] > Pulls.float) {

										Sql.putlist([`spot`, Row, (Q) => {

          									Sql.puts([`book`, {
          										ilk: `market`,
          										md: md,
          										mug: Pulls.mug,
          										pair: [Pulls.pair, [float, USD[Pulls.pair[0]]]], 
          										side: Pulls.side,
          										ts: ts,
          										ts_z: ts}, (Raw) => {Arg[1].end(Tools.coats({mug: Pulls.mug}));}]);
											}]);
									}
								}
							}

							if (Pulls.pull === `pools`) {

								let Pairs = [];

								Raw.trades[0].forEach(Pair => {

									let P2 = {io: [Pair.pair[1][0], Pair.pair[1][1]], mugs: 0, pair: Pair.pair[0], pnl: [0, 0]};

									P2.pnl[0] += (((Pair.pair[1][1] - Pair.pair[1][0])/Pair.pair[1][0]))*100;

									Raw.till[0].forEach(TX => {

										if (TX.md === Pair.md) {

											P2.mugs += 1;

											for (let mug in TX.till) {

												if (mug.length !== 12) { P2.pnl[1] += parseFloat(TX.till[mug][1]); }
											}
										}
									});

									let era = Pair.ts_z - Pair.ts_a;

									if (era >= 3600000) P2.runs = `${(era/3600000).toFixed()}H ${(era - 3600000)/60000}MIN`;

									if (era < 3600000) P2.runs = `${era/60000}MIN`;

									P2.secs = Pair.ts_z;

									P2.ts = [new Date(Pair.ts_a), new Date(Pair.ts_z)];

									Pairs.push(P2)
								});

								let Holding = [`btc`, `eth`, `ltc`, `usdt`, `xmr`, `xrp`, `aud`, `cad`, `eur`, `jpy`, `kes`, `nok`, `nzd`, `zar`, 
								`sek`, `chf`, `gbp`, `aapl`, `amzn`, `hood`, `msft`, `nflx`, `nvda`, `para`, `pypl`, `spot`, `tsla`, `wbd`];

								let USD = {usd: 1};

								Holding.forEach(holding => {

									let All = [];

									Raw.book[0].forEach(Book => {

										if (Book.pair[0][0] === holding) All.push([Book.pair[1][1], Book.ts_z]);
									});

									All = All.sort((A, B) => {return B[1] - A[1]});

									USD[holding] = (All[0])? All[0][0]: 0
								});

								if (Pulls.mug != false) {

									let Hold = Tools.hold([Raw, Pulls.mug]).sort((A, B) => {return B.secs - A.secs});

									let TX = [[], []];

									Raw.vows[0].forEach(Vow => {

										if (Vow.via[0] === true && Vow.via[1] === true 
											&& ((Vow.peers[0] === Pulls.mug && Vow.type === `outVault`) 
												|| (Vow.peers[1] === Pulls.mug && Vow.type === `inVault`))) {

											TX[0].push(Vow);
										}
									});

									Raw.invoice[0].forEach(Bill => {

										if (Bill.complete === true && Bill.mug === Pulls.mug) {

											TX[0].push({
												local: Bill.local/Bill.float,
												float: Bill.float,
												ts: Bill.ts,
												type: `inVault`
											});
										}
									});

									Raw.payout[0].forEach(Pay => {

										if (Pay.mug === Pulls.mug) {

											TX[0].push({
												complete: Pay.complete,
												local: Pay.local/Pay.float,
												float: Pay.float,
												ts: Pay.ts,
												type: `outVault`
											});
										}
									});

									let HoldXY = [[], 0];

									Raw.till[0].sort((A, B) => {return A.ts - B.ts}).forEach(MD => {

										if (MD.till[Pulls.mug] && MD.flag && MD.flag.w2w) {

											let peer;

											for (let vault in MD.till) {

												if (vault !== `${hold}` || vault !== Pulls.mug) peer = vault;
											}

											TX[1].push({
												float: (MD.till[Pulls.mug][1] < 0)? -(MD.till[Pulls.mug][1]): MD.till[Pulls.mug][1],
												gas: (MD.till[Pulls.mug][1] < 0)? MD.till[hold]: 0, 
												mail: Raw.mugs[1][peer].mail,
												ts: MD.ts,
												type: (MD.till[Pulls.mug][1] < 0)? `out`: `in`});
										}

										if (MD.till[Pulls.mug] && MD.ts < (new Date().valueOf() - 360000*24*354)) {

											HoldXY[1] += MD.till[Pulls.mug][1];
										}
									});

									let Day = new Date();

									let ts = new Date(`${Day.getFullYear()}-${Day.getMonth() + 1}-${Day.getDate()}`).valueOf();

									let PNL = [0, 0, 0];

									Raw.till[0].sort((A, B) => {return A.ts - B.ts}).forEach(TX => {

										if (TX.flag && TX.flag.trade && TX.till[Pulls.mug] && TX.ts > ts) {

											//PNL[0] += (TX.till[Pulls.mug][1]*100)/TX.principal;

											PNL[1] += TX.till[Pulls.mug][1];								
										}

										if (TX.till[Pulls.mug] && TX.ts > (new Date().valueOf() - 360000*24*354)) {

											HoldXY[1] += TX.till[Pulls.mug][1];

											HoldXY[0].push({hold: HoldXY[1], ts: TX.ts});
										}
									});

									let Run = [];

									Raw.trades[0].forEach(Pair => {

										PNL[0] += (((Pair.pair[1][1] - Pair.pair[1][0])/Pair.pair[1][0]))*100;

										if (Pair.ts_a > ts) PNL[2] += (((Pair.pair[1][1] - Pair.pair[1][0])/Pair.pair[1][0]))*100

										if (parseInt(Pair.ts_z) > 0) Run.push(Pair);							
										
									});

									Run = Run.sort((A, B) => {return B.ts_z - A.ts_z});

									let era = new Date().valueOf() - Run[Run.length - 1].ts_z;

									let Pool = [], pnl = 0;

									Raw.till[0].forEach(TX => {

										if (TX.flag && TX.flag.trade && TX.till[Pulls.mug]) {

											let Pair = Raw.trades[1][TX.md];

											let P2 = {amount: TX.principal, io: [Pair.pair[1][0], Pair.pair[1][1]], pair: Pair.pair[0], pnl: [0, 0, 0]};

											P2.pnl[0] += (((Pair.pair[1][1] - Pair.pair[1][0])/Pair.pair[1][0]))*100;

											P2.pnl[1] = parseFloat(TX.till[Pulls.mug][1]);

											Raw.till[0].forEach(TX2 => {

												if (TX2.till[Pulls.mug] && TX2.ts <= Pair.ts_z) P2.pnl[2] += parseFloat(TX2.till[Pulls.mug][1]);
											});

											let era = Pair.ts_z - Pair.ts_a;

											if (era >= 3600000) P2.runs = `${(era/3600000).toFixed()}H ${(era - 3600000)/60000}MIN`;

											if (era < 3600000) P2.runs = `${era/60000}MIN`;

											P2.secs = Pair.ts_z;

											P2.ts = [Pair.ts_a, Pair.ts_z];

											Pool.push(P2)

											pnl += parseFloat(TX.till[Pulls.mug][1]);
										}
									});

									let Spot = Tools.holding([Raw, Pulls.mug]);

									Arg[1].end(Tools.coats({ 
										cumulative: pnl,
										debit: (Hold[0])? (Hold[0].hold[1]).toFixed(2): 0,
										holdXY: HoldXY[0],
										pairs: Pairs,
										pnl: PNL, pool: Pool, runs: era/86400000, spot: Spot,
										till: Raw.till[0].length,
										ts: Raw.mugs[1][Pulls.mug][`secs`],
										tx: TX, USD24: Tools.USD24(Raw),
										vault: (Hold[0])? (Hold[0].hold[0]).toFixed(2): 0,
										volume: Tools.volume(Raw),
										xUSD: USD}));
								}

								let Day = new Date();

								let ts = new Date(`${Day.getFullYear()}-${Day.getMonth() + 1}-${Day.getDate()}`).valueOf();

								let PNL = [0, 0, 0];

								let Run = [];

								Raw.trades[0].forEach(Pair => {

									if (parseInt(Pair.ts_z) > 0) Run.push(Pair);

									PNL[0] += (((Pair.pair[1][1] - Pair.pair[1][0])/Pair.pair[1][0]))*100;

									if (Pair.ts_a > ts) PNL[2] += (((Pair.pair[1][1] - Pair.pair[1][0])/Pair.pair[1][0]))*100
								});

								Run = Run.sort((A, B) => {return B.ts_z - A.ts_z});

								let era = /*Run[0].ts_z*/new Date().valueOf() - Run[Run.length - 1].ts_z;

								Arg[1].end(Tools.coats({
									cumulative: 0,
									pairs: Pairs,
									pnl: PNL, runs: era/86400000,
									till: Raw.till[0].length, debit: 0, 
									USD24: Tools.USD24(Raw),
									volume: Tools.volume(Raw),
									xUSD: USD}));
							}

							if (Pulls.pull === `putC2s`) {

								let C2s;

								if (Raw.vows[1][Pulls.c2s.md]) C2s = Raw.vows[1][Pulls.c2s.md];

								if (C2s && C2s.peers[0] === Pulls.mug && C2s.via[0] === false && C2s.via[1] === true 
									&& (new Date().valueOf() - C2s.ts) < 60000*15) {

									let Hold = Tools.hold([Raw, C2s.peers[0]]).sort((A, B) => {return B.secs - A.secs});

									if (Hold[0].hold[1] > (C2s.float + Tools.gas([C2s.float]))) {

                						let Old = Tools.typen(Tools.coats(C2s));

                						C2s.via[0] = true;

										Sql.places([`vows`, C2s, Old, (Raw) => {

											let ts = new Date().valueOf();

											let md = createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`);

											Sql.puts([`till`, {
												md: md,
												outlet_wallet: false,
												secs: ts,
												till: {
													[hold]: Tools.gas([C2s.float])*.55,
													[C2s.peers[0]]: [0, -(C2s.float + Tools.gas([C2s.float]))], 
													[C2s.peers[1]]: [C2s.float, Tools.gas([C2s.float])*.45]},
												ts: ts,
												tx: false,
												vow: C2s.md}, (Q) => {

													Arg[1].end(Tools.coats({mug: Pulls.mug}));

											}]);
										}]);
									}
								}
							}

							if (Pulls.pull === `putClientVow`) {

								let Vow;

								if (Raw.vows[1][Pulls.vow.md]) Vow = Raw.vows[1][Pulls.vow.md];

								if (Vow && Vow.peers[1] === Pulls.mug && Vow.via[1] === false && (new Date().valueOf() - Vow.ts) < 60000*15) {

									let Hold = Tools.hold([Raw, Vow.peers[0]]).sort((A, B) => {return B.secs - A.secs});

									if (Hold[0].hold[0] > Vow.float) {

                						let Old = Tools.typen(Tools.coats(Vow));

                						Vow.via[1] = true;

										Sql.places([`vows`, Vow, Old, (Raw) => {

											Arg[1].end(Tools.coats({mug: Pulls.mug}));
										}]);
									}
								}
							}

							if (Pulls.pull === `putContact`) {

								let peer = createHash(`md5`).update(`${Pulls.param}`, `utf8`).digest(`hex`);

								if (Raw.mugs[1][Pulls.mug] && Raw.mugs[1][peer] && peer !== Pulls.mug) {

									let Couple = [];

									Raw.peers[0].forEach(MD => {

										if (MD.peers.indexOf(Pulls.mug) > -1 && MD.peers.indexOf(peer) > -1) Couple.push(MD);
									});

									if (Couple.length === 0) {

										let ts = new Date().valueOf();

										let md = createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`);

										Sql.puts([`peers`, {
											md: md, 
											peers: [Pulls.mug, peer], // [from, to]
											ts: ts,
											via: [true, false]}, (Raw) => {Arg[1].end(Tools.coats({mug: Pulls.mug}));}]);
									}
								}
							}

							if (Pulls.pull === `putS2c`) {

								let S2c;

								if (Raw.vows[1][Pulls.s2c.md]) S2c = Raw.vows[1][Pulls.s2c.md];

								if (S2c && S2c.peers[0] === Pulls.mug && S2c.via[0] === false && S2c.via[1] === true 
									&& (new Date().valueOf() - S2c.ts) < 60000*15) {

									let Hold = Tools.hold([Raw, S2c.peers[0]]).sort((A, B) => {return B.secs - A.secs});

									if (Hold[0].hold[0] > S2c.float) {

                						let Old = Tools.typen(Tools.coats(S2c));

                						S2c.via[0] = true;

										Sql.places([`vows`, S2c, Old, (Raw) => {

											let ts = new Date().valueOf();

											let md = createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`);

											Sql.puts([`till`, {
												md: md,
												outlet_wallet: false,
												secs: ts,
												till: {
													[S2c.peers[0]]: [-(S2c.float), 0], 
													[S2c.peers[1]]: [0, S2c.float]},
												ts: ts,
												tx: false,
												vow: S2c.md}, (Q) => {

													Arg[1].end(Tools.coats({mug: Pulls.mug}));

											}]);
										}]);
									}
								}
							}

							if (Pulls.pull === `putVaultVow`) {

								let Vow;

								if (Raw.vows[1][Pulls.vow.md]) Vow = Raw.vows[1][Pulls.vow.md];

								if (Vow && Vow.peers[1] === Pulls.mug && Vow.via[1] === false && (new Date().valueOf() - Vow.ts) < 60000*15) {

									let Hold = Tools.hold([Raw, Vow.peers[0]]).sort((A, B) => {return B.secs - A.secs});

									if (Hold[0].hold[1] > (Vow.float + Tools.gas([Vow.float]))) {

                						let Old = Tools.typen(Tools.coats(Vow));

                						Vow.via[1] = true;

										Sql.places([`vows`, Vow, Old, (Raw) => {

											Arg[1].end(Tools.coats({mug: Pulls.mug}));
										}]);
									}
								}
							}

							if (Pulls.pull === `s2c`) {

								if (Raw.vows[1][Pulls.vow] && Raw.vows[1][Pulls.vow].peers[0] === Pulls.mug
									&& Raw.vows[1][Pulls.vow].type === `inVault`) {

									let Vow = Raw.vows[1][Pulls.vow];

									Vow.vaultSlots = (Raw.mugs[1][Vow.peers[1]].vaultSlots)? Raw.mugs[1][Vow.peers[1]].vaultSlots: []

									Arg[1].end(Tools.coats({
										mug: Pulls.mug,
										s2c: Vow}));
								}

								if (Raw.vows[1][Pulls.vow] && Raw.vows[1][Pulls.vow].peers[1] === Pulls.mug
									&& Raw.vows[1][Pulls.vow].type === `outVault`) {

									let Vow = Raw.vows[1][Pulls.vow];

									Vow.vaultSlots = (Raw.mugs[1][Vow.peers[0]].vaultSlots)? Raw.mugs[1][Vow.peers[0]].vaultSlots: []

									Arg[1].end(Tools.coats({
										mug: Pulls.mug,
										s2c: Vow}));
								}			
							}

							if (Pulls.pull === `STKPay`) {

								if (Raw.mugs[1][Pulls.mug]) {

									let Param = Pulls.param;

									if (Param.float >= .75) {

										let ts = new Date().valueOf();

										let md = createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`);

										let Get = HTTPS.request({
        									hostname: `payment.intasend.com`,
        									port: 443,
        									path: `/api/v1/payment/mpesa-stk-push/`,
        									method: `POST`,
       										headers: {
       											Authorization: `Bearer ISSecretKey_live_c3481e0a-b1c5-4529-b761-bcee74225b6c`,
       											[`Content-Type`]: `application/json`,
       											INTASEND_PUBLIC_API_KEY: `ISPubKey_live_be13c375-b61d-4995-8c50-4268c604c335`}}, Got => {

												let got = ``;

												Got.on(`data`, (buffer) => {got += buffer;});
        										
        										Got.on('end', () => {

          											if (got) {

          												let TX = Tools.typen(got);

          												if (TX.id) {

          													Sql.puts([`invoice`, {
          														complete: false,
          														float: Param.float,
          														id: TX.id, 
          														invoice: TX.invoice.invoice_id, 
          														local: Param.float*130.07,
          														md: md,
          														mug: Pulls.mug,
          														secs: ts,
          														ts: ts,
          														type: `stk`}, (Bill) => {

																Arg[1].end(Tools.coats({mug: Pulls.mug}));
															}]);
														}
          											}
        										});
										});

										Get.write(Tools.coats({
											amount: parseFloat((Param.float*130.07).toFixed(2)),
											api_ref: md,
											email: Raw.mugs[1][Pulls.mug].mail,
											phone_number: Param.id}));

										Get.end();
									}
								}
							}

							if (Pulls.pull === `trade`) {

								let Pairs = [`BTC_USD`, `ETH_USD`, `LTC_USD`, `USDT_USD`, `XMR_USD`, `XRP_USD`];

								if (Pairs.indexOf(Pulls.pair) > -1) {

									let Duo = Pulls.pair.toLowerCase().split(`_`);

									let Book = [];

									Raw.book[0].sort((A, B) => {return B.ts_z - A.ts_z}).forEach(Value => {

										if (Value.pair[0][0] === Duo[0] && Value.pair[0][1] === Duo[1]) Book.push(Value);
									});

									let Holding = [`btc`, `eth`, `ltc`, `usdt`, `xmr`, `xrp`, `aud`, `cad`, `eur`, `jpy`, `kes`, `nok`, `nzd`, `zar`, `sek`, `chf`, `gbp`];

									let USD = {usd: 1};

									Holding.forEach(holding => {

										let All = [];

										Raw.book[0].forEach(Book => {

											if (Book.pair[0][0] === holding) All.push([Book.pair[1][1], Book.ts_z]);
										});

										All = All.sort((A, B) => {return B[1] - A[1]});

										USD[holding] = All[0][0];
									});

									Arg[1].end(Tools.coats({
										debit: 0,
										pair: [Pulls.pair.split(`_`)[0], Pulls.pair.split(`_`)[1]],
										spot: (Raw.mugs[1][Pulls.mug])? Tools.holding([Raw, Pulls.mug]): {},
										value: Book[0].pair[1][1], xUSD: USD}));
								}
							}

							if (Pulls.pull === `txCoin`) {

								if (Raw.mugs[1][Pulls.mug] && Raw.b4[1][Pulls.tx] && Raw.b4[1][Pulls.tx].mug === Pulls.mug) {

									let B4 = Raw.b4[1][Pulls.tx];

									Arg[1].end(Tools.coats({
										b64: B4.b64, float: B4.float, md: B4.md, mug: Pulls.mug, symbol: B4.symbol, ts_z: B4.ts_z}));
								}
							}

							if (Pulls.pull === `vaultOut`) {

								let Allows = [
									`0ef4c14382a4fa952f93d25832692996`, 
									`0362b3ed20e7c006b05a732c0cb8e1a9`,
									//`29b32367542aa82db47ff7528e0c650c`, 
									`5fdacb67a06dc680e1b5952192ada4e5`,
									`6fad552306a31273d06edfc91f67a87e`,  
									`78ab8f16156200222538c90ae3b43fbe`,
									//`816dd8bf6d3f688279c8b69402b3019c`, 
									`98b302e0107b2f8c205db83978525c95`,
									`b4ed397e9df0f928f75bdc279b926f34`];

								let open = new Date().getUTCHours();

								/**/

								if (Raw.mugs[1][Pulls.mug] && Allows.indexOf(Pulls.mug) > -1 && open >= 9 && open < 16) {

									if (Pulls.param.type === `stk`) {

										let Hold = Tools.hold([Raw, Pulls.mug]).sort((A, B) => {return B.secs - A.secs});

										if (Hold[0].hold[1] > Pulls.param.float && Pulls.param.local <= 9000) {

											let ts = new Date().valueOf();

											let md = createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`);

											Sql.puts([`payout`,  {
          										complete: false,
          										float: Pulls.param.float,
          										id: Pulls.param.id,
          										local: Pulls.param.float*128.98,
          										md: md,
          										mug: Pulls.mug,
          										secs: ts,
          										ts: ts,
          										tx: {},
          										type: `stk`}, (Q) => {

          										Sql.puts([`till`,{
													flag: {payout: md},
													md: md,
													outlet_wallet: false,
													secs: ts,
													till: {
														[hold]: 0,
														[Pulls.mug]: [0, -(Pulls.param.float)]},
														ts: ts,
													tx: false,
													vow: false}, (Pay) => {Arg[1].end(Tools.coats({mug: Pulls.mug}));}]);
											}]);
										}
									}
								}

								/**/
							}

							if (Pulls.pull === `vaultSlot`) {

								let Allows = [
									`0ef4c14382a4fa952f93d25832692996`, 
									`0362b3ed20e7c006b05a732c0cb8e1a9`,
									//`29b32367542aa82db47ff7528e0c650c`,
									`5fdacb67a06dc680e1b5952192ada4e5`,
									`6fad552306a31273d06edfc91f67a87e`, 
									`78ab8f16156200222538c90ae3b43fbe`,
									//`816dd8bf6d3f688279c8b69402b3019c`, 
									`98b302e0107b2f8c205db83978525c95`,
									`b4ed397e9df0f928f75bdc279b926f34`];

								let open = new Date().getUTCHours();

								if (Raw.mugs[1][Pulls.mug]) {

									if (Pulls.flag === `stk`) {

										let vaultSlot = {};

										if (Raw.mugs[1][Pulls.mug].vaultSlots) {

											Raw.mugs[1][Pulls.mug].vaultSlots.forEach(Slot => {

												if (Slot.carrier && Slot.carrier === `safaricom`) {

													let Hold = Tools.hold([Raw, Pulls.mug]).sort((A, B) => {return B.secs - A.secs});

													vaultSlot = {
														apex: 1000,
														hold: (Hold.length > 0)? Hold[0].hold[1]: 0,
														id: Slot.id,
														mug: Slot.mug};
												}
											});
										}

										Arg[1].end(Tools.coats({ 
											allows: (Allows.indexOf(Pulls.mug) > -1)? Pulls.mug: false,
											mug: Pulls.mug,
											open: open,
											vaultSlot: vaultSlot}));
									}

									if (Pulls.flag === `tron20` && Pulls.way === `in`) {

										if (Raw.mugs[1][Pulls.mug].tron20) {

											let Hold = Tools.hold([Raw, Pulls.mug]).sort((A, B) => {return B.secs - A.secs});

											Arg[1].end(Tools.coats({
												hold: (Hold.length > 0)? Hold[0].hold[1]: 0,
												mug: Pulls.mug,
												open: open,
												id: Raw.mugs[1][Pulls.mug].tron20.base58}));
										}

										if (!Raw.mugs[1][Pulls.mug].tron20) {

											let TRON = new TronWeb({
    											fullHost: `https://api.trongrid.io`,
    											headers: { [`TRON-PRO-API-KEY`]: `0bb6e804-fccc-41b9-907f-242bfa451fb9` },
    											privateKey: randomBytes(32).toString(`hex`)
											});

											async function f() {

    											let Vault = await TRON.createAccount();

												let ts = new Date().valueOf();

												let md = createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`);

												Vault.md = md;

												Vault.mug = Pulls.mug;

												Vault.ts = ts;

												Sql.puts([`tron20`, Vault, (SQL) => {

                									let Old = Tools.typen(Tools.coats(Raw.mugs[1][Pulls.mug]));

                									Raw.mugs[1][Pulls.mug].tron20 = Vault.address;

													Sql.places([`mugs`, Raw.mugs[1][Pulls.mug], Old, (SQL) => {

														Arg[1].end(Tools.coats({
															mug: Pulls.mug,
															open: open,
															id: Vault.address.base58}));
													}]);
												}]);	
											}

											f();
										}
									}

									if (Pulls.flag === `tron20` && Pulls.way === `out`) {

										if (Raw.mugs[1][Pulls.mug]) {

											let Hold = Tools.hold([Raw, Pulls.mug]).sort((A, B) => {return B.secs - A.secs});

											Arg[1].end(Tools.coats({
												mug: Pulls.mug,
												open: open,
												hold: (Hold.length > 0)? Hold[0].hold[1]: 0}));
										}
									}
								}
							}

							if (Pulls.pull === `via`) {

								if (Raw.mugs[1][Pulls.mug]) {

									Arg[1].end(Tools.coats({
										mug: Pulls.mug}));
								}
							}

							if (Pulls.pull === `vow`) {

								if (Raw.vows[1][Pulls.vow] && Raw.vows[1][Pulls.vow].peers[1] === Pulls.mug 
									&& Raw.vows[1][Pulls.vow].type === `inVault`) {

									let Vow = Raw.vows[1][Pulls.vow];

									Vow.vaultSlots = (Raw.mugs[1][Vow.peers[0]].vaultSlots)? Raw.mugs[1][Vow.peers[0]].vaultSlots: []

									Arg[1].end(Tools.coats({
										mug: Pulls.mug,
										vow: Vow}));
								}

								if (Raw.vows[1][Pulls.vow] && Raw.vows[1][Pulls.vow].peers[0] === Pulls.mug 
									&& Raw.vows[1][Pulls.vow].type === `outVault`) {

									let Vow = Raw.vows[1][Pulls.vow];

									Vow.vaultSlots = (Raw.mugs[1][Vow.peers[1]].vaultSlots)? Raw.mugs[1][Vow.peers[1]].vaultSlots: []

									Arg[1].end(Tools.coats({
										mug: Pulls.mug,
										vow: Vow}));
								}
							}

							if (Pulls.pull === `w2w`) { 

								if (Raw.mugs[1][Pulls.mug] && Raw.peers[1][Pulls.param[0].md] 
									&& Raw.peers[1][Pulls.param[0].md].peers.indexOf(Pulls.mug) > -1
									&& Raw.peers[1][Pulls.param[0].md].peers.indexOf(Pulls.param[0].peer) > -1 
									&& Raw.peers[1][Pulls.param[0].md].via[0] === true && Raw.peers[1][Pulls.param[0].md].via[1] === true) {

									let Hold = Tools.hold([Raw, Pulls.mug]).sort((A, B) => {return B.secs - A.secs});

									if (Hold[0].hold[1] > (Pulls.param[1] + Tools.gas([Pulls.param[1]])*.75)) {

										let ts = new Date().valueOf();

										let md = createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`);

										Sql.puts([`till`, {
											flag: {w2w: md},
											md: md,
											outlet_wallet: false,
											secs: ts,
											till: {
												[hold]: Tools.gas([Pulls.param[1]])*.75,
												[Pulls.mug]: [0, -(Pulls.param[1] + Tools.gas([Pulls.param[1]])*.75)], 
												[Pulls.param[0].peer]: [0, Pulls.param[1]]},
											ts: ts,
											tx: false,
											vow: false}, (Q) => {

												Arg[1].end(Tools.coats({mug: Pulls.mug}));
										}]);
									}	 
								}
							}

							if (Pulls.pull === `walletOutlet`) {

								if (Raw.mugs[1][Pulls.mug].inlet && Raw.mugs[1][Pulls.mug].inlet.USDT && Raw.mugs[1][Pulls.mug].inlet.USDT.length > 0) {

									Tools.collateralise([Raw, TX => {

										let Hold = Tools.hold([Raw, Pulls.mug]).sort((A, B) => {return B.secs - A.secs}), Outlet = [];

										Tools.hold([Raw, Pulls.mug]).forEach(MD => {

											if (MD.till[Pulls.mug] && MD.tx.length > 10) {

												let Months = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];

												let Day = new Date(MD.secs);

												MD[`ts_long`] = `${Day.getDate()} ${Months[Day.getMonth()]}, ${(Day.getHours() > 9)? Day.getHours(): `0` + Day.getHours()}:${(Day.getMinutes() > 9)? Day.getMinutes(): `0` + Day.getMinutes()}`;

												MD[`value`] = `${-(MD.till[hold].toFixed(2))}`;

												Outlet.push(MD)
											}
										});

										if (TX.length > 0) {

											Sql.putlist([`till`, TX, (SQ) => {

												Arg[1].end(Tools.coats({
													inlet: Raw.mugs[1][Pulls.mug].inlet.USDT[0], 
													mug: Pulls.mug,
													outlet: Outlet.sort((A, B) => {return B.secs - A.secs}),
													vault: `${(Hold[0].hold[0]).toFixed(2)}`}));
											}]);
										}

										else {

											Arg[1].end(Tools.coats({
												inlet: Raw.mugs[1][Pulls.mug].inlet.USDT[0], 
												mug: Pulls.mug,
												outlet: Outlet.sort((A, B) => {return B.secs - A.secs}),
												vault: `${(Hold[0].hold[0]).toFixed(2)}`}));
										}
									}]);
								}

								else Arg[1].end(Tools.coats({inlet: false, mug: Pulls.mug}));	
							}
						});
					}
				}
			});
		}
	}

	pollPay () {

		setInterval(()=> {

			Sql.pulls(Raw => {

				Raw.invoice[0].forEach(Bill => {

					if (Bill.complete === false) {

						let Get = HTTPS.request({
        					hostname: `payment.intasend.com`,
        					port: 443,
        					path: `/api/v1/payment/status/`,
        					method: `POST`,
       						headers: {
       							Authorization: `Bearer ISSecretKey_live_c3481e0a-b1c5-4529-b761-bcee74225b6c`,
       							[`Content-Type`]: `application/json`,
       							INTASEND_PUBLIC_API_KEY: `ISPubKey_live_be13c375-b61d-4995-8c50-4268c604c335`}}, Got => {

							let got = ``;

							Got.on(`data`, (blob) => {got += blob;});
        										
        					Got.on('end', () => {

          						if (got) {

          							let TX = Tools.typen(got);

          							if (Bill.type === `stk` && TX.invoice.state === `COMPLETE` && !Raw.till[1][Bill.md]) {

										Sql.puts([`till`, {
											flag: {stk: Bill.md},
											md: Bill.md,
											outlet_wallet: false,
											secs: Bill.ts,
											till: {
												[hold]: 0,
												[Bill.mug]: [0, Bill.float]},
											ts: Bill.ts,
											tx: false,
											vow: false}, (Q) => {

                							let Old = Tools.typen(Tools.coats(Bill));

                							Bill.complete = true;

											Sql.places([`invoice`, Bill, Old, (Q) => {}]);
										}]);
									}

          							if (Bill.type === `autospot` && TX.invoice.state === `COMPLETE` && !Raw.autospot[1][Bill.md]) {

										Sql.puts([`autospot`, {
											md: Bill.md, 
											symbol: `kes`,
											till: {
												[hold]: 0,
												[Bill.mug]: [0, Bill.local]},
											ts: Bill.ts,
											tx: false,
											type: `deposit`}, (Q) => {

                							let Old = Tools.typen(Tools.coats(Bill));

                							Bill.complete = true;

											Sql.places([`invoice`, Bill, Old, (Q) => {}]);
										}]);
									}

          							if (TX.invoice.state === `FAILED`) {

                						let Old = Tools.typen(Tools.coats(Bill));

                						Bill.complete = null;

										Sql.places([`invoice`, Bill, Old, (Q) => {}]);
									}
          						}
        					});
						});

						Get.write(Tools.coats({invoice_id: Bill.invoice}));

						Get.end();
					}
				});
			});
		}, 10000);
	}
}

module.exports = new Route();