
import { writable } from 'svelte/store';

const API_KEY = 'c3a5e8d1b62623509c38cbabe560d75c';
const baseUrl = 'https://api.themoviedb.org/3';

export const popularMoviesUrl = writable(`${baseUrl}/movie/popular?api_key=${API_KEY}`);
export const getMovieUrl = writable((/** @type {string} */ id) => `${baseUrl}/movie/${id}?api_key=${API_KEY}&language=en`);
