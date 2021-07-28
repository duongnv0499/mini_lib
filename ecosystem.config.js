module.exports = {
    apps: [
        {
            script: 'yarn start',
            watch: 'src',
            name: 'library',
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
}
