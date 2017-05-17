module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine-jquery', 'jasmine'],
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine-jquery',
      'karma-jasmine'
    ],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      '*/static/**/*.js',
      '*/tests/*/*.spec.js'
    ],
    singleRun: true,
    reporters: ['progress']
  });
};
