# Getting Started with React-TypeScript App with Redux & Tailwind CSS

## OUTLINE
- [How To Run This Project](#how-to-run-this-project)
- [Version Notes](#version-notes)
- [FAQ: Difference between - npm install & npm ci](#faq-difference-between-npm-install--npm-ci)
- [Description of Folder Structure](#description-of-folder-structure)
- [How to Create a Similar Project By Yourself](#how-to-create-a-similar-project-by-yourself)
  
#

## How To Run This Project

1. Clone this repository `git clone https://github.com/mukitul/react-learning-app-with-redux.git`
2. Run `cd react-learning-app-with-redux`
3. Run `npm ci` [It will install exact version of required libraries and store in node_modules folder]
4. Run `npm start`
5. Project will be launch here : [http://localhost:3004](http://localhost:3420)


## Version Notes
- `React v18`, `Router v6`, `TypeScript v4`


## FAQ: Difference between `npm install` & `npm ci`

```
npm ci
``` 

- This command installs exact version of the dependencies mentioned in the `package-lock.json` file.
- This command requires the existence of a `package-lock.json` and would print an error if it wasn't there.
- This command will produce an error when number of dependencies in `package-lock.json` and `package.json` are out of
  sync.

```
npm install / npm i
``` 

- This command installs latest/updated dependencies and overwrite `package.json` and `package-lock.json` file.
- This unknown behaviour may cause project to run using different version of dependencies across different machines.


## Description of Folder Structure
```text
src
|
|-- api-client (axios setup and intercepting related)
|
|-- components (all tsx files i.e. components - layouts,screens,pages,header,footer,)
|
|-- environment (production or staging related configuration)
|
|-- interface (data-type definition of state/different objects)
|
|-- redux-store (redux setup - epic, reducer, store)
|
|-- service (api call to backend services)
|
|-- utils (helper-functions, constants are here)   
```
## How to Create a Similar Project By Yourself

### Step-1: Command for Creating TypeScript-React App

```
npx create-react-app your-app-name --template typescript
```

### Step-2: Installation Command for Different Packages

Packages and installation command required for bootstrapping similar project -

```
npm install axios
```

```
npm install history
```

```
npm install redux react-redux
```

```
npm install redux-devtools-extension
```

```
npm install rxjs
```

```
npm install redux-observable
```

```
npm install @reduxjs/toolkit react-redux
```

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Official Guide for Tailwind
Setup: [https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app)

### Step-3: Create Root Reducer
Example: [rootReducer.ts](./src/redux-store/reducer/rootReducer.ts)

### Step-4: Create Root Epic
Example: [rootEpic.ts](./src/redux-store/epic/rootEpic.ts)

### Step-5: Create Redux Store
Example: [AppReduxStore.ts](./src/redux-store/AppReduxStore.ts)

### Step-6: Connect Redux-store with App
Example: [index.tsx](./src/index.tsx)

### Step-7: Connect BrowserRouter with App
Example: [index.tsx](./src/index.tsx)

### Step-8: Setup Routing of different component
Example: [App.tsx](./src/App.tsx)

### Step-9: Backend API integration
You will found fake store api here: [https://fakestoreapi.com/docs](https://fakestoreapi.com/docs)