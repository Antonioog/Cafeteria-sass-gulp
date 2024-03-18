const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

function css(done) {
  //compilar sass
  // pasos: 1- Identificar archivo, 2- Compilarla, 3- Guardar el .css

  //Identificamos el archivo.
  src("src/scss/app.scss")
    .pipe(sass())
    .pipe(postcss([autoprefixer]))
    .pipe(dest("build/css"));
  done();
}

function dev() {
  watch("src/scss/**/*.scss", css);
}

exports.css = css;
exports.dev = dev;
exports.default = series(css, dev);

//Series - Se inicia una tarea, y hasta que finaliza, inicia la siguiente.
//Parallel - Todas las tareas inician al mismo tiempo
