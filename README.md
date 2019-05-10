This is a POC on how to use native JS & hooks to execute state-management as opposed to several redux solutions.

It makes some assumptions about how the application will be used: specifically, it is _client-side rendered only_. This allows for the use of a globally accessible store and therefore direct access to `store.subscribe` and `store.dispatch`.

the `master` branch is using `react-redux` & `redux-thunk`. the `no-thunk` branch is a refactoring of that approach to use hooks instead.

## Points of Interest

1. `src/AppBody.tsx` – the app's body consuming a `user` object
2. `src/AppHeader.tsx` – the header with `signIn()` logic attached to the "form"
3. `src/store/actions.ts:48` – `useAccountManagement` the replacement of connect w/ an encapsulated api.
