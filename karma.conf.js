module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine-jquery', 'jasmine', 'jasmine-matchers'],
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine-jquery',
      'karma-jasmine',
      'karma-jasmine-matchers'
    ],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      '*/static/**/*.js',
      '*/tests/**/*.spec.js',
      { pattern: '*/tests/**/*.html', included: false, served: true }
    ],
    exclude: [
      '*/static/**/lib/*.min.js',
    ],
    singleRun: true,
    reporters: ['progress']
  });
};
