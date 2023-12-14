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

		if (State.length === 4 && State[3] === ``) { //Tools.bot();

			let Puts = Tools.pull([
				`/json/web`, {
					mug: (Clients.mug) ? Clients.mug: false,
					pull: `app`
				}]);

			Puts.onload = () => {

				let Web = JSON.parse(Puts.response);

				Clients.instance = Tools.coats([`app`, new Date().valueOf()]);

				if (Clients.mug) {

					Clients.debit = Web.debit;

					Clients.pnl = Tools.coats([Web.pnl[0].toFixed(2), Web.pnl[1].toFixed(2)]);

					Clients.ts = Web.ts;

					Clients.vault = Web.vault;

					View.DOM([`div`, [Models.clientTX(Web.tx)]]);
				}

				else {

					Clients.instance = Tools.coats([`mugin`, new Date().valueOf()]);
					
					View.DOM([`div`, [Models.mugslot()]]);

					Events.mugin();

					Events.slotup();
				}
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

    		else if (State[4] && State[4] === `withdraw` && !State[5] && !Tools.slim[State[5]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Clients.mug,
						pull: `via`}]);

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					if (Web.mug) View.DOM([`div`, [Models.outVaultVia()]]);
				}
			}
		}

    	else if (this.State[3] === `my`) {

    		if (!Clients.mug) {

    			history.pushState(``, ``, `/`);

    			this.Call();
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

    	else if (this.State[3] === `assets`) {

    		if (!Clients.mug) {

    			history.pushState(``, ``, `/`);

    			Route.Call();
    		}

    		else if (!State[4] && !Tools.slim[State[4]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Tools.typen(Clients.mug)[0],
						pull: `assets`}]);

				Puts.onload = () => {

					let Web = JSON.parse(Puts.response);

					if (Web && Web.mug) {

						Clients.pitmoves = Tools.coats(Web.pitmoves);

						Clients.axis = Tools.coats(Web.axis.sort((A, B) => {return A[0] - B[0]}));

						Clients.vault = parseFloat(Web.wallet[3][0] - Web.wallet[3][1]);

						Clients.wallet = Tools.coats(Web.wallet);

    					View.DOM([`main`, [Models.asset()]]);

    					View.pop();

    					View.DOM([`#coinline`, [Models.coinline()]]);

    					Events.holdReals();

					}
				}
			}
		}

    	else if (this.State[3] === `balance`) {

    		if (!Clients.mug) {

    			history.pushState(``, ``, `/`);

    			Route.Call();
    		}

    		else if (!State[4] && !Tools.slim[State[4]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Tools.typen(Clients.mug)[0],
						pull: `balance`}]);

				Puts.onload = () => {

					let Web = JSON.parse(Puts.response);

					if (Web && Web.mug) {

						Clients.quo = Tools.coats(Web.quo);

						Clients.axis = Tools.coats(Web.axis.sort((A, B) => {return A[0] - B[0]}));

						Web.wallet[2] = [Web.wallet[0][0] - Web.wallet[0][1], Web.wallet[1][0] - Web.wallet[1][1]];

						Clients.wallet = Tools.coats(Web.wallet);

						Clients.vault = parseFloat(Web.wallet[3][0] - Web.wallet[3][1]);

						Clients.trail = Tools.coats(Web.trail);

    	      			document.title = `Tokens & Hyper-ledger`;

				    	View.DOM([`div`, [Models.holds()]]);

				    	Events.holdRunnable();

					}
				}
			}
		}

		else if (this.State[3] === `mugs`) {

    		if (State[4] && (!State[5] && !View.slim(State[5]))) {

			  	let Pull = Tools.pull([`/json/web/`, {
				  	md: State[4].split(`-`)[0],
				  	pull: `fileState`,
				  	secs: State[4].split(`-`)[1]}]);

			  	Pull.onload = () => {

				  	let Pulls = JSON.parse(Pull.response);

				  	if (Pulls.fileState) {

    	      			document.title = `joltquid - profile`;

				    	View.DOM([`div`, [Models.holdMug]]);

						if (document.querySelector(`#file`)) {

							Events.listen([document.querySelector(`#file`), `change`, S => {
				
								S.stopImmediatePropagation();

								Tools.allocateMug(S.target.files, (Raw) => {

									let File = Tools.jpeg([`/json/web/`, State[4].split(`-`)[0], Raw]);
						
									File.onload = () => {
							
										let Pulls = JSON.parse(Pull.response);
							
										if (!Pulls.secs) return;
									}

								});
								
							}]);

						}
				  	}
				}
    		}
    	}

    	else if (this.State[3] === `pit`) {

    		if (!Clients.mug) {

    			history.pushState(``, ``, `/`);

    			Route.Call();
    		}

    		else if (!State[4] && !Tools.slim[State[4]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Tools.typen(Clients.mug)[0],
						pull: `pit`}]);

				Puts.onload = () => {

					let Web = JSON.parse(Puts.response);

					if (Web && Web.mug) {

						Clients.place = Tools.coats([`buy`, `market`]);

						Clients.pitmoves = Tools.coats(Web.pitmoves);

						Clients.axis = Tools.coats(Web.axis.sort((A, B) => {return A[0] - B[0]}));

						Clients.wallet = Tools.coats(Web.wallet);

    					View.DOM([`main`, [Models.pit()]]);

    					View.pop();

    					if (Tools.typen(Clients.wallet)[2][1] > 0) View.DOM([`#pitaxis`, [Models.pitaxis()]]);

    					Events.pitalias();

    					Events.pitplace();

    					Events.pitReals();

    					Events.pitSide();

    					Events.pitSort();

    					Events.pitValue();
					}
				}
    		}
    	}

    	else if (this.State[3] === `settle`) {

    		if (!Clients.mug) {

    			history.pushState(``, ``, `/`);

    			this.Call();
    		}

    		else if (!State[4] && !Tools.slim[State[4]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Tools.typen(Clients.mug)[0],
						pull: `settle`}]);

				Puts.onload = () => {

					let Web = JSON.parse(Puts.response);

					if (Web && Web.mug) {

						Clients.puton = Tools.coats(Web.puton);

						Clients.settles = Tools.coats(Web.settles);

				    	View.DOM([`div`, [Models.settle()]]);

				    	Events.vowin();

					}
				}
			}
		}

    	else if (this.State[3] === `wallet`) {

    		if (!Clients.mug) {

    			history.pushState(``, ``, `/`);

    			Route.Call();
    		}

    		else if (!State[4] && !Tools.slim[State[4]] && Clients.mug) {

    			let secs = new Date().valueOf();

				io().emit(`wallet`, [Tools.typen(Clients.mug)[0], secs]);

				io().on(`wallet`, Wallet => {

					if (Wallet.secs === secs && Wallet.mug === Tools.typen(Clients.mug)[0]) {

						Clients.vaults = Tools.coats(Wallet.vaults);

    					View.DOM([`main`, [Models.wallet()]]);

    					Events.wallet();
    				}
    			});
    		}
    	}

    	else if (this.State[3] === `wallets`) {

    		if (!Clients.mug) {

    			history.pushState(``, ``, `/`);

    			Route.Call();
    		}

    		else if (!State[4] && !Tools.slim[State[4]] && Clients.mug) {

				let Puts = Tools.pull([
					`/json/web/`, {
						mug: Tools.typen(Clients.mug)[0],
						pull: `wallets`}]);

				Puts.onload = () => {

					let Web = JSON.parse(Puts.response);

					if (Web && Web.mug) {

						Clients.inlet = Tools.coats(Web.inlet);

				    	View.DOM([`div`, [Models.wallets()]]);

    					Events.walletin();

					}
				}
			}
		}
  	}
}

Route = new Route();