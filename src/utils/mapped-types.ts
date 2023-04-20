// type Developer = {
//   name: string;
// } & Record<string, any>;

type Developer = {
  name: string;
  [key: string]: string | number;
};

const quangson: Developer = {
  name: "Quang Sơn",
  age: 20,
  school: "GTVT",
};

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;

// Mapping Modifiers
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

//   type UnlockedAccount = {
//       id: string;
//       name: string;
//   }

// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;

//   type User = {
//       id: string;
//       name: string;
//       age: number;
//   }

// Key Remapping via as
type Getter<T> = {
  [P in keyof T as `on${Capitalize<string & P>}Change`]: (value: T[P]) => T[P];
} & {
  [P in keyof T as `on${Capitalize<string & P>}Focus`]: (value?: T[P]) => T[P];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

// onNameChange: (value: string) => void
// onAgeChange: (value: number) => void
// onLocationChange: (value: string) => void

type LazyPerson = Getter<Person>;

// Remove the 'kind' property
type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
};

interface Circle {
  kind: "circle";
  radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;

// type KindlessCircle = {
//     radius: number;
// }

// You can map over arbitrary unions, not just unions of string | number | symbol, but unions of any type:
type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
};

type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>;

// type Config = {
//     square: (event: SquareEvent) => void;
//     circle: (event: CircleEvent) => void;
// }

// Further Exploration
type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;

//   type ObjectsNeedingGDPRDeletion = {
//       id: false;
//       name: true;
//   }
