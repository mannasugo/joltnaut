`use strict`;

class Route {

	constructor () {

		this.State = [];
	}

	getState () {

    	let url = (`./${window.location}`).replace(`//`, `/`).replace(/%(..)/g, function (match, hex) {
      		return String.fromCharCode(parseInt(hex, 16))
    	});

    	this.State = url;

    	this.State = url.split(`/`);
	}

	Call () {

		View.pop();

		this.getState();

		let State = this.State;

		if (State.length === 4 && State[3] === ``) { 

			let Puts = Tools.pull([
				`/json/web`, {
					mug: (Clients.mug) ? Clients.mug: false,
					pull: `app`
				}]);

			Puts.onload = () => {

				let Web = Tools.typen(Puts.response);

				Clients.instance = Tools.coats([`app`, new Date().valueOf()]);

				View.DOM([`div`, [Models.app(Web)]]);
			}
		}

    	else if (this.State[3] === `account`) {

    		if (!Clients.mug) {

    			history.pushState(``, ``, `/`);

    			this.Call();
    		}

    		else if (!State[4] && !Tools.slim[State[4]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Clients.mug,
						pull: `mug`}]);

				Puts.onload = () => {

					let Web = JSON.parse(Puts.response);

					if (Web.mug) {

						Clients.vaultSlots = Tools.coats(Web.vaultSlots);

						View.DOM([`div`, [Models.idVaultSlot()]]);

						Events.cellSlots()
					}
				}
			}
    	}

    	else if (this.State[3] === `enrol`) {

    		if (Clients.mug) {

    			history.pushState(``, ``, `/my/wallet`);

    			this.Call();
    		}

    		else if (!State[4] && !Tools.slim[State[4]] && !Clients.mug) {

				Clients.instance = Tools.coats([`mugup`, new Date().valueOf()]);
					
				View.DOM([`div`, [Models.mugslot()]]);

				Events.mugup();
			}
    	}

    	else if (this.State[3] === `jms`) {

    		if (!Clients.mug) {

    			history.pushState(``, ``, `/`);

    			this.Call();
    		}

    		else if (!State[4] && !Tools.slim[State[4]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/ms/`, {
						pull: `app`}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					if (Web.pays) {

						document.title = `Joltnaut Management System`;

						View.DOM([`div`, [Models.jms(Web)]]);

						Events.pollPay();
					}
				}
			}
    	}

    	else if (this.State[3] === `mode`) { 

    		if (!Clients.mug) {

    			history.pushState(``, ``, `/`);

    			this.Call();
    		}

    		else if (State[4] && State[4] === `deposit` && !State[5] && !Tools.slim[State[5]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Clients.mug,
						pull: `via`}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					if (Web.mug) {

						View.DOM([`div`, [Models.inVaultVia()]]);
					}
				}
			}

    		else if (State[4] && State[4] === `deposit` && State[5] && State[5] === `stk` && !State[6] 
    			&& !Tools.slim[State[6]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						flag: `stk`,
						mug: Clients.mug,
						pull: `vaultSlot`}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					if (Web.mug) {

						if (Web.vaultSlot.id) {

							View.DOM([`div`, [Models.inVaultSTK(Web.vaultSlot)]]);

							Events.local2Coin();

							Events.STKPay(Web.vaultSlot);
						}

						else window.location = `/account`;
					}
				}
			}

    		else if (State[4] && State[4] === `deposit` && State[5] && State[5] === `tron20` && !State[6] 
    			&& !Tools.slim[State[6]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						flag: `tron20`,
						mug: Clients.mug,
						pull: `vaultSlot`, way: `in`}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					if (Web.mug) {

						if (Web.id) {

							View.DOM([`div`, [Models.inVaultTRON20(Web)]]);

							Events.idCopy(Web);
						}
					}
				}
			}

    		else if (State[4] && State[4] === `withdraw` && !State[5] && !Tools.slim[State[5]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Clients.mug,
						pull: `via`}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					if (Web.mug) /**/View.DOM([`div`, [Models.vaultOutSplash()]]);/**/ //View.DOM([`div`, [Models.outVaultVia()]]);
				}
			}

    		else if (State[4] && State[4] === `withdraw` && State[5] && State[5] === `stk` && !State[6] 
    			&& !Tools.slim[State[6]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						flag: `stk`,
						mug: Clients.mug,
						pull: `vaultSlot`}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					/**

					if (Web.mug && Web.open < 9 || Web.open > 16) {

						console.log(Web)
					}

					if (Web.mug && Web.open >= 9 && Web.open < 16) {

						if (Web.vaultSlot.id) {

							Clients.instance = Tools.coats([`outVaultSlot`, new Date().valueOf()]);

							View.DOM([`div`, [Models.outVaultSTK(Web.vaultSlot)]]);

							Events.local2Coin();

							Events.vaultOut(Web.vaultSlot);
						}

						else window.location = `/account`;
					}

					**/
				}
			}

    		else if (State[4] && State[4] === `withdraw` && State[5] && State[5] === `tron20` && !State[6] 
    			&& !Tools.slim[State[6]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						flag: `tron20`,
						mug: Clients.mug,
						pull: `vaultSlot`, way: `out`}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					/*if (Web.mug && Web.open < 9 || Web.open > 16) {

						console.log(Web)
					}

					if (Web.mug && Web.open >= 9 && Web.open <= 16) {

						View.DOM([`div`, [Models.vaultOutTRON20(Web)]]);

						//Events.vaultOut(Web.vaultSlot);
					}*/
				}
			}
		}

    	else if (this.State[3] === `my`) {

    		if (!Clients.mug) {

    			history.pushState(``, ``, `/`);

    			this.Call();
    		}

    		else if (State[4] && State[4] === `assets` && State[5] && State[5] === `USDT` && !State[6] 
    			&& !Tools.slim[State[6]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						flag: `tron20`,
						mug: Clients.mug,
						pull: `vaultSlot`, way: `in`}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					if (Web.mug) {

						document.title = `USDT | Pool Asset`;

						if (Web.id) {

							View.DOM([`div`, [Models.asset(Web)]]);
						}
					}
				}
			}

    		else if (State[4] && State[4] === `assets` && State[5] && State[5] === `USDT` && State[6] && State[6] === `to`
    			&& !Tools.slim[State[7]] && !Tools.slim[State[7]]) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: (Clients.mug) ? Clients.mug: false,
						pull: `outVault`}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					if (Web) {

						document.title = `Withdraw Tether USD | Pool Asset`;

						View.DOM([`div`, [Models.outVault(Web)]]);

						Events.vaultSell(Web);
					}
				}
			}

    		else if (State[4] && State[4] === `peers` && !State[5] && !Tools.slim[State[5]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Clients.mug,
						pull: `peers`}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					if (Web.mug) {

						let Peers = [];

						Web.peers.forEach(MD => {

							if (MD.via[0] === true && MD.via[1] === true) Peers.push(MD);
						});

						View.DOM([`div`, [Models.peers(Peers)]]);

						Events.putContact();

						Events.allow();
					}
				}
			}

    		else if (State[4] && State[4] === `peers` && State[5] && State[5] === `requests` && !State[6] 
    			&& !Tools.slim[State[6]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Clients.mug,
						pull: `peers`}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					if (Web.mug) {

						let Peers = [];

						Web.peers.forEach(MD => {

							if (MD.via[1] === false) Peers.push(MD);
						});

						View.DOM([`div`, [Models.vetPeers(Peers)]]);

						Events.letContact();
					}
				}
			}

    		else if (State[4] && State[4] === `wallet` && !State[5] && !Tools.slim[State[5]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Clients.mug,
						pull: `app`}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					if (Web.pnl) {

						Clients.debit = Web.debit;

						Clients.pnl = Tools.coats([Web.pnl[0].toFixed(2), Web.pnl[1].toFixed(2)]);

						Clients.ts = Web.ts;

						Clients.vault = Web.vault;

						View.DOM([`div`, [Models.clientTX(Web.tx)]]);

						View.pop()

						if (document.querySelector(`#plane`) && Web.debit > 0) View.DOM([`#plane`, [Models.holdXY(Web.holdXY)]]);
					}
				}
			}

    		else if (State[4] && State[4] === `wallet` && State[5] && State[5] === `pnl` && !State[6] 
    			&& !Tools.slim[State[6]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Clients.mug,
						pull: `pnl`}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					if (Web.mug) {

						View.DOM([`div`, [Models.pnl(Web)]]);
					}
				}
			}
    	}

		else if (this.State[3] === `pools`) {

    		if (!State[4] && !Tools.slim[State[4]]) {

				document.title = `Liquidity Pools`;

				let Puts = Tools.pull([
					`/json/web`, {
						mug: (Clients.mug) ? Clients.mug: false,
						pull: `pools`
					}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					View.DOM([`div`, [Models.pools(Web)]]);
				}
			}

    		else if (State[4] === `BTC_USDT` && !State[5] && !Tools.slim[State[5]]) {

				document.title = `Pool | Bitcoin - Tether USD`;

				let Puts = Tools.pull([
					`/json/web`, {
						mug: (Clients.mug) ? Clients.mug: false,
						pull: `pools`
					}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					View.DOM([`div`, [Models.pool(Web)]]);
				}
			}

    		else if (State[4] === `BTC_USDT` && State[5] === `supply` && !State[6] && !Tools.slim[State[6]]) {

				document.title = `BTC/USDT Profit Analysis`;

				let Puts = Tools.pull([
					`/json/web`, {
						mug: (Clients.mug) ? Clients.mug: false,
						pull: `pools`
					}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					View.DOM([`div`, [Models.project(Web)]]);

					Events.initWallet();

					Events.projectSlot();
				}
			}
		}

    	else if (this.State[3] === `portal`) {

    		if (!Clients.mug) {

				Clients.instance = Tools.coats([`mugin`, new Date().valueOf()]);
					
				View.DOM([`div`, [Models.mugslot()]]);

				Events.mugin({flag: `portal`});
    		}

    		else if (!State[4] && !Tools.slim[State[4]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/ms/`, {
						mug: Clients.mug, pull: `portal`}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					if (Web.mug) {

						document.title = `Administration Portal`;

						View.DOM([`div`, [Models.portal(Web)]]);
					}
				}
			}
    	}

    	else if (this.State[3] === `p2p`) {

    		if (!Clients.mug) {

    			history.pushState(``, ``, `/`);

    			this.Call();
    		}

    		else if (!State[4] && !Tools.slim[State[4]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Clients.mug,
						pull: `p2p`}]);

				Puts.onload = () => {

					let Web = JSON.parse(Puts.response);

					Clients.instance = Tools.coats([`p2p`, new Date().valueOf()]);

					Clients.inVaults = Tools.coats(Web.outlets);

					Clients.p2p = `inVault`;

					Clients.vaultSlots = Tools.coats(Web.vaultSlots);
					
					View.DOM([`div`, [Models.p2p()]]);

					Events.inVaultSlot();
				}
			}

			else if (State[4] && State[4] === `c2s` && !State[5] && !Tools.slim[State[5]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Clients.mug,
						pull: `c2s`}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					Clients.instance = Tools.coats([`c2s`, new Date().valueOf()]);

					if (Web && Web.mug) {

						Clients.outVaults = Tools.coats(Web.outlets);

						Clients.p2p = `outVault`;

						View.DOM([`div`, [Models.c2s()]]);

						Events.outVaultSlot(Web.c2s);
						
					}
				}
			}

			else if (State[4] && !State[5] && !Tools.slim[State[5]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Clients.mug,
						pull: `vow`,
						vow: State[4]}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					Clients.instance = Tools.coats([`vow`, new Date().valueOf()]);

					if (Web && Web.mug) {

						if (Web.vow.type === `inVault`) {

							View.DOM([`div`, [Models.inVaultVow(Web.vow)]]);

							Events.vetVow(Web.vow);
						}

						if (Web.vow.type === `outVault`) {

							View.DOM([`div`, [Models.outVaultVow(Web.vow)]]);

							Events.vetVow(Web.vow);
						}
					}
				}
			}
    	}

    	else if (this.State[3] === `reserve`) {

    		if (!Clients.mug) {

    			history.pushState(``, ``, `/`);

    			this.Call();
    		}

    		else if (!State[4] && !Tools.slim[State[4]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Clients.mug,
						pull: `walletOutlet`}]);

				Puts.onload = () => {

					let Web = JSON.parse(Puts.response);

					Clients.instance = Tools.coats([`reserve`, new Date().valueOf()]);

					if (Web && Web.mug) {

						if (Web.inlet === false) {

							View.DOM([`div`, [Models.inlet()]]);

							Events.pollWallet();
						}

						if (Web.inlet != false && Web.inlet.length > 9) {

							View.DOM([`div`, [Models.inletTX()]]);

						}

					}
				}
			}

			else if (State[4] === `credentials` && !State[5] && !Tools.slim[State[5]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Clients.mug,
						pull: `idVault`}]);

				Puts.onload = () => {

					let Web = JSON.parse(Puts.response);

					Clients.instance = Tools.coats([`idVault`, new Date().valueOf()]);

					if (Web && Web.mug) {

						if (Web.inlet === false) {

							View.DOM([`div`, [Models.inlet()]]);

							Events.pollWallet();
						}

						if (Web.inlet != false && Web.inlet.length > 9) {

							Clients.inlet = Web.inlet;

							Clients.vaultSlots = Tools.coats(Web.vaultSlots);

							if (Web.idVault === false) {

								View.DOM([`div`, [Models.idVaultSlot()]]);

								Events.cellSlots()
							}

						}

					}
				}
			}

			else if (State[4] === `deposit` && !State[5] && !Tools.slim[State[5]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Clients.mug,
						pull: `walletOutlet`}]);

				Puts.onload = () => {

					let Web = JSON.parse(Puts.response);

					Clients.instance = Tools.coats([`vaultSlot`, new Date().valueOf()]);

					if (Web && Web.mug) {

						if (Web.inlet === false) {

							View.DOM([`div`, [Models.inlet()]]);

							Events.pollWallet();
						}

						if (Web.inlet != false && Web.inlet.length > 9) {

							Clients.inlet = Web.inlet;

							View.DOM([`div`, [Models.vaultSlot()]]);

						}

					}
				}
			}
		}

		else if (this.State[3] === `s2c`) {

    		if (!Clients.mug) {

    			history.pushState(``, ``, `/`);

    			this.Call();
    		}

			else if (State[4] && !State[5] && !Tools.slim[State[5]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Clients.mug,
						pull: `s2c`,
						vow: State[4]}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					Clients.instance = Tools.coats([`s2c`, new Date().valueOf()]);

					if (Web && Web.mug) {

						if (Web.s2c.type === `inVault`) {

							View.DOM([`div`, [Models.inVaultS2c(Web.s2c)]]);

							Events.putS2c(Web.s2c);
						}

						if (Web.s2c.type === `outVault`) {

							View.DOM([`div`, [Models.outVaultC2s(Web.s2c)]]);

							Events.vetC2s(Web.s2c);
						}
					}
				}
			}
		}

    	else if (this.State[3] === `signin`) {

    		if (Clients.mug) {

    			history.pushState(``, ``, `/my/wallet`);

    			this.Call();
    		}

    		else if (!State[4] && !Tools.slim[State[4]] && !Clients.mug) {

				Clients.instance = Tools.coats([`mugin`, new Date().valueOf()]);
					
				View.DOM([`div`, [Models.mugslot()]]);

				Events.mugin();
			}
    	}
  	}
}

Route = new Route();