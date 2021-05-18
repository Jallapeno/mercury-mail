module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                '@config': './src/config',
                '@useCases': './src/useCases',
                '@entities': './src/entities',
                '@providers': './src/providers',
                '@repositories': './src/repositories'
            }
        }]
    ],
    ignore: [
        '**/*.spec.ts'
    ]
}
