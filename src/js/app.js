import $ from 'dom7';
import Framework7 from './framework7-custom.js';

// Import F7 Styles
import '../css/framework7-custom.less';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.less';

// Import Routes
import routes from './routes.js';

// Import Store
import store from './store.js';

// Plugins
import configPlugin from './plugins/config';

Framework7.use([configPlugin]);

// Import main app component
import App from '../app.f7';

var app = new Framework7({
  name: 'EyBro', // App name
  theme: 'aurora', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component
  // App store
  store: store,
  // App routes
  routes: routes,
  on: {
    init: function () {
      var f7 = this;
      console.log('[*] Carga del App finalizada');
      // Carga la instancia F7 globalmente para el entorno de desarrollo
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[+] Se esta trabajando en un ambiente de desarrollo`);
        window.f7 = f7;
      }
    },
  },
  dialog: {
    // set default title for all dialog shortcuts
    buttonOk: 'Ok',
    buttonCancel: 'Cancelar'
  },
  // Register service worker (only on production build)
  serviceWorker: process.env.NODE_ENV === 'production' ? {
    path: '/service-worker.js',
  } : {},
});