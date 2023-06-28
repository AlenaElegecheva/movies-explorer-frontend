export const DECKTOP_VERSION = 3;
export const TABLET_VERSION = 2;
export const MOBILE_VERSION = 2;
// eslint-disable-next-line no-useless-escape
export const EMAIL_REGEX = '^[^ ]+@[^ ]+\.[a-z]{2,3}$';
export const USER_REGEX = '^[A-Za-zА-Яа-яЁё\\-\\s]+$';

export function filterMovies(movies, query) {
  const moviesByQuery = !!movies ? movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase();
    const movieEn = String(movie.nameEN).toLowerCase();
    const userQuery = query.toLowerCase();
    return movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1;
  }): [];
  return moviesByQuery;
}

export function durationFilter(movies) {
  return movies.filter((movie) => movie.duration < 40);
}

export function durationConverter(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}ч ${minutes}м`;
}