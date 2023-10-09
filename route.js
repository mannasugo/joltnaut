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

										if (Mug.mail === Pulls.param[0] && Mug.lock === createHash(`md5`).update(`${Pulls.param[1]}`, `utf8`).digest(`hex`)) {

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

							if (Pulls.pull === `app`) Arg[1].end(Tools.coats({}));

							if (Pulls.pull === `mugin`) {

								let Mugin = [];

								Raw.mugs[0].forEach(Mug => {

									if (Mug.mail === Pulls.param[0] && Mug.lock === createHash(`md5`).update(`${Pulls.param[1]}`, `utf8`).digest(`hex`)) {

										Mugin = [Mug.mail];
									}
								});

								if (Mugin.length > 0) {

									Arg[1].end(Tools.coats({
										mug: Mugin.md}));
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
										names: Tools.safe(Pulls.param[1], Pulls.param[3]),
										secs: secs
									}, (Raw) => {

										Arg[1].end(Tools.coats({mug: createHash(`md5`).update(`${secs}`, `utf8`).digest(`hex`)}));
									}]);
								}
							}
						});
					}
				}
			});
		}
	}
}

module.exports = new Route();