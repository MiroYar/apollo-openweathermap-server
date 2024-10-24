import type { Joiner, NullableValue, Value } from './types';

const joiner: Joiner = (values, options) => {
  const { spacer = ',', encoder = (value: Value) => String(value) } = options || {};
  return values.reduce((res, key) => {
    if (key) res = String(res === null ? '' : res) + spacer + encoder(key);
    return res;
  }) as string;
};

export const parameter = (key: string, value: NullableValue) => (value ? `${key}=${encodeURIComponent(value)}` : null);
export const joinerValues = (array: NullableValue[]) => joiner(array, { encoder: encodeURIComponent });
export const joinerParameters = (array: NullableValue[]) => joiner(array, { spacer: '&' });
