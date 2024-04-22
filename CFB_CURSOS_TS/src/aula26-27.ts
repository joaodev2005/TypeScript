interface movies{
    title: string;
    duration: number;
    year: number;
    genres: string[]
    iniciarMovies?(teste: string): void;
}

interface movieDescription extends movies{
    actors: string[];
    oscars: number;
}

let movie1: movieDescription
let movie2: movies

movie1 = { title: 'Star Wars', duration: 2, year: 2000, genres: ['Action', 'Sci-Fi'], actors: ['Mark Hamill', 'Harrison Ford'], oscars: 2 }
movie2 = { title: 'Pulp Fiction', duration: 2, year: 1996, genres: ['Comedy', 'Thriller'] }

console.log(movie1)