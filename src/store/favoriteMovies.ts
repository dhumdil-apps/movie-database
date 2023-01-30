import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { MovieType } from '$api/movies';

type imdbID = string;

type State = {
  favoriteMovies: {
    [key: imdbID]: MovieType;
  };
};

type Actions = {
  isInFavorites: (imdbID: imdbID) => boolean;
  addToFavoriteMovies: (movie: MovieType) => void;
  deleteFromFavoriteMovies: (imdbID: imdbID) => void;
};

export const useFavoriteMoviesStore = create<State & Actions>()(
  devtools(
    persist(
      (set, get) => ({
        favoriteMovies: {},
        isInFavorites: (imdbID) => {
          return !!get().favoriteMovies[imdbID];
        },
        addToFavoriteMovies: (movie) => {
          set((state) => {
            state.favoriteMovies[movie.imdbID] = movie;

            return {
              favoriteMovies: { ...state.favoriteMovies },
            };
          });
        },
        deleteFromFavoriteMovies: (imdbID) => {
          set((state) => {
            delete state.favoriteMovies[imdbID];

            return {
              favoriteMovies: { ...state.favoriteMovies },
            };
          });
        },
      }),
      {
        name: 'FAVORITE_MOVIES',
      },
    ),
    {
      anonymousActionType: 'FAVORITE_MOVIES',
    },
  ),
);
