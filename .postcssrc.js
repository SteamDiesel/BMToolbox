module.exports = {
    "plugins": [
        require ('tailwindcss')('./tailwind.config.js'),
        require ('autoprefixer')(),
        // require ('@fullhuman/postcss-purgecss')({
        //     content: [
        //         '**/*.vue',
        //         './public/index.html',
        //     ],
        //     css: ['css/styles.css'],
        //     defaultExtractor: content => content.match(/[A-Za-z0-9-:/]+/g) || []
        // }),

    ]
}