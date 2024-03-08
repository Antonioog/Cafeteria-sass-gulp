const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done) {
  //Compilar sass
  //pasos: 1 - identificar archivo, 2 - compilarla, 3 - Guardar el CSS.

  src("src/scss/app.scss").pipe(sass()).pipe(dest("build/css"));
  done();
}
exports.css = css;
