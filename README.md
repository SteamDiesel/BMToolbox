# lite.bdfi.app
This is the lite minimum viable product for bdfi, built as a single page application. This SPA connects to it's sibling API backend code base at <a href="https://github.com/SteamDiesel/lite-resources">SteamDiesel/lite-resources</a>

### Deployed SPA
This project is deployed on Netlify and installable as an SPA. Visit at <a href="https://gallant-fermat-f884cb.netlify.app/">https://gallant-fermat-f884cb.netlify.app/</a>.

For the application to work, it needs this SPA to be deployed and domain mapped to https://lite.bdfi.app and the laravel resources backend live at https://lite-resources.bdfi.app/ (OR change the api address in /src/store/modules/environment.js)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
