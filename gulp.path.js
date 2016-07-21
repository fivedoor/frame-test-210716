module.exports = function () {
    var client = './dist/';
    var dev = './src/';
    var root = './';

    var path = {
        /**
         * Files paths
         */

        client: client,
        root: root,

        // SOURCE FILES
        copy_src: './src/data/src/copy/copy_test.json',
        copy_encoded: './src/data/src/',
        data_src: './src/data/data.json',
        images_src: 'src/images/**/*.+(png|jpg|gif|svg)',
        sass_src: './src/scss/*.scss',

        // DEVELOPMENT
        sass_watch: 'src/scss/**/*.scss',
        css_temp: './src/css/',
        html_temp: 'src/*.html',
        njks_pages: 'src/pages/**/*.html',
        njks_temp: 'src/templates/**/*.html',

        // CLIENT FILES
        css: client + 'css',
        images: client + 'images/',
        index: client + 'index.html',

        // IMAGE HOSTING
        hosted_folder: "test/tesco/",

        //CLOUDINARY
        /**
         * optimized files
         */
        optimized: {
            app: 'app.js',
            lib: 'lib.js'
        },


        /**
         * Node settings
         */
        defaultPort: 7203,
        nodeServer: './src/server/app.js'


    };


    return path;
};
