`use strict`;

const { readdir, readFile, readFileSync, createReadStream, mkdir, stat, writeFile, writeFileSync } = require(`fs`);

const { createHash } = require(`crypto`);

const get = require(`request`);

const HTTPS = require(`https`);

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

							if (Pulls.pull === `pollPay`) {

          						if (Raw.payout[1][Pulls.md]) {

                					let Old = Tools.typen(Tools.coats(Raw.payout[1][Pulls.md]));

                					Raw.payout[1][Pulls.md].complete = true;

									Sql.places([`payout`, Raw.payout[1][Pulls.md], Old, (Q) => {

										Arg[1].end(Tools.coats({}));}]);
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

									Raw.till[0].forEach(MD => {

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
									});

									let Day = new Date();

									let ts = new Date(`${Day.getFullYear()}-${Day.getMonth() + 1}-${Day.getDate()}`).valueOf();

									let PNL = [0, 0, 0];

									Raw.till[0].forEach(TX => {

										if (TX.flag && TX.flag.trade && TX.till[Pulls.mug] && TX.ts > ts) {

											PNL[0] += (TX.till[Pulls.mug][1]*100)/TX.principal;

											PNL[1] += TX.till[Pulls.mug][1];								
										}
									});

									Raw.trades[0].forEach(Pair => {

										if (Pair.ts_a > ts) PNL[2] += (((Pair.pair[1][1] - Pair.pair[1][0])/Pair.pair[1][0]))*100							
										
									});

									let Flag = [];

									if (Raw.mugs[1][Pulls.mug].vaultSlots) {

										Raw.mugs[1][Pulls.mug].vaultSlots.forEach(Slot => {

											if (Slot.carrier === `safaricom` && Slot.id[0] !== `2`) Flag.push(Mug);
												
										});
									}

									if (Flag.length > 0) {console.log(Flag)

                						let Old = Tools.typen(Tools.coats(Raw.mugs[1][Pulls.mug]));

                						Raw.mugs[1][Pulls.mug].vaultSlots = [];
													
										Sql.places([`mugs`, Raw.mugs[1][Pulls.mug], Old, (Raw) => {

											Arg[1].end(Tools.coats({
												debit: (Hold[0])? (Hold[0].hold[1]).toFixed(2): 0,
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
										pnl: PNL,
										till: Raw.till[0].length}));
								}
							}

							if (Pulls.pull === `bot`) {

								let Pair = Pulls.param;

								Pair.md = createHash(`md5`).update(`${Pulls.param.ts_z}`, `utf8`).digest(`hex`);

								if (Raw.trades[1][Pair.md]) return;

								let Putlist = [];

								Raw.mugs[0].forEach(Mug => {

									let Bals = Tools.hold([Raw, Mug.md]).sort((A, B) => {return B.secs - A.secs});

									let B4 = [], AZ = [], Flag = [];

									Bals.forEach(Till => {

										if (Till.secs < Pair.ts_a && Till.hold[1] > 0) B4.push(Till);

										if (Till.flag && Till.flag.trade && Till.flag.trade === Pair.md) Flag.push(Till);
									})

									if (Flag.length === 0 && B4.length > 0) {

										AZ.push(B4[0]);

										Bals.forEach(Till => {

											if (Till.secs > Pair.ts_a && Till.secs < Pair.ts_z) AZ.push(Till);
										});

										let sum = 0;

										AZ.forEach(Count => {
                                        		
                                        	sum += Count.hold[1];
										});

										sum = sum/AZ.length;

										let gain = sum*(((Pair.pair[1][1] - Pair.pair[1][0])/Pair.pair[1][0]));

										Putlist.push({
											flag: {trade: Pair.md},
											gas: Pair.gas,
											md: Pair.md,
											outlet_wallet: false,
											principal: sum,
											secs: Pair.ts_z,
											till: {
												[hold]: gain*Pair.gas, 
												[Mug.md]: [0, gain*(1 - Pair.gas)]},
											ts: Pair.ts_z,
											tx: false,
											vow: false
										});
									}
								});

								Sql.puts([`trades`, Pair, (SQ) => {

									Sql.putlist([`till`, Putlist, (SQ) => {

										Arg[1].end(Tools.coats({}))}]);
								}]);
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

									if (Mug.mail === Pulls.param[0] && Mug.lock === createHash(`md5`).update(`${Pulls.param[1]}`, `utf8`).digest(`hex`)) {

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

									if (Mug.mail === Pulls.param[1]) Flaw.push(`mail`);
								});

								if (Flaw.length === 0) {

									let secs = new Date().valueOf();

									Sql.puts([`mugs`, {
										lock: createHash(`md5`).update(Pulls.param[2], `utf8`).digest(`hex`),
										mail: Pulls.param[0],
										md: createHash(`md5`).update(`${secs}`, `utf8`).digest(`hex`),
										names: [Tools.safe(Pulls.param[1]), Tools.safe(Pulls.param[3])],
										secs: secs
									}, (Raw) => {

										Arg[1].end(Tools.coats({mug: createHash(`md5`).update(`${secs}`, `utf8`).digest(`hex`)}));
									}]);
								}
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

									if (Param.float >= 2.5) {

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
          														local: Param.local,
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
											amount: parseFloat(Param.local),
											api_ref: md,
											email: Raw.mugs[1][Pulls.mug].mail,
											phone_number: Param.id}));

										Get.end();
									}
								}
							}

							if (Pulls.pull === `vaultOut`) {

								if (Raw.mugs[1][Pulls.mug]) {

									if (Pulls.param.type === `stk`) {

										let Hold = Tools.hold([Raw, Pulls.mug]).sort((A, B) => {return B.secs - A.secs});

										if (Hold[0].hold[1] > Pulls.param.float) {

											let ts = new Date().valueOf();

											let md = createHash(`md5`).update(`${ts}`, `utf8`).digest(`hex`);

											Sql.puts([`till`, {
												flag: {payout: md},
												md: md,
												outlet_wallet: false,
												secs: ts,
												till: {
													[hold]: 0,
													[Pulls.mug]: [0, -(Pulls.param.float)]},
												ts: ts,
												tx: false,
												vow: false}, (Q) => {

          										Sql.puts([`payout`, {
          											complete: false,
          											float: Pulls.param.float,
          											id: Pulls.param.id,
          											local: Pulls.param.local,
          											md: md,
          											mug: Pulls.mug,
          											secs: ts,
          											ts: ts,
          											tx: {},
          											type: `stk`}, (Pay) => {Arg[1].end(Tools.coats({mug: Pulls.mug}));}]);
											}]);
										}
									}
								}
							}

							if (Pulls.pull === `vaultSlot`) {

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
											mug: Pulls.mug,
											vaultSlot: vaultSlot}));
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

          							if (TX.invoice.state === `COMPLETE` && !Raw.till[1][Bill.md]) {

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

	Socket (App) {

		App.on(`connection`, Polling => {

			Polling.on(`app`, Raw => {})});
	}
}

module.exports = new Route();