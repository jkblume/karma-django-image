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
      '*/tests/**/*.spec.js',
      { pattern: '*/tests/**/*.html', included: false, served: true }
    ],
    singleRun: true,
    reporters: ['progress']
  });
};
