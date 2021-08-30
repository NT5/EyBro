var ApiPlugin = {
    name: 'Server API Interface',
    create: function () {
        const app = this;

        // Métodos.
        // POST
        app.api.post = function (request_url, data) {
            let request_uri = app.api.config.api_url;
            return new Promise(function (resolve, reject) {
                app.request({
                    url: `${request_uri}${request_url}`,
                    method: 'POST',
                    contentType: 'application/x-www-form-urlencoded',
                    dataType: 'json',
                    data: data
                }).then((response) => {
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });
        }

        // GET
        app.api.get = (request_url) => {
            let request_uri = app.api.config.api_url;
            return new Promise(function (resolve, reject) {
                app.request({
                    url: `${request_uri}${request_url}`,
                    method: 'GET',
                    dataType: 'json'
                }).then((response) => {
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });
        };

        // API Info
        app.api.info = () => {
            return app.api.get('/info');
        };

        // Visitante
        app.api.visitante = {
            api_area: `/visitante`
        };
        app.api.visitante.registrar = (data) => {
            let request_url = `${app.api.visitante.api_area}/registreVisitante`;
            return app.api.post(request_url, data);
        }
    },
    instance: {
        api: {
            config: {
                api_url: (process.env.NODE_ENV === 'development' ? 'http://10.10.1.20/eybro-api/ajax' : 'https://eybrosoloentrevosyyo.mzdevocotal.com/api/ajax')
            }
        }
    },
    on: {
        init: function () {
            console.log('[+] Plugin API cargado');
            console.log(`[+] Enviando datos a: ${this.config.api_url}`);
        }
    }
};

export default ApiPlugin;