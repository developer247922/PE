window.playerCode={
	activateTherapist: function(numDays) {
		var player=State.active.variables.player;
		player.therapistMode=true;
		if (numDays < 4) {
			var d=State.active.variables.time.day+1;
			for (var i=0; i < numDays; i++) {
				player.therapistDays.push(d % 7);
				d+=Math.floor(7 / numDays);
			}
		} else {
			player.therapistDays.push([1,2,3,4,5]);
		}
	},	
	masturbate: {
		isReady: function() {
			var time=State.active.variables.time;
			var masturbate=State.active.variables.player.masturbate;
			var refractoryMinutes=180;
			return ((time.day * 1440 + time.hour * 60 + time.minute) - (masturbate.lastDay * 1440 + masturbate.lastHour * 60 + masturbate.lastMinute)) >= refractoryMinutes;
		},
		isCalm: function() {
			var time=State.active.variables.time;
			var masturbate=State.active.variables.player.masturbate;
			return (time.day * 1440 + time.hour * 60 + time.minute) <= (masturbate.DayTemp * 1440 + masturbate.HourTemp * 60 + masturbate.MinuteTemp);
		},
		isTeased: function() {
			var time=State.active.variables.time;
			var masturbate=State.active.variables.player.masturbate;
			return (time.day * 1440 + time.hour * 60 + time.minute) <= (masturbate.DayTease * 1440 + masturbate.HourTease * 60 + masturbate.MinuteTease);
		},
		sinceLastCum: function() {
			var time=State.active.variables.time;
			var masturbate=State.active.variables.player.masturbate;
			return (time.day * 1440 + time.hour * 60 + time.minute) - (masturbate.lastDay * 1440 + masturbate.lastHour * 60 + masturbate.lastMinute);
		},
		tease: function(hours) {
			var time=State.active.variables.time;
			var masturbate=State.active.variables.player.masturbate;
			masturbate.DayTease=time.day;
			masturbate.HourTease=time.hour;
			masturbate.MinuteTease=time.minute;
			masturbate.HourTease+=hours;
			while (masturbate.HourTease >= 24) {
				masturbate.DayTease++;
				masturbate.HourTease-=24;
			}
		},
		tempRelief: function(hours) {
			var time=State.active.variables.time;
			var masturbate=State.active.variables.player.masturbate;
			if (this.isCalm()) {
				return;
			}
			window.playerCode.changeArousal(5);
			State.active.variables.flags.forcedHorny=false;
			masturbate.DayTemp=time.day;
			masturbate.HourTemp=time.hour;
			masturbate.MinuteTemp=time.minute;
			masturbate.HourTemp+=hours;
			while (masturbate.HourTemp >= 24) {
				masturbate.DayTemp++;
				masturbate.HourTemp-=24;
			}
		},
		cum: function() {
			var time=State.active.variables.time;
			var masturbate=State.active.variables.player.masturbate;
			window.playerCode.changeArousal(-100);
			window.playerCode.setStatus("Satisfied",3,0);
			State.active.variables.flags.forcedHorny=false;
			masturbate.lastDay=time.day;
			masturbate.lastHour=time.hour;
			masturbate.lastMinute=time.minute;
		}
	},
	changeArousal: function(Delta) {
		var player=State.active.variables.player;
		player.arousal=Math.floor(player.arousal + Delta);
		player.arousal=Math.max(player.arousal, 0);
		player.arousal=Math.min(player.arousal, 100);
	},
	upArousalTo: function(Delta, Max) {
		var player=State.active.variables.player;
		var change=Math.max(Max - player.arousal, 0);
		player.arousal=Math.floor(player.arousal + change);
		player.arousal=Math.max(player.arousal, 0);
		player.arousal=Math.min(player.arousal, 100);
	},
	setStatus: function(string, scenes, hours) {
		var status=State.active.variables.status;
		var time=State.active.variables.time;
		status.text=string;
		status.scenesCounter=scenes;
		status.endDay=time.day;
		status.endHour=time.hour+hours;
		status.endMinute=time.minute;
		while (status.endHour >= 24) {
			status.endDay++;
			status.endHour-=24;
		}
	},
	checkStatus: function() {
		var status=State.active.variables.status;
		var time=State.active.variables.time;
		if (State.active.variables.status.text != "") {
			if (((time.day * 1440 + time.hour * 60 + time.minute) > (status.endDay * 1440 + status.endHour * 60 + status.endMinute)) || status.scenesCounter <= 0) {
				State.active.variables.status.text="";
				return false;
			}
			status.scenesCounter--;
			return true;
		}
		return false;
	},
	isHalfHorny: function() {
		return (!this.isNotHorny() && !this.isHorny());
	},
	isNotHorny: function() {
		return State.active.variables.player.arousal < 20;
	},
	isHorny: function() {
		return State.active.variables.player.arousal >= 50;
	},
	hornyLevel: function() {
		if (this.isNotHorny()) {return 0;}
		if (this.isHalfHorny()) {return 1;}
		if (this.isHorny()) {return 2;}
		return 0;
	},
	isMind_0: function(patreonCompliant) {
		// Innocent - PC is inexperienced and rather shy.
		return this.isMind(patreonCompliant) == 0;
	},
	isMind_1: function(patreonCompliant) {
		// Curious - PC acts curious, but is not comfortable with suggesting lewd stuff himself.
		return this.isMind(patreonCompliant) == 1;
	},
	isMind_2: function(patreonCompliant) {
		// Corrupted - PC's deepest desires are brought to surface and amplified. Welcomes feminization, except for too extreme stuff. After experiencing various types of sexual intercourse becomes cock-addicted.
		return this.isMind(patreonCompliant) == 2;
	},
	isMind: function(patreonCompliant) {
		/* originally, isMind() had no parameter
		 * then the team had to remove all instances of force, bribery and hypnosis from the game 
		 * in order to comply with Paylal and Patreon standards
		 * as a result, the player character is now enthusiastic (2) by default
		 * only scenes in which the player character does not feel forced should call isMind(true)
		 */
		if (patreonCompliant) {
			return Math.min(2, Math.floor(State.active.variables.player.sexualAcceptance / 10));
		} else {
			return 2;
		}
	},
	isMaid: function() {
		return (State.active.variables.player.perversion.guardian >= 5);
	},
	isButtslut: function() {
		return (State.active.variables.player.perversion.teacher >= 8);
	},
	isWaxed: function() {
		return (State.active.variables.body.bodyhair.level == 1);
	},
	isHairless: function() {
		return (State.active.variables.body.bodyhair.level >= 2);
	},
	isHairy: function() {
		return (State.active.variables.body.bodyhair.level == 0);
	},
	isInChastity: function() {
		return window.wardrobeFuncs.isItemMasterWearing('chastity');
	},
	isLockedInChastity: function() {
		return (window.wardrobeFuncs.isItemMasterWearing('chastity') &&
		        State.active.variables.flags.chastityLocked);
	},
	haveHaircut: function() {
		return (State.active.variables.body.hairstyle.level > 0);
	},
	hairstyle: function() {
		return State.active.variables.body.hairstyle.level;
	},
	scoreMakeup: function() {
		return State.active.variables.body.makeup.level;
	},
	scoreBoobs: function() {
		return State.active.variables.body.boobs.level;
	},
	scoreAss: function() {
		return State.active.variables.body.ass.level;
	},
	scoreLips: function() {
		return State.active.variables.body.lips.level;
	},
	scoreAnalSmooth: function() {
		return State.active.variables.body.anal.level;
	},
	haveMakeup: function() {
		return (State.active.variables.body.makeup.level > 0);
	},
	haveBimboMakeup: function() {
		return (State.active.variables.body.makeup.level >= 3);
	},
	haveHeavyMakeup: function() {
		return (State.active.variables.body.makeup.level == 4);
	},
	havePermanentMakeup: function() {
		return (State.active.variables.body.makeup.permLevel > 0 || State.active.variables.body.makeup.semiLevel > 0);
	},
	haveManicure: function(){
		return (State.active.variables.body.manicure.level > 0);
	},
	haveGirlyFace: function() {
		return (State.active.variables.body.makeup.level > 0 || State.active.variables.body.face.level > 0);
	},
	haveBoobs: function() {
		return (State.active.variables.body.boobs.level > 0);
	},
	haveBplus: function() {
		return (State.active.variables.body.boobs.level > 1);
	},
	haveCplus: function() {
		return (State.active.variables.body.boobs.level > 2);
	},
	haveDplus: function() {
		return(State.active.variables.body.boobs.level > 3);
	},
	haveLips: function() {
		return (State.active.variables.body.lips.level > 0);
	},
	haveAss: function() {
		return (State.active.variables.body.ass.level > 0);
	},
	obviousFemaleAppearance: function() {
		var body=State.active.variables.body;
		var fo=window.wardrobeFuncs.getWornItem('outerwear').isFemale;
		var fs=window.inventoryFuncs.hasTag(window.wardrobeFuncs.getWornItem('shoes'), 'slutty');
		var e=window.wardrobeFuncs.getWornItem('earring');
		if (fo || fs || e || body.makeup.level>1 || body.hairstyle.level>1 || body.boobs.level>1 || body.lips.level>1 || body.manicure.level>0) {
			return true;
		}
		return false;
	},    
	slutScoreBasic: function() {
		var score=0;
		var body=State.active.variables.body;
		var shoes=window.wardrobeFuncs.getWornItem('shoes');
		var stilettos=(window.wardrobeFuncs.isItemMasterWearing('stripperHeels') || window.wardrobeFuncs.isItemMasterWearing('maidDress'));
		var outerwear=window.wardrobeFuncs.getWornItem('outerwear');
		var underwear=window.wardrobeFuncs.getWornItem('underwear');
		var buttplug=window.wardrobeFuncs.getWornItem('buttplug');
		var chastity=window.wardrobeFuncs.getWornItem('chastity');
		var earring=window.wardrobeFuncs.getWornItem('earring');
		// Score
		if ((body.makeup.level>=4 && body.lips.level>=2 && body.boobs.level>=4 && body.ass.level>=2) || (body.makeup.level>=4 && body.boobs.level>=4 && body.lips.level>=1 && body.ass.level>=1 && (earring && window.itemFuncs.hasTag(earring, 'slutty')) && (stilettos))) {
			score=9;
			return score;
			// total whore
		}
		if (((body.makeup.level>=4 && (earring && window.itemFuncs.hasTag(earring, 'slutty')) && (stilettos)) || (body.makeup.level>=4 && (body.lips.level>=2 || body.boobs.level>=4 || body.ass.level>=2))) || (body.makeup.level>=2 && body.boobs.level>=3 && body.lips.level>=1 && body.ass.level>=1 && (earring && window.itemFuncs.hasTag(earring, 'slutty')) && (stilettos))) {
			score=8;
			return score;
			// whorish girl
		}
		if (body.makeup.level>=4 || (body.makeup.level>=3 && (stilettos)) || (body.makeup.level>=3 && body.boobs.level>=3 && body.lips.level>=1 && body.ass.level>=1) || (body.makeup.level>=2 && body.boobs.level>=3 && body.lips.level>=1 && (earring) && (shoes && window.itemFuncs.hasTag(shoes, 'slutty')))) {
			score=7;
			return score;
			//slutty girl
		}
		if (this.haveGirlyFace() && body.hairstyle.level>1 && body.lips.level>=1 && (body.boobs.level>=3 || ((body.boobs.level>=2 || body.ass.level>=1) && (shoes && window.itemFuncs.hasTag(shoes, 'slutty'))))) {
			score=6;
			return score;
			//sexy girl
		}
		if (this.haveGirlyFace() && body.hairstyle.level>1 && (body.boobs.level>=2 || body.lips.level>=1 || body.ass.level>=1)) {
			score=5;
			return score;
			//ordinary girl
		}
		if (this.haveGirlyFace() || (body.hairstyle.level>1 && body.makeup.level>=2) || body.boobs.level>=2) {
			score=4;
			return score;
			//plain looking girl
		}
		if (body.hairstyle.level>1 || (body.hairstyle.level==1 && body.bodyhair>=2 && (body.boobs.level==1 || body.manicure.level==1 || body.makeup.level>=2))) {
			score=3;
			return score;
			//very feminine boy
		}
		if (body.boobs.level==1 || body.manicure.level==1 || (body.bodyhair>=2 && (!outerwear || (outerwear && outerwear.isFemale)))) {
			score=2;
			return score;
			//feminine boy
		}
		if ((underwear && underwear.isFemale) || (chastity) || (buttplug)) {
			score=1;
			return score;
			//ordinary boy
		}
		return score;
	},
	slutScore: function() {
		var score=this.slutScoreBasic();
		var outerwear=window.wardrobeFuncs.getWornItem('outerwear');
		if (outerwear) {
			if (outerwear.isFemale) {
				score+=10;
				}
			if (window.itemFuncs.hasTag(outerwear, 'slutty')) {
				score+=10;
				}
		}
		return score;
	},
	heelsCheck: function() {
		var shoes=window.wardrobeFuncs.getWornItem('shoes');
		var player=State.active.variables.player;
		if (shoes && window.itemFuncs.hasTag(shoes, 'heels')) {
			if (shoes.daring > 6) {
				if ((window.randomCode.getIntInclusive(0, 10) >= player.heelsSkill) && (window.randomCode.getIntInclusive(0, 2) == 0)) {
					player.heelsSkill++;
					State.active.variables.flags.heelsFall=true;
					return true;
				}
				if (window.randomCode.getIntInclusive(0, 9) >= player.heelsSkill) {
					player.heelsSkill++;
				}
				return false;
			}
			if (shoes.daring > 4) {
				if ((window.randomCode.getIntInclusive(0, 5) >= player.heelsSkill) && (window.randomCode.getIntInclusive(0, 2) == 0)) {
					player.heelsSkill++;
					State.active.variables.flags.heelsFall=true;
					return true;
				}
				if (window.randomCode.getIntInclusive(0, 4) >= player.heelsSkill) {
					player.heelsSkill++;
				}
				return false;
			}
		}
		return false;
	},
	payTuition: function() {
		var player=State.active.variables.player;
		player.money-=Math.max(0, State.active.variables.tuitionAmount-player.tuitionDiscount);
		player.tuitionDiscount=0;
		State.active.variables.tuitionAmount=window.playerCode.nextTuitionAmount();
		State.active.variables.flags.tuitionPaid=true;
	},
	payTuitionPartial: function() {
		var player=State.active.variables.player;
		player.tuitionDiscount+=player.money;
		player.tuitionDiscount-=State.active.variables.tuitionAmount;
		player.money=0;
		State.active.variables.flags.tuitionPaid=true;
		State.active.variables.flags.tuitionFail=true;
		State.active.variables.tuitionAmount=window.playerCode.nextTuitionAmount();
	},
	payTuitionRefusal: function() {
		var player=State.active.variables.player;
		player.tuitionDiscount-=State.active.variables.tuitionAmount;
		State.active.variables.flags.tuitionPaid=true;
		State.active.variables.flags.tuitionFail=true;
		State.active.variables.tuitionAmount=window.playerCode.nextTuitionAmount();
	},
	nextTuitionAmount: function() {
		var player=State.active.variables.player;
		return Math.min(State.active.variables.tuitionAmount + player.tuitionIncrease, 200*State.active.variables.flags.tuitionFactor);
	},
	calculateTuitionIncrease: function() {
		var player=State.active.variables.player;
		var vars = State.active.variables;
		
		player.tuitionIncrease = 0;
		if (!vars.flags.holdPaymentIncrease) {
			if (player.perversion.teacher < 3) { player.tuitionIncrease = 10*State.active.variables.flags.tuitionFactor; return; }
			if (player.perversion.teacher < 5) { player.tuitionIncrease = Math.floor(15*State.active.variables.flags.tuitionFactor); return; }
			if ((player.perversion.teacher == 5) && (player.perversion.teacherCooldown < 2)) { player.tuitionIncrease = 0; return; }
			if (player.perversion.teacher < 7) { player.tuitionIncrease = 20*State.active.variables.flags.tuitionFactor; return; }
			
			player.tuitionIncrease = 30*State.active.variables.flags.tuitionFactor;
		} else{
			vars.flags.holdPaymentIncrease = false; 
			return;
		}
	},

	clothesOverride: function() {
		/* Check for wet panties */
		if (State.active.variables.flags.laundryAccident) {
			window.wardrobeFuncs.removeItemMaster('plainPanties');
			window.wardrobeFuncs.removeItemMaster('sexyPanties');
			window.wardrobeFuncs.removeItemMaster('latexPanties');
		}
		/* Forcing on Maid stuff */
		if (window.wardrobeFuncs.isItemMasterWearing('maidDress')) {
			if (State.active.variables.flags.gTrialBalletHeels) {
				window.wardrobeFuncs.wearRandomItemByMaster('balletHeels');
			} else {
				if (State.active.variables.flags.gTrialLatexMaid) {
					window.wardrobeFuncs.wearRandomItemByMaster('heels_stripper_39');
				} else {
					window.wardrobeFuncs.wearItemVariant('heels_39');
				}
			}
			
			if (State.active.variables.flags.gTrialLatexMaid) {
				if (!window.wardrobeFuncs.isItemMasterWearing('latexStockings')) {
					window.wardrobeFuncs.wearRandomItemByMaster('stockings_latex_39');
				}
			} else {
				window.wardrobeFuncs.wearRandomItemByMaster('stockings_39');
			}
			if (window.wardrobeFuncs.isItemMasterWearing('cheerBriefs')) {
				window.wardrobeFuncs.removeItemMaster('cheerBriefs');
			}
		}
	},
	deleteQuickSlot: function(slot) {
		var quickS=State.active.variables.quickSlot;
		var max=Object.keys(quickS).length - slot;

		for (var i=0; i < max; i++) {
			var n=slot+i;
			var n2=slot+i+1;
			if (n2 >= State.active.variables.quickSlot.length) {
				quickS[Object.keys(quickS)[n]].types=[];
				quickS[Object.keys(quickS)[n]].clothes=[];
				return;
			}
			if ((quickS[Object.keys(quickS)[n2]].clothes.length == 0) || (!quickS[Object.keys(quickS)[n2]].extra)) {
				quickS[Object.keys(quickS)[n]].types=[];
				quickS[Object.keys(quickS)[n]].clothes=[];
				return;
			}
			quickS[Object.keys(quickS)[n]].name=quickS[Object.keys(quickS)[n2]].name;
			quickS[Object.keys(quickS)[n]].types=quickS[Object.keys(quickS)[n2]].types;
			quickS[Object.keys(quickS)[n]].clothes=quickS[Object.keys(quickS)[n2]].clothes;
		}
	},
	checkGameSkill: function (){
		var player=State.active.variables.player;
		var skillLevel = player.gameSkill;
		return skillLevel;
	},
	improveGameSkill: function(){
		var player=State.active.variables.player;
		var skillLevel = player.gameSkill;
		var skillImprove = Math.floor((Math.random() * 3) + 1);
		player.gameSkill = skillLevel + skillImprove;
		return skillImprove;
	},
}
