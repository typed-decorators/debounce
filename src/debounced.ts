import { debounce } from "lodash";

/**
 * Declare a function or method as `lodash.debounce(f, wait)`.
 *
 * @param wait The number of milliseconds to delay.
 * @see https://lodash.com/docs/4.17.11#debounce
 */
export function debounced<ProdedureType extends (...args: Array<any>) => void>(wait: number) {
  return (_target: any, _name: any, descriptor: TypedPropertyDescriptor<ProdedureType>): TypedPropertyDescriptor<ProdedureType> => {
    const { enumerable, configurable, value } = descriptor;

    return {
      enumerable,
      configurable,
      value: debounce(value!, wait),
    };
  };
}
