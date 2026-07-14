# Zero To Advance React - Common Module Guide

This repository is a learning workspace that moves from core JavaScript concepts into modern React patterns, testing, Redux, TypeScript, and basic tooling.

## Repo Overview

The repo currently contains these module folders:

- `module2` - core JavaScript practice files
- `module6/react-routing` - React Router examples
- `module8` - React design patterns, HOC, and custom hooks
- `module9` - React lifecycle, hooks, context, and i18n basics
- `module10` - React 19 feature experiments
- `module11/react-query-template` - React Query with routing and API state
- `module12` - JavaScript and React testing examples
- `module13` - Redux, TypeScript, React + TypeScript, webpack, and small Node demos

## Module Summary

| Module | Focus | Short Description |
| --- | --- | --- |
| `module2` | JavaScript fundamentals | Small standalone files covering `call/apply/bind`, `slice`, spread/rest, ternary and short-circuiting, booleans/truthy-falsy, prototypes/inheritance, `Set`/`Map`, event bubbling/delegation, promises/fetch, memoization, getters/setters, and throttle/event examples in HTML files. |
| `module6/react-routing` | React Router | A Vite React app with routing basics: navbar navigation, nested admin routes, dynamic product detail routes, contact page, and a not-found page. |
| `module8` | React patterns | Examples of container/presentational thinking, a custom `useWindowSize` hook, a fetch hook, protected UI through an HOC, and routed dashboard/profile pages. |
| `module9` | React hooks and lifecycle | Practice app for class vs function lifecycle ideas, `useEffect`, `useRef`, `useReducer`, `useMemo`, `useId`, context usage, and basic translation/i18n setup. |
| `module10` | React 19 concepts | Experimental examples using `Suspense`, the `use()` API for async data, `useActionState` for form handling, and `useOptimistic` for optimistic UI updates. |
| `module11/react-query-template` | Server state with React Query | Routing app extended with TanStack Query for fetching todos/users, infinite query pagination, optimistic mutation flow, and reusable API client hooks. |
| `module12/test` | Jest unit testing | Very small CommonJS example for testing a square-like function with Node-style exports. |
| `module12/test-demo` | CRA testing demo | Create React App sample that fetches user data and includes hook/component tests. |
| `module12/React-testing-login-app` | Form testing | Login form example with validation, reset behavior, and React Testing Library tests plus snapshots. |
| `module12/react-testing` | Vite + Vitest testing | React Testing Library examples for rendering, assertions, input change events, and button interaction. |
| `module12/npm-testing` | Test file organization | Simple npm-based testing practice with multiple test file naming styles and a small `Users` test area. |
| `module13/redux` | Redux Toolkit + Thunk | Counter demo using Redux Toolkit, `createSlice`, `createAsyncThunk`, `useSelector`, and `useDispatch`. |
| `module13/TypeScript` | TypeScript basics | Plain TypeScript file covering types, arrays, tuples, optional params, interfaces, `Record`, unions, aliases, generics, and `any`. |
| `module13/react-typescript` | React with TypeScript | Vite React TypeScript sample with typed component props and form component examples. |
| `module13/webpack` | Webpack starter | Minimal webpack project that imports a package and logs sample data. |
| `module13/GitHub` | Small Node/JS snippets | Simple JavaScript files used for basic runtime or GitHub-related practice. |

## Best Files To Start With

- `module2/*.js` for topic-by-topic JavaScript revision
- `module6/react-routing/src/components/Routes/AllRoutes.jsx` for routing structure
- `module8/src/App.jsx` for custom hooks and HOC usage
- `module9/src/App.jsx` for hooks and context overview
- `module10/src/App.jsx` and `module10/src/Components/` for React 19 patterns
- `module11/react-query-template/src/hooks/` for React Query usage
- `module12/*` for testing setups across different tools
- `module13/redux/src/App.jsx` and `module13/redux/src/features/Counter/countrSlice.js` for Redux flow
- `module13/TypeScript/index.ts` for TypeScript syntax revision
- `module13/react-typescript/src/App.tsx` for React + TypeScript basics

## How To Run

Most React apps in this repo use Vite:

```bash
npm install
npm run dev
```

Run those commands inside the specific project folder, for example:

- `module6/react-routing`
- `module8`
- `module9`
- `module10`
- `module11/react-query-template`
- `module12/react-testing`
- `module13/redux`
- `module13/react-typescript`

Some testing projects use Create React App or plain npm test setups, so use the scripts defined inside each local `package.json`.

## Notes

- Module numbering is not continuous in this repo; only the folders listed above are currently present.
- Several module-level `README.md` files are still default scaffolds, so this root file is the practical overview of the actual learning content.
