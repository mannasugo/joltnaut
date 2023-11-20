const { readdir, readFile, readFileSync, createReadStream, mkdir, stat, writeFile, writeFileSync } = require(`fs`);

const { createHash } = require(`crypto`);

const get = require(`request`);

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

							//Arg[1].end(Tools.coats(Put));

						});
					}

					else if (State[2] === `web`) {

						Sql.pulls(Raw => {

							if (Pulls.pull === `app`) {

								if (Pulls.mug != false) {

									let Hold = Tools.hold([Raw, Pulls.mug]).sort((A, B) => {return B.secs - A.secs});

									Arg[1].end(Tools.coats({
										debit: (Hold[0])? (Hold[0].hold[1]).toFixed(2): 0.00,
										ts: Raw.mugs[1][Pulls.mug][`secs`]}));
								}

								else Arg[1].end(Tools.coats({}));
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

							if (Pulls.pull === `putC2s`) {

								let C2s;

								if (Raw.vows[1][Pulls.c2s.md]) C2s = Raw.vows[1][Pulls.c2s.md];

								if (C2s && C2s.peers[0] === Pulls.mug && C2s.via[0] === false && C2s.via[1] === true 
									/*&& (new Date().valueOf() - C2s.ts) < 60000*15*/) {

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

	Socket (App) {

		App.on(`connection`, Polling => {

			Polling.on(`app`, Raw => {})});
	}
}

module.exports = new Route();