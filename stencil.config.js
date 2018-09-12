
exports.config = {
    namespace: 'helloworld',
    outputTargets: [
        { type: 'dist' },
        { type: 'www' }
    ],
    bundles: [
        { components: ['hello-world'] }
    ]
};

exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
  }
  