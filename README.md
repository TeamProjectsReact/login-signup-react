# Login SignUp React Template

- This NPM Package is Develop for ReactJS Frontend Developers to make development easy.
- The one Command make the all Login Sign Up interfaces

# Releases

## v1.0.0 - 27 May 2024

- Initial release of the Project
- only for Login(signin)

## v1.1.0 - 28 May 2024

- Updating Package
- Adding SignIn Interface

## v2.0.0 - 02 June 2024

- Updating Package
- Adding Custom CSS login and Signup Forms

## v3.0.0 - 04 June 2024

- Checking bugs and Errors

## v4.0.0-alpha1 - 19 June 2024

- Updating all Login and Sign Up templates set for MVC Development

## v4.0.0-alpha2 - 20 June 2024

- Updating Package
- Fixing Bugs 
- Updating Backend Development Enviroment
- Adding Backend Function for Login and SignUp
- - with Database
- - now working with Mysql witout MVC and With MVC


## v4.0.0 - 20 June 2024

- Updating Package
- Fixing Bugs 
- Updating Backend Development Enviroment
- Adding Backend Function for Login and SignUp
- - with Database
- - now working with Mysql witout MVC and With MVC

## v5.0.0 - 27 July 2024

- Updating Package
- 5th Major Release
- same as v4.0.0
- Updating is
- - developer no need to copy the commands in here to genarate backend and Front end
- - only thing is run the following command

``` js

npx create-login-SignUp

```

- - Then Select the option that you need


# IMPORTANT Notice

- This NPM package works with <b>ReactJS</b> Projects (from in v2.0.0)
- This NPM package works only with <b>ReactJS + Vite + Tailwind CSS</b> Projects (in v1.1.0)
- The Common Working NPM Package will be Released in the Future.

- The Backend is only in Mysql `without` MVC
- MVC, Mongodb will be added in future Releases

# How to use this NPM Package

- Important
- - use NPM scripts according to your needs
- - use only on script


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
- add following commands

- Use with Custom CSS
- Use Tailwind CSS


### Use with Custom CSS

```json

    "SignInUp": "node -e \"require('login-signup-react').RunReactLoginSignIn()\"",

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


<hr>


### Use Tailwind CSS

```json

    "SignInUpTW": "node -e \"require('login-signup-react').RunReactLoginSignInTW()\""

```


``` json  

  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview",
    "SignInUpTW": "node -e \"require('login-signup-react').RunReactLoginSignInTW()\""
  },

```

- after that run the command

```

    npm run SignInUpTW

```

- after you running the command you can see a folder `LoginSignUpTW` in path `src/components` in your Project

<hr>

## BackEnd 

### no-MVC (Mysql)

- After you install package

- add following command to you `package.json` file at `script`

``` js

  "SignInUpBackendnoMVC": "node -e \"require('login-signup-react').RunBackendMysqlNoMVC()\""

```

- and the run above command 

- after you can see `server` folder in your root folder 

- it is the backend 

- go inside the `server` folder and create file `.gitignore`

- and add 

```
node_modules

```

- after run 

```sh

  npm install

```

- then develop your mysql evniroment

  `ID int AI PK 
  username varchar(45) 
  email varchar(100) 
  password varchar(100) 
  role varchar(45) 
  create_at datetime 
  is_active int 
  is_lock int`

  - mysql table 



### with-MVC (Mysql)

- After you install package

- add following command to you `package.json` file at `script`

``` js

  "SignInUpBackendMVC": "node -e \"require('login-signup-react').RunBackendMysqlMVC()\""

```

- and the run above command 

- after you can see `server` folder in your root folder 

- it is the backend 

- go inside the `server` folder and create file `.gitignore`

- and add 

```
node_modules

```

- after run 

```sh

  npm install

```

- then develop your mysql evniroment

  `ID int AI PK 
  username varchar(45) 
  email varchar(100) 
  password varchar(100) 
  role varchar(45) 
  create_at datetime 
  is_active int 
  is_lock int`

  - mysql table 




- start the Project

- - both Frandend and Backend

# Screen Shorts 

- outputs are same in both scripts

<img src="ScreenShorts/signin.PNG">

<img src="ScreenShorts/signup.PNG">

# License and copyright notice of Package

- The Package Licensed Under ISC

# Developers and Designers

- [JehanKandy](https://github.com/BackendExpert)

- [Anupa Gamage](https://github.com/anupa1998)
