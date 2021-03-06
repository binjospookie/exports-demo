import { Dictionary, String } from "@some/vendors/contract";
import { createStore, createEvent } from "@some/vendors/state";

import type { Static } from "@some/vendors/contract";

const dataScheme = Dictionary(String);
type StoreState = Static<typeof dataScheme>;

export const add = /*#__PURE__*/ createEvent<unknown>();
export const $cool = /*#__PURE__*/ createStore<StoreState>({}).on(
  add,
  (state, payload) =>
    dataScheme.guard(payload) ? { ...state, ...payload } : undefined
);
