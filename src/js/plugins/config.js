var configPlugin = {
    name: 'Configurator',
    create: function () {
        const app = this;
        const localStorage = app.form;

        const stored = app.form.getFormData(app.config.var_form);
        if (stored) {
            app.config = stored;
            console.log(`[*] Configuración cargada del cache`);
        }

        app.config.storeConfig = function (data = null) {
            localStorage.storeFormData(app.config.var_form, (data ? data : app.config));
            if (data) {
                app.config = data;
            }
            return app.config;
        };

        app.config.deleteConfig = function () {
            localStorage.removeFormData(app.config.var_form);
        };
    },
    instance: {
        config: {
            var_form: 'app_config',
            cuestionario_id: 1,
            api_url: (process.env.NODE_ENV === 'development' ? 'http://10.10.1.20/eybro-api/ajax' : 'https://eybro.mzdevocotal.com/api/ajax')
        }
    },
    on: {
        init: function () {
            console.log('[+] Plugin de configuración cargado');
        }
    }
};

export default configPlugin;