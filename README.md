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

- install using following NPM script

``` 
    npm i login-signup-react

```

- and then go to your `package.json` file 
- find `scripts`
- add following command

```json

"SignInUp": "node node_modules/login-signup-react/index.js --destination=src/components"

```


``` json  

  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview",
    "SignInUp": "node node_modules/login-signup-react/index.js --destination=src/components"
  },

```

- after that run the command

```

    npm run SignInUp

```

- after you running the command you can see a folder `LoginSignUp` in path `src/components`

