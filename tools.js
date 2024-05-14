`use strict`;

const {createConnection} = require(`mysql`);

const { mkdir, readFile, readFileSync, stat, writeFileSync } = require(`fs`);

const { createHash } = require(`crypto`);

const pullHTTPContent = require(`request`);

const hold = new Date(`1996-01-20`).valueOf();

class Sql {
	
	constructor (Arg) {

		this.credentials = Arg[0];
	}

	Sql (Arg) {

		return createConnection(this.credentials).query(Arg[0], (A, B, C) => Arg[1]([A, B, C]));
	}

	pulls (Arg) {

		this.credentials.database = `wallet`;

		this.Sql([readFileSync(`constants/tables.sql`, {encoding: `utf8`}), (Raw) => {

			let Put = [`b4`, `book`, `invoice`, `mugs`, `payout`, `peers`, `spot`, `till`, `trades`, `tron20`, `vows`];

			let Puts = {};

			Put.forEach(put => Puts[put] = [[], {}]);

			Raw[1].forEach((Put, put) => {

				if (put === 1) {

					Put.forEach(B4 => {

						Puts.b4[0].push(JSON.parse(B4.json));

						Puts.b4[1][JSON.parse(B4.json).md] = JSON.parse(B4.json);
					});
				}

				if (put === 2) {

					Put.forEach(Book => {

						Puts.book[0].push(JSON.parse(Book.json));

						Puts.book[1][JSON.parse(Book.json).md] = JSON.parse(Book.json);
					});
				}

				if (put === 4) {

					Put.forEach(Bill => {

						Puts.invoice[0].push(JSON.parse(Bill.json));

						Puts.invoice[1][JSON.parse(Bill.json).md] = JSON.parse(Bill.json);
					});
				}

				if (put === 5) {

					Put.forEach(Mug => {

						Puts.mugs[0].push(JSON.parse(Mug.json));

						Puts.mugs[1][JSON.parse(Mug.json).md] = JSON.parse(Mug.json);
					});
				}

				if (put === 7) {

					Put.forEach(Pay => {

						Puts.payout[0].push(JSON.parse(Pay.json));

						Puts.payout[1][JSON.parse(Pay.json).md] = JSON.parse(Pay.json);
					});
				}

				if (put === 8) {

					Put.forEach(Peer => {

						Puts.peers[0].push(JSON.parse(Peer.json));

						Puts.peers[1][JSON.parse(Peer.json).md] = JSON.parse(Peer.json);
					});
				}

				if (put === 10) {

					Put.forEach(Spot => {

						Puts.spot[0].push(JSON.parse(Spot.json));

						Puts.spot[1][JSON.parse(Spot.json).md] = JSON.parse(Spot.json);
					});
				}

				if (put === 11) {

					Put.forEach(Till => {

						Puts.till[0].push(JSON.parse(Till.json));

						Puts.till[1][JSON.parse(Till.json).md] = JSON.parse(Till.json);
					});
				}

				if (put === 12) {

					Put.forEach(Trade => {

						Puts.trades[0].push(JSON.parse(Trade.json));

						Puts.trades[1][JSON.parse(Trade.json).md] = JSON.parse(Trade.json);
					});
				}

				if (put === 13) {

					Put.forEach(TRON => {

						Puts.tron20[0].push(JSON.parse(TRON.json));

						Puts.tron20[1][JSON.parse(TRON.json).md] = JSON.parse(TRON.json);
					});
				}

				if (put === 15) {

					Put.forEach(Vow => {

						Puts.vows[0].push(JSON.parse(Vow.json));

						Puts.vows[1][JSON.parse(Vow.json).md] = JSON.parse(Vow.json);
					});
				}

			});

			Arg(Puts);

		}]);
	}

    places (Arg) {

        this.credentials.database = `wallet`;

        this.Sql([{
            sql: `update ${Arg[0]} set json = ? where json = ?`,
            values: [JSON.stringify(Arg[1]), JSON.stringify(Arg[2])]}, (Raw) => Arg[3](Raw)]);
    }

	putlist (Arg) {

		this.credentials.database = `wallet`;

		let Put = [];

		Arg[1].forEach(MD => {

			Put.push([new Tools().coats(MD)]);
		});

		this.Sql([{
			sql: `insert into ?? (json) values?`,
			values: [Arg[0], Put]}, (Raw) => Arg[2](Raw)]);
			
	}

	puts (Arg) {

		this.credentials.database = `wallet`;

		this.Sql([{
			sql: `insert into ?? set ?`,
			values: [Arg[0], {json: JSON.stringify(Arg[1])}]}, (Raw) => Arg[2](Raw)]);
			
	}
}

class Tools {

	constructor () {}

	coats (types) { return JSON.stringify(types); }

	collateralise (Arg) {

		let Holds = {}, TX = [[], []];

		Arg[0].till[0].forEach(MD => {

			if (MD.till[hold] && MD.tx != false) TX[0].push(MD.tx);
		});

		Arg[0].mugs[0].forEach(MD => {

			if (MD.inlet && MD.inlet.USDT) {

				MD.inlet.USDT.forEach(b64 => {

					Holds[b64] = MD.md;
				});
			}
		});

		pullHTTPContent(`https://apilist.tronscan.org/api/token_trc20/transfers?relatedAddress=TH9BuLCBLmCTfvtgBWB14Y4TxCjPdYx4WK`, (flaw, State, coat) => {

			if (!flaw && State.statusCode === 200) {

				this.typen(coat).token_transfers.forEach(MD => {

					if (TX[0].indexOf(MD.transaction_id) === -1 && Holds[MD.from_address] && MD.to_address === `TH9BuLCBLmCTfvtgBWB14Y4TxCjPdYx4WK` && parseInt(MD.quant) > 0) {

						TX[1].push({
							md: createHash(`md5`).update(`${MD.block_ts}`, `utf8`).digest(`hex`),
							outlet_wallet: MD.from_address,
							secs: MD.block_ts,
							till: {
								[hold]: -(parseInt(MD.quant)/1000000), 
								[Holds[MD.from_address]]: [(parseInt(MD.quant)/1000000), 0]},
							tx: MD.transaction_id,
							vow: false});
					}
				});

				return Arg[1](TX[1]);
			}
		});
	}

	gas (Arg) {

		Arg[0] = parseFloat(Arg[0]);

		let gas = 0;

		if (Arg[0] > .05) {

			if (Arg[0] <= 1) gas = .05;

			if (Arg[0] > 1 && Arg[0] <= 15) gas = .125;

			if (Arg[0] > 15 && Arg[0] <= 25) gas = .175;

			if (Arg[0] > 25 && Arg[0] <= 45) gas = .195;

			if (Arg[0] > 45 && Arg[0] <= 65) gas = .215;

			if (Arg[0] > 65 && Arg[0] <= 105) gas = .235;

			if (Arg[0] > 105) gas = .255
		}

		return gas*.85;
	}

	hold (Arg) {

		let Hold = [0, 0, []];

		let Till = this.typen(this.coats(Arg[0].till[0]));

		Till.sort((A, B) => {return A.secs - B.secs}).forEach(MD => {

			let Holden = [0, 0];

			if (MD.till[Arg[1]]) {

				Hold[0] += MD.till[Arg[1]][0]; 

				Hold[1] += MD.till[Arg[1]][1];

				Holden = [Hold[0], Hold[1]];

				MD[`hold`] = Holden;

				Hold[2].push(MD);
			}
		});

		return Hold[2];
	}

	holding (Arg) {

		let Spot = [[`btc`, `usd`, `usdt`], {}];

		let Till = this.typen(this.coats(Arg[0].spot[0]));

		Spot[0].forEach(coin => {

			let cumulate = 0;

			Till.sort((A, B) => {return A.ts - B.ts}).forEach(MD => {

				//let holden = 0;

				if (MD.symbol === coin && MD.till[Arg[1]]) {

					cumulate += MD.till[Arg[1]][1]
				}
			});

			Spot[1][coin] = cumulate;
		});

		return Spot[1];
	}

	pairs (Raw) {
		
		let Pairs = [{
			gas: 7.5/100,
			pair: [`btc/fdusd`, [61385.40, 61902.34]],
			ts_a: new Date(`2024-05-14 09:21`).valueOf(), 
			ts_z: new Date(`2024-05-14 09:39`).valueOf()
		}];

		//writeFileSync(`json/pairs.json`, this.coats(Pairs));

		Pairs = this.typen(readFileSync(`json/pairs.json`, {encoding: `utf8`}));

		Pairs.forEach(Pair => {

			Pair.md = createHash(`md5`).update(`${Pair.ts_z}`, `utf8`).digest(`hex`);

			if (Raw[0].trades[1][Pair.md]) return;

			let Putlist = [];

			Raw[0].mugs[0].forEach(Mug => {

				let Bals = this.hold([Raw[0], Mug.md]).sort((A, B) => {return B.secs - A.secs});

				let B4 = [], AZ = [], Flag = [];

				Bals.forEach(Till => {

					if (Till.secs < Pair.ts_a && Till.hold[1] > 0) B4.push(Till);

					if (Till.flag && Till.flag.trade && Till.flag.trade === Pair.md) Flag.push(Till);
				});

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

			Raw[1]([Pair, Putlist]);
		});
	}

	safe (String) {

		String = String.replace(new RegExp(`&`, `g`), `u0026`);

		String = String.replace(new RegExp(`'`, `g`), `u0027`);

		String = String.replace(new RegExp(`"`, `g`), `u0022`);

		String = String.replace(new RegExp(`/`, `g`), `u002F`);

		return String;
	}

	typen (coat) { return JSON.parse(coat); }

	/**/

	values (Raw) {
		
		let Pairs = [
			{pair: [[`btc`, `usd`], [0, 61998.82]]}, 
			{pair: [[`eth`, `usd`], [0, 2912.52]]}, 
			{pair: [[`ltc`, `usd`], [0, 79.93]]}, 
			{pair: [[`usdt`, `usd`], [0, .9993]]}, 
			{pair: [[`aud`, `usd`], [0, .66012]]}, 
			{pair: [[`cad`, `usd`], [0, 1/1.36757]]}, 
			{pair: [[`eur`, `usd`], [0, 1.07865]]}, 
			{pair: [[`jpy`, `usd`], [0, 1/156.484]]},
			{pair: [[`kes`, `usd`], [0, 1/130.22]]},
			{pair: [[`nok`, `usd`], [0, 1/10.81810]]},
			{pair: [[`nzd`, `usd`], [0, .60202]]}, 
			{pair: [[`zar`, `usd`], [0, 1/18.41496]]}, 
			{pair: [[`sek`, `usd`], [0, 1/10.85879]]},
			{pair: [[`gbp`, `usd`], [0, 1.25459]]}, 
			{pair: [[`chf`, `usd`], [0, .90793]]}
		];

		writeFileSync(`json/market.json`, this.coats(Pairs));

		Pairs = this.typen(readFileSync(`json/market.json`, {encoding: `utf8`}));

		let Putlist = [];

		Pairs.forEach(Pair => {

			Pair.ilk = `market`;

			Pair.ts = new Date().valueOf();

			Pair.md = createHash(`md5`).update(`${Pair.ts}`, `utf8`).digest(`hex`);

			Pair.mug = hold;

			Pair.side = `buy`;

			Pair.ts_z = Pair.ts;

			Putlist.push(Pair);

		});

		Raw[1]([Putlist]);
	}

	/**/
}

module.exports = {
	
	Sql : new Sql([{
		host: `localhost`,
		user: `root`,
		password: `Mann2asugo`,
		multipleStatements: true
	}]),

	Tools : new Tools()
}