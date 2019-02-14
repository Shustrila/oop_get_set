export default class Character {
  constructor(obj) {
    if (obj === undefined) throw new TypeError('forgot to pass an object');
    this._health = obj.health;
    this._attack = obj.attack;
    this._defence = obj.defence;
    this.countAttak = 3;
    this.powerMode = false;
  }

  get _countAttak() {
    return this.countAttak;
  }

  set _powerMode(state) {
    if (typeof state !== 'boolean') throw new TypeError('setter is not a boolean');
    this.powerMode = (this._countAttak >= 0) ? state : false;
  }

  get _powerMode() {
    return this.powerMode;
  }

  attackCharacter() {
    if (this.countAttak > 0) {
      this.countAttak -= 1;
    } else {
      this.countAttak = -1;
      this.powerMode = false;
    }
  }

  get health() {
    return this._powerMode ? this._health * 2 : this._health;
  }

  get attack() {
    return this._powerMode ? this._attack * 2 : this._attack;
  }

  get defence() {
    return this._powerMode ? this._defence * 2 : this._defence;
  }
}
