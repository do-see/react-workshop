const gulp = require('gulp')

/* TRANSFORMER */
const browserify = require('browserify')
const watchify = require('watchify')
const babelify = require('babelify')

/* UTILS */
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const merge = require('utils-merge')

const config = {
  babel: {
    'presets': ['es2015', 'react', 'stage-1'],
    'plugins': ['transform-decorators-legacy', 'transform-runtime']
  },
  mainSrc: './src/main.js'
}

const debug = true

const bundleJs = (bundler) => {
  return bundler.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist'))
}

gulp.task('watch', () => {
  const args = merge(watchify.args, { debug })
  const bundler = watchify(browserify(config.mainSrc, args)).transform(babelify, config.babel)
  bundleJs(bundler)

  bundler.on('update', () => {
    bundleJs(bundler)
  })
})
