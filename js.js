const compra = ["pan", "leche", "queso", "naranjas", "agua"];
compra.push("Aceite de Girasol");
compra.pop();
console.log(compra);

const peliculas = [
  {
    titulo: "La vida es bella",
    director: "Roberto Benigni",
    fecha: new Date(1999, 01, 18),
  },
  {
    titulo: "Forrest Gump",
    director: "Robert Zemeckis",
    fecha: new Date(1994, 09, 06),
  },
  {
    titulo: "Home",
    director: "Tim Johnson",
    fecha: new Date(2015, 02, 26),
  },
];

const posteriores = peliculas.filter(
  (pelicula) => pelicula.fecha > new Date(2010, 0, 1)
);
const directores = peliculas.map((pelicula) => pelicula.director);
const titulos = peliculas.map((pelicula) => pelicula.titulo);
const directoresYtitulos = directores.concat(titulos);
const directoresYtitulos2 = [...directores, ...titulos];

console.log(posteriores);
console.log(directores);
console.log(titulos);
console.log(directoresYtitulos);
console.log(directoresYtitulos2);


