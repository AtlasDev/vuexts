export class Store {
  public _state: { [key: string]: any };

  get state(): { [key: string]: any } {
    console.log('State received');

    return this._state || {};
  }

  set state(value: { [key: string]: any }) {
    console.log('State updated', value);
    this._state = value;
  }
}
