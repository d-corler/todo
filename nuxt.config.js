module.exports = {
    /*
	** Nuxt.js extensions
	*/
    modules: [
        '@nuxtjs/bulma',
        '@nuxtjs/axios',
        '@nuxtjs-ext/bulma-extensions'
    ],
    /*
	** Custom extensions
	*/
    plugins: [
        { src: '~plugins/vuex-persistedstate', ssr: false },
        { src: '~plugins/filters', ssr: true },
        { src: '~plugins/moment', ssr: true },
        { src: '~plugins/uniqid', ssr: true }
    ],
    axios: {
        baseURL: 'http://localhost:3001'
    },
    /*
	** Headers of the page
	*/
    head: {
        title: 'Todo',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Réalisation d‘une Todolist en vue.js avec Nuxt et Vuex' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
	** Customize the progress bar color
	*/
    loading: {
        color: '#00d1b2',
        height: '4px'
    },
    /*
	** Build configuration
	*/
    build: {
        /*
		** Run ESLint on save
		*/
        extend( config, { isDev, isClient } ) {
            if ( isDev && isClient ) {
                config.module.rules.push( {
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                } );
            }
        },
        /*
		** SCSS
		*/
        styleResources: {
            scss: './assets/scss/main.scss'
        },
        postcss: {
            plugins: {
                'postcss-custom-properties': false // Correction for Bulma
            }
        }
    }
};

