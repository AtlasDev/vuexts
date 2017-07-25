import { Store } from './';

export function State(target: Store, propertyKey: string): void {
  console.log(target.state);
  let val = target[propertyKey];

  Object.defineProperty(target, propertyKey, {
    get: () => val,
    set: newVal => {
      console.log(target);
      // target.store[propertyKey] = val;
      val = newVal;
    },
  });
}
