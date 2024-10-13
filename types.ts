// Primitive types
export type Value = string | number | boolean;
export type NullableValue = Value | null;
type Encoder = (value: Value) => string;

type JoinerOptions = {
  spacer?: string;
  encoder?: Encoder;
};

export type Joiner = (values: NullableValue[], options?: JoinerOptions) => string;
