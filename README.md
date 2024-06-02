# Login SignUp React Template

- This NPM Package is Develop for ReactJS Frontend Developers to make development easy.
- The one Command make the all Login Sign Up interfaces

# Releases

## v1.0.0 - 27 May 2024

- Initial release of the Project
- only for Login(signin)

# IMPORTANT Notice

- This NPM package works only with <b>ReactJS + Vite + Tailwind CSS</b> Projects
- The Common Working NPM Package will be Released in the Future.

# How to use this NPM Package

- Before install the Package you must install following Packages

- - react-router-dom
- - axios

- after install above packages

- install using following NPM script

``` 
    npm i login-signup-react

```

- and then go to your `package.json` file 
- find `scripts`
- add following command

- IMPORTANT
- - Please use only on script according to your need
- - use the following scripts according to following script

- - if you use TailWind CSS with ReactJS use 

```json

    "SignInUpTW": "node -e \"require('login-signup-react').RunReactLoginSignInTW()\""

```
- - if you not use TailWind CSS with ReactJS use 

```json

    "SignInUp": "node -e \"require('login-signup-react').RunReactLoginSignIn()\"",


```

``` json  

  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview",
    "SignInUpTW": "node -e \"require('login-signup-react').RunReactLoginSignInTW()\""
  },

```



``` json  

  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview",
    "SignInUp": "node -e \"require('login-signup-react').RunReactLoginSignIn()\"",
  },

```

- after that run the command

```

    npm run SignInUp

```

- after you running the command you can see a folder `LoginSignUp` in path `src/components` in your Project

- after done this you have to update App.jsx file in the project

``` jsx


import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/LoginSignUp/SignIn"; // Importing the Templete the created by run npm package

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* declare the Route */}
        {/* the path can change whatever you want */}
        <Route path="/" element={<SignIn />} /> 


      </Routes> 
    </BrowserRouter>
  )
}
```



<hr>

# Screen Shorts 

<img src="ScreenShorts/signin.PNG">

<img src="ScreenShorts/signup.PNG">

# License and copyright notice of Package

- The Package Licensed Under ISC

# Developers and Designers

- [JehanKandy](https://github.com/BackendExpert)

- [Anupa Gamage](https://github.com/anupa1998)
