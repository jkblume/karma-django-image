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
      '*/static/jugendhaus/js/lib/jquery-3.2.1.min.js',
      '*/static/jugendhaus/js/*.js',
      '*/tests/**/*.spec.js',
      { pattern: '*/tests/**/*.html', included: false, served: true }
    ],
    singleRun: true,
    reporters: ['progress']
  });
};
