import Selector from './selector';

class Nav {

	constructor (iterr, tm) {
		this.selector = new Selector();
		this.iterr = iterr;
		this.tm = tm;
	}

	stopShow () {
		clearTimeout(this.tm);

		this.iterr = 30;
	}

	getRealTop (el) {
		var elm = el;
		var realTop = 0;

		do {
			realTop += elm.offsetTop;
			elm = elm.offsetParent;
		}
		while (elm);

		return realTop;
	}

	getPageScroll () {
		var pgYoff = this.selector.w.pageYOffset ||
				this.selector.d.body.scrollTop ||
				this.selector.d.documentElement.scrollTop;

		return pgYoff;
	}

	anim  (id) {
		var element = this.selector.find(id) || null;
		var eOff, pOff, tOff, scrVal, pos, dir, step;
		var self = this;

		this.stopShow();

		if (element === null) {
			return;
		}


		eOff = element.offsetTop;
		tOff = this.getRealTop(element.parentNode);
		pOff = this.getPageScroll();

		if (pOff === null || isNaN(pOff) || pOff === 'undefined') {
			pOff = 0;
		}

		scrVal = eOff - pOff;

		if (scrVal < tOff) {
			pos = (pOff + tOff) - eOff;
			dir = -1;
		}

		if (scrVal > tOff) {
			pos = (eOff - tOff - pOff);
			dir = 1;
		}

		if (scrVal !== tOff) {
			step = ~~((pos / 4) + 1) * dir;

			if (this.iterr > 1) {
				this.iterr -= 1;
			} else {
				this.itter = 0;
			}

			this.selector.w.scrollBy(0, step);
			this.tm = this.selector.w.setTimeout(function () {
				self.anim(id);
			}, this.iterr);

		}

		if (scrVal === tOff) {
			this.stopShow();
			return;
		}
	}
}

export default Nav;

