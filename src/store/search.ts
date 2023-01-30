import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { MovieType } from '$api/movies';

type State = {
  searchValue: string;
  page: number;
  isLoading: boolean;
  totalMovies: number;
  loadedMovies: number;
  movies: MovieType[];
};

type Actions = {
  setSearchValue: (searchValue: string) => void;
  setLoading: () => void;
  resetSearchValue: () => void;
  loadFirstPage: (movies: MovieType[], totalMovies: number) => void;
  loadNextPage: (movies: MovieType[], page: number) => void;
};

export const useSearchStore = create<State & Actions>()(
  devtools(
    (set) => ({
      searchValue: '',
      isLoading: false,
      page: 0,
      totalMovies: 0,
      loadedMovies: 0,
      movies: [],
      resetSearchValue: () => {
        set({
          isLoading: false,
          page: 1,
          movies: [],
          totalMovies: 0,
          loadedMovies: 0,
        });
      },
      setSearchValue: (searchValue) => {
        set({
          isLoading: true,
          searchValue,
          page: 0,
          movies: [],
          totalMovies: 0,
          loadedMovies: 0,
        });
      },
      setLoading: () => {
        set({ isLoading: true });
      },
      loadFirstPage: (movies, totalMovies) => {
        const loadedMovies = movies.length;

        set({
          isLoading: false,
          page: 1,
          loadedMovies,
          movies,
          totalMovies,
        });
      },
      loadNextPage: (movies, page) => {
        set((state) => ({
          isLoading: false,
          loadedMovies: state.loadedMovies + movies.length,
          movies: [...state.movies, ...movies],
          page,
        }));
      },
    }),
    {
      anonymousActionType: 'SEARCH',
    },
  ),
);
