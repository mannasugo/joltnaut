`use strict`;

class Events {

	listen (Arg) { 

		(Arg[0].addEventListener) ? Arg[0].addEventListener(Arg[1], Arg[2]) : Arg[0].attachEvent(`on` + Arg[1], Arg[2]);
	}

	getSource (Arg) {

		if (Arg.target) return Arg.target;
	}

	/** **/

	allow () {

		if (document.querySelector(`#allow`) === null) return;

		document.querySelectorAll(`#allow`).forEach(Allow => {

			this.listen([Allow, `click`, S => {

				let Puts = Tools.pull([
					`/json/web/`, { 
						mug: Clients.mug, 
						param : this.getSource(S).getAttribute(`md`), 
						pull: `allow`}]);

				View.pop();

				Puts.onload = () => {

					let Web = Tools.typen(Puts.response);

					if (Web.mug) {

						View.DOM([`div`, [Models.allow(Web.allow)]]);

						this.local2Coin();

						this.listen([document.querySelector(`#w2w`), `click`, S => {

							let Values = [
								(!Tools.slim(document.querySelector(`#coinSlot`).value))? false: Tools.slim(document.querySelector(`#coinSlot`).value)];

							if (Values[0] === false || typeof parseFloat(Values[0]) !== `number`) return;

							if (parseFloat(Values[0]) <= 0 || Web.allow.hold < parseFloat(Values[0])) return;

							let Puts = Tools.pull([
								`/json/web/`, { 
									mug: Clients.mug, 
									param : [Web.allow, parseFloat(Values[0])], 
									pull: `w2w`}]);

							Values = [];

							View.pop();

							View.DOM([`div`, [Models.splash]]);

							Puts.onload = () => {

								let Web = JSON.parse(Puts.response);

								if (Web.mug) window.location = `/`;
							}
						}]);
					}
				}
			}]);
		});
	}

	cellSlots () {

		this.listen([document.querySelector(`#cellSlots`), `click`, S => {

			View.pop();

			Clients.instance = Tools.coats([`cellSlots`, new Date().valueOf()]);

			View.DOM([`div`, [Models.cellSlots()]]);

			this.pollCellSlots()

		}]);
	}

	createVow (Arg) {

		this.listen([document.querySelector(`#createVow`), `click`, S => {

			let Values = 
				[(!Tools.slim(document.querySelector(`#vowSlot`).value))? false: Tools.slim(document.querySelector(`#vowSlot`).value)];

			if (Values[0] === false || typeof parseFloat(Values[0]) !== `number`) return;

			if (parseFloat(Values[0]) <= 0 ) return;

			if (!Clients.mug) window.location = `/signin`;

			let Puts = Tools.pull([
				`/json/web/`, { 
					mug: Clients.mug, 
					param : {symbol: Clients.selectCoin, float: parseFloat(Values[0])}, 
					pull: `createVow`}]);

			Values = [];

			View.pop();

			Puts.onload = () => {

				let Web = JSON.parse(Puts.response);

				if (Web.mug) window.location = `/u/wallet/coin/tx/${Web.md}`;
			}
		}]);
	}

	idCopy (Arg) {

		this.listen([document.querySelector(`#idCopy`), `click`, S => {

  			navigator.clipboard.writeText(Arg.id);

  			this.getSource(S).innerHTML = `COPIED`;

  			setTimeout(() => {

  				this.getSource(S).innerHTML = `COPY`;
			}, 1500);
		}]);
	}

	initWallet () {

		this.listen([document.querySelector(`#initWallet`), `click`, S => {

  			if (!Clients.mug) window.location = `/signin`;

  			if (Clients.mug) window.location = `/my/assets/USDT`;
		}]);
	}

	inVaultSlot () {

		this.listen([document.querySelector(`#inVaultSlot`), `click`, S => {

			if (Tools.typen(Clients.vaultSlots).length > 0) {

				View.pop();

				Clients.instance = Tools.coats([`inVaultSlot`, new Date().valueOf()]);

				let Vault;

				Tools.typen(Clients.inVaults).forEach(Mug => {

					if (Mug.md === this.getSource(S).getAttribute(`md`)) Vault = Mug;
				});

				if (Vault) {

					View.DOM([`div`, [Models.inVaultSlot([Vault])]]);

					this.inVaultVow();

					this.local2Coin();
				}
			}

			else window.location = `/account`;

		}]);
	}

	inVaultVow () {

		this.listen([document.querySelector(`#inVaultVow`), `click`, S => {

			let Values = [
				(!Tools.slim(document.querySelector(`#coinSlot`).value))? false: Tools.slim(document.querySelector(`#coinSlot`).value)];

			if (Values[0] === false || typeof parseFloat(Values[0]) !== `number`) return;

			let vault;

			Tools.typen(Clients.inVaults).forEach(Mug => {

				if (Mug.md === this.getSource(S).getAttribute(`md`)) vault = Mug.vault;
			});

			if (parseFloat(Values[0]) <= 0 || !vault || vault < parseFloat(Values[0])) return;

			let Puts = Tools.pull([
				`/json/web/`, {
					md: this.getSource(S).getAttribute(`md`), 
					mug: Clients.mug, 
					param : [parseFloat(Values[0]), 130.07], 
					pull: `inVaultPollVow`}]);

			Values = [];

			View.pop();

			View.DOM([`div`, [Models.splash]]);

			Puts.onload = () => {

				let Web = JSON.parse(Puts.response);

				if (Web && Web.mug && Web.vow) window.location = `/p2p/${Web.vow}`;
			}

		}]);
	}

	letContact () {

		if (document.querySelector(`#letContact`) === null) return;

		this.listen([document.querySelector(`#letContact`), `click`, S => {

			let Puts = Tools.pull([
				`/json/web/`, { 
					mug: Clients.mug, 
					param : this.getSource(S).getAttribute(`md`), 
					pull: `letContact`}]);

			View.pop();

			View.DOM([`div`, [Models.splash]]);

			Puts.onload = () => {

				let Web = Tools.typen(Puts.response);

				if (Web.mug) window.location = `/my/peers`;
			}

		}]);
	}

	local2Coin () {

		let local = 130.07;

		if (Tools.typen(Clients.instance)[0] === `outVaultSlot`) local = 128.98;

		this.listen([document.querySelector(`#localSlot`), `keyup`, S => {

			let Slot = this.getSource(S);

			let a = Slot.value[Slot.value.length - 1];

			if (a === `.` && Slot.value.indexOf(`.`) !== Slot.value.length - 1) Slot.value = Slot.value.substr(0, Slot.value.length - 1);

			else if (!parseInt(a) && parseInt(a) !== 0 && a !== `.`) Slot.value = Slot.value.substr(0, Slot.value.length - 1);

			document.querySelector(`#coinSlot`).value = (Slot.value/local).toFixed(2)
		}]);

		this.listen([document.querySelector(`#coinSlot`), `keyup`, S => {

			let Slot = this.getSource(S);

			let a = Slot.value[Slot.value.length - 1];

			if (a === `.` && Slot.value.indexOf(`.`) !== Slot.value.length - 1) Slot.value = Slot.value.substr(0, Slot.value.length - 1);

			else if (!parseInt(a) && parseInt(a) !== 0 && a !== `.`) Slot.value = Slot.value.substr(0, Slot.value.length - 1);

			document.querySelector(`#localSlot`).value = (Slot.value*local).toFixed(2)
		}]);
	}

	mugin (Arg) {

		this.listen([document.querySelector(`#signin`), `click`, S => {

			let Values = [
				(!Tools.slim(document.querySelector(`#email`).value))? false: Tools.slim(document.querySelector(`#email`).value),
				(!Tools.slim(document.querySelector(`#lock`).value))? false: Tools.slim(document.querySelector(`#lock`).value)];

			if (Values[0] === false || Values[1] === false) return;

			let Puts = Tools.pull([`/json/web/`, {pull: `mugin`, param : Values}]);

			Values = [];

			View.pop();

			View.DOM([`div`, [Models.splash]]);

			Puts.onload = () => {

				let Pull = JSON.parse(Puts.response);

				if (Pull && Pull.mug) {

					Clients.mug = Pull.mug;

					if (Arg && Arg.flag && Arg.flag === `portal`) window.location = `/portal`;

					else window.location = `/`;
				}
			}

		}]);
	}

	mugup () {

		this.listen([document.querySelector(`#signup`), `click`, S => {

			let Values = [
				(!Tools.slim(document.querySelector(`#email`).value))? false: Tools.slim(document.querySelector(`#email`).value),
				(!Tools.slim(document.querySelector(`#family`).value))? false: Tools.slim(document.querySelector(`#family`).value),
				(!Tools.slim(document.querySelector(`#lock`).value))? false: Tools.slim(document.querySelector(`#lock`).value),
				(!Tools.slim(document.querySelector(`#middle`).value))? false: Tools.slim(document.querySelector(`#middle`).value)];

			if (Values[0] === false || Values[1] === false || Values[2] === false || Values[3] === false) return;

			let Puts = Tools.pull([`/json/web/`, {pull: `mugup`, param : Values}]);

			Values = [];

			View.pop();

			View.DOM([`div`, [Models.splash]]);

			Puts.onload = () => {

				let Pull = JSON.parse(Puts.response);

				if (Pull && Pull.mug) {

					Clients.mug = Pull.mug;

					window.location = `/pools/BTC_USDT`;
				}
			}

		}]);
	}

	outVaultSlot () {

		this.listen([document.querySelector(`#outVaultSlot`), `click`, S => {

			if (Tools.typen(Clients.vaultSlots).length > 0) {

				View.pop();

				Clients.instance = Tools.coats([`outVaultSlot`, new Date().valueOf()]);

				let Vault;

				Tools.typen(Clients.outVaults).forEach(Mug => {

					if (Mug.md === this.getSource(S).getAttribute(`md`)) Vault = Mug;
				});

				if (Vault) {

					View.DOM([`div`, [Models.outVaultSlot([Vault])]]);

					this.outVaultVow();

					this.local2Coin();
				}
			}

			else window.location = `/account`;

		}]);
	}

	outVaultVow () {

		this.listen([document.querySelector(`#outVaultVow`), `click`, S => {

			let Values = [
				(!Tools.slim(document.querySelector(`#coinSlot`).value))? false: Tools.slim(document.querySelector(`#coinSlot`).value)];

			if (Values[0] === false || typeof parseFloat(Values[0]) !== `number`) return;

			let vault;

			Tools.typen(Clients.outVaults).forEach(Mug => {

				if (Mug.md === this.getSource(S).getAttribute(`md`)) vault = Mug.vault;
			});

			if (parseFloat(Values[0]) <= 0 || !vault || vault < parseFloat(Values[0])) return;

			let Puts = Tools.pull([
				`/json/web/`, {
					md: this.getSource(S).getAttribute(`md`), 
					mug: Clients.mug, 
					param : [parseFloat(Values[0]), 128.98], 
					pull: `outVaultPollVow`}]);

			Values = [];

			View.pop();

			View.DOM([`div`, [Models.splash]]);

			Puts.onload = () => {

				let Web = JSON.parse(Puts.response);

				if (Web && Web.mug && Web.vow) window.location = `/p2p/${Web.vow}`;
			}

		}]);
	}

	pollCellSlots () {

		this.listen([document.querySelector(`#pollCellSlots`), `click`, S => {

			let Values = [
				(!Tools.slim(document.querySelector(`#cellMug`).value))? false: Tools.slim(document.querySelector(`#cellMug`).value),
				(!Tools.slim(document.querySelector(`#cellNumerals`).value))? false: Tools.slim(document.querySelector(`#cellNumerals`).value)];

			if (Values[0] === false || Values[1] === false || Values[1].length != 12 || typeof parseFloat(Values[1]) !== `number`) return;

			let Puts = Tools.pull([`/json/web/`, {mug: Clients.mug, pull: `cellSlots`, param : Values}]);

			Values = [];

			View.pop();

			View.DOM([`div`, [Models.splash]]);

			Puts.onload = () => {

				let Pull = JSON.parse(Puts.response);

				if (Pull && Pull.mug) window.location = `/account`;
			}

		}]);
	}

	pollPay () {

		this.listen([document.querySelector(`#pollPay`), `click`, S => {

			let Puts = Tools.pull([
				`/json/ms/`, {
					md: this.getSource(S).getAttribute(`md`),
					pull: `pollPay`}]);

			View.pop();

			View.DOM([`div`, [Models.splash]]);

			Puts.onload = () => {

				let Web = JSON.parse(Puts.response);

				if (Web) window.location = `/jms`;
			}

		}]);
	}

	pollWallet () {

		this.listen([document.querySelector(`#pollWallet`), `click`, S => {

			let Values = [(!Tools.slim(document.querySelector(`#TRC20`).value))? false: Tools.slim(document.querySelector(`#TRC20`).value)];

			if (Values[0] === false) return;

			let Puts = Tools.pull([
				`/json/web/`, {
					mug: Clients.mug,
					pull: `inlet`, 
					param : Values[0]}]);

			View.pop();

			View.DOM([`div`, [Models.splash]]);

			Puts.onload = () => {

				let Pull = JSON.parse(Puts.response);

				if (Pull && Pull.mug) window.location = `/reserve`;
			}
		}]);
	}

	projectSlot () {

		this.listen([document.querySelector(`#projectSlot`), `keyup`, S => {

			let Slot = this.getSource(S);

			let a = Slot.value[Slot.value.length - 1];

			if (a === `.` && Slot.value.indexOf(`.`) !== Slot.value.length - 1) Slot.value = Slot.value.substr(0, Slot.value.length - 1);

			else if (!parseInt(a) && parseInt(a) !== 0 && a !== `.`) Slot.value = Slot.value.substr(0, Slot.value.length - 1);

			if (Slot.value > 0) {

				document.querySelector(`#estSlot`).style.display = `flex`;

				document.querySelector(`#pnlSlot`).innerHTML = `+${(Slot.value*(30*(1.05/100))).toFixed(2)} USDT`;
			}

			if (Slot.value <= 0) document.querySelector(`#estSlot`).style.display = `none`;
		}]);
	}

	putClientVow (Vow) {

		this.listen([document.querySelector(`#putClientVow`), `click`, S => {

			let Puts = Tools.pull([
				`/json/web/`, { 
					mug: Clients.mug, 
					pull: `putClientVow`,
					vow: Vow}]);

			View.pop();

			View.DOM([`div`, [Models.splash]]);

			Puts.onload = () => {

				window.location = `/p2p/${Vow.md}`;
			}

		}]);
	}

	putContact () {

		this.listen([document.querySelector(`#putContact`), `click`, S => {

			let Values = [(!Tools.slim(document.querySelector(`#idSlot`).value))? false: Tools.slim(document.querySelector(`#idSlot`).value)];

			if (Values[0] === false) return;

			let Puts = Tools.pull([
				`/json/web/`, {
					mug: Clients.mug, 
					param : Values[0],
					pull: `putContact`}]);

			View.pop();

			View.DOM([`div`, [Models.splash]]);

			Puts.onload = () => {

				let Web = Tools.typen(Puts.response);

				if (Web && Web.mug) window.location = `/my/peers/requests`;
			}
		}]);
	}

	putS2c (S2c) {

		if (document.querySelector(`#putS2c`) === null) return;

		this.listen([document.querySelector(`#putS2c`), `click`, S => {

			let Puts = Tools.pull([
				`/json/web/`, { 
					mug: Clients.mug, 
					pull: `putS2c`,
					s2c: S2c}]);

			View.pop();

			View.DOM([`div`, [Models.splash]]);

			Puts.onload = () => {

				window.location = `/s2c/${S2c.md}`;
			}

		}]);
	}

	putVaultVow (Vow) {

		this.listen([document.querySelector(`#putVaultVow`), `click`, S => {

			let Puts = Tools.pull([
				`/json/web/`, { 
					mug: Clients.mug, 
					pull: `putVaultVow`,
					vow: Vow}]);

			View.pop();

			View.DOM([`div`, [Models.splash]]);

			Puts.onload = () => {

				window.location = `/s2c/${Vow.md}`;
			}

		}]);
	}

	selectCoin () {

		document.querySelectorAll(`#token`).forEach((Coin, i)=> {

			this.listen([Coin, `click`, S => {

				Clients.selectCoin = Coin.getAttribute(`for`);

				window.location = `/u/wallet/coin`;
			}])})
	}

	STKPay (Arg) {

		this.listen([document.querySelector(`#stk`), `click`, S => {

			let Values = 
				[(!Tools.slim(document.querySelector(`#coinSlot`).value))? false: Tools.slim(document.querySelector(`#coinSlot`).value),
				(!Tools.slim(document.querySelector(`#localSlot`).value))? false: Tools.slim(document.querySelector(`#localSlot`).value)];

			if (Values[0] === false || typeof parseFloat(Values[0]) !== `number`) return;

			if (parseFloat(Values[0]) <= 0 || Arg.apex < parseFloat(Values[0]) || 2.5 > parseFloat(Values[0])) return;

			let Puts = Tools.pull([
				`/json/web/`, { 
					mug: Clients.mug, 
					param : {float: parseFloat(Values[0]), id: Arg.id, local: parseFloat(Values[1])}, 
					pull: `STKPay`}]);

			Values = [];

			View.pop();

			View.DOM([`div`, [Models.splash]]);

			Puts.onload = () => {

				let Web = JSON.parse(Puts.response);

				if (Web.mug) window.location = `/`;
			}
		}]);
	}

	tradeSlot () {

		this.listen([document.querySelector(`#buySlot`), `keyup`, S => {

			let Slot = this.getSource(S);

			let a = Slot.value[Slot.value.length - 1];

			if (a === `.` && Slot.value.indexOf(`.`) !== Slot.value.length - 1) Slot.value = Slot.value.substr(0, Slot.value.length - 1);

			else if (!parseInt(a) && parseInt(a) !== 0 && a !== `.`) Slot.value = Slot.value.substr(0, Slot.value.length - 1);
		}]);

		this.listen([document.querySelector(`#sellSlot`), `keyup`, S => {

			let Slot = this.getSource(S);

			let a = Slot.value[Slot.value.length - 1];

			if (a === `.` && Slot.value.indexOf(`.`) !== Slot.value.length - 1) Slot.value = Slot.value.substr(0, Slot.value.length - 1);

			else if (!parseInt(a) && parseInt(a) !== 0 && a !== `.`) Slot.value = Slot.value.substr(0, Slot.value.length - 1);
		}])
	}

	vaultOut (Arg) {

		this.listen([document.querySelector(`#vaultOut`), `click`, S => {

			let Values = 
				[(!Tools.slim(document.querySelector(`#coinSlot`).value))? false: Tools.slim(document.querySelector(`#coinSlot`).value),
				(!Tools.slim(document.querySelector(`#localSlot`).value))? false: Tools.slim(document.querySelector(`#localSlot`).value)];

			if (Values[0] === false || typeof parseFloat(Values[0]) !== `number` || parseFloat(Values[1]) > 10000) return;

			if (parseFloat(Values[0]) <= 0 || Arg.apex < parseFloat(Values[0]) || 2.5 > parseFloat(Values[0])) return;

			let Puts = Tools.pull([
				`/json/web/`, { 
					mug: Clients.mug, 
					param : {float: parseFloat(Values[0]), id: Arg.id, local: parseFloat(Values[1]), type: `stk`}, 
					pull: `vaultOut`}]);

			Values = [];

			View.pop();

			View.DOM([`div`, [Models.splash]]);

			Puts.onload = () => {

				let Web = JSON.parse(Puts.response);

				if (Web.mug) window.location = `/`;
			}
		}]);
	}

	vaultSell (Arg) {

		document.querySelectorAll(`#vaultSell`).forEach((Sell, count)=> {

			this.listen([Sell, `click`, S => {

				View.pop();

				View.DOM([`div`, [Models.vaultSwap([Arg.swap[count], Arg.hold])]]);

				let local = Arg.swap[count][3];

				this.listen([document.querySelector(`#localSlot`), `keyup`, S => {

					let Slot = this.getSource(S);

					let a = Slot.value[Slot.value.length - 1];

					if (a === `.` && Slot.value.indexOf(`.`) !== Slot.value.length - 1) Slot.value = Slot.value.substr(0, Slot.value.length - 1);

					else if (!parseInt(a) && parseInt(a) !== 0 && a !== `.`) Slot.value = Slot.value.substr(0, Slot.value.length - 1);

					document.querySelector(`#coinSlot`).value = (Slot.value/local).toFixed(2)
				}]);

				this.listen([document.querySelector(`#coinSlot`), `keyup`, S => {

					let Slot = this.getSource(S);

					let a = Slot.value[Slot.value.length - 1];

					if (a === `.` && Slot.value.indexOf(`.`) !== Slot.value.length - 1) Slot.value = Slot.value.substr(0, Slot.value.length - 1);

					else if (!parseInt(a) && parseInt(a) !== 0 && a !== `.`) Slot.value = Slot.value.substr(0, Slot.value.length - 1);

					document.querySelector(`#localSlot`).value = (Slot.value*local).toFixed(2)
				}]);

				this.listen([document.querySelector(`#swap`), `click`, S => {

					let Values = 
						[(!Tools.slim(document.querySelector(`#coinSlot`).value))? false: Tools.slim(document.querySelector(`#coinSlot`).value),
						(!Tools.slim(document.querySelector(`#localSlot`).value))? false: Tools.slim(document.querySelector(`#localSlot`).value)];

					if (parseFloat(Values[0]) <= 0 || 2.5 > parseFloat(Values[0]) || parseFloat(Values[0]) > Arg.hold) return;

					if (Arg.swap[count][1] === `kes`) {

						if (Values[0] === false || typeof parseFloat(Values[0]) !== `number` || parseFloat(Values[1]) > 9000) return;

						let Puts = Tools.pull([
							`/json/web/`, {
							flag: `stk`,
							mug: Clients.mug,
							pull: `vaultSlot`}]);

						Puts.onload = () => {

							let Web = Tools.typen(Puts.response);

							if (Web.mug && Web.allows === Clients.mug) {

								if (Web.vaultSlot.id) {

									if (Web.mug && Web.open < 9 || Web.open > 16) {

										View.pop();

										View.DOM([`div`, [Models.swapOffline()]]);
									}

									if (Web.mug && Web.open >= 9 && Web.open < 16) {

										View.pop();

										View.DOM([`div`, [Models.vetSwap({amount: parseFloat(Values[1]), vaultSlots: [Web.vaultSlot]})]]);

										this.listen([document.querySelector(`#vetSwap`), `click`, S => {

											let Puts = Tools.pull([
												`/json/web/`, { 
													mug: Clients.mug, 
													param : {float: parseFloat(Values[0]), id: Arg.id, local: parseFloat(Values[1]), type: `stk`}, 
													pull: `vaultOut`}]);

											Values = [];

											View.pop();

											View.DOM([`div`, [Models.splash]]);

											Puts.onload = () => {

												let Web = JSON.parse(Puts.response);

												if (Web.mug) window.location = `/pools/BTC_USDT`;
											}
										}]);
									}
								}

								else window.location = `/account`;
							}
						}
					}
				}]);
			}]);
		});
	}

	vetC2s (Vow) {

		if (document.querySelector(`#vetC2s`) === null) return;

		this.listen([document.querySelector(`#vetC2s`), `click`, S => {

			View.pop();

			Clients.instance = Tools.coats([`vetC2s`, new Date().valueOf()]);

			if (Vow.type === `outVault`) {

				View.DOM([`div`, [Models.outVaultVetVow(Vow)]]);

				this.putVaultVow(Vow);
			}
		}]);
	}

	vetVow (Vow) {

		if (document.querySelector(`#vetVow`) === null) return;

		this.listen([document.querySelector(`#vetVow`), `click`, S => {

			View.pop();

			Clients.instance = Tools.coats([`vetVow`, new Date().valueOf()]);

			if (Vow.type === `inVault`) {

				View.DOM([`div`, [Models.inVaultVetVow(Vow)]]);

				this.putClientVow(Vow);
			}

			if (Vow.type === `outVault`) {

				let Puts = Tools.pull([
					`/json/web/`, {
						c2s: Vow, 
						mug: Clients.mug, 
						pull: `putC2s`}]);

				View.pop();

				View.DOM([`div`, [Models.splash]]);

				Puts.onload = () => {

					window.location = `/p2p/${Vow.md}`;
				}
			}
		}]);
	}

	vowSlot () {

		this.listen([document.querySelector(`#vowSlot`), `keyup`, S => {

			let Slot = this.getSource(S);

			let a = Slot.value[Slot.value.length - 1];

			if (a === `.` && Slot.value.indexOf(`.`) !== Slot.value.length - 1) Slot.value = Slot.value.substr(0, Slot.value.length - 1);

			else if (!parseInt(a) && parseInt(a) !== 0 && a !== `.`) Slot.value = Slot.value.substr(0, Slot.value.length - 1);
		}]);
	}

	slotin () {

		this.listen([document.querySelector(`#mugin`), `click`, Plot => {

			View.pop();

			Clients.instance = Tools.coats([`mugin`, new Date().valueOf()]);

			View.DOM([`div`, [Models.mugslot()]]);

			document.querySelector(`html`).style.overflow = `visible`;

			document.querySelector(`#app`).style.background = `#fff`;

			this.slotup();

			this.mugin();
		}]);
	}

	slotup () {

		this.listen([document.querySelector(`#mugup`), `click`, Plot => {

			View.pop();

			Clients.instance = Tools.coats([`mugup`, new Date().valueOf()]);

			View.DOM([`div`, [Models.mugslot()]]);

			this.slotin();

			this.mugup();
		}]);
	}
}

Events = new Events();