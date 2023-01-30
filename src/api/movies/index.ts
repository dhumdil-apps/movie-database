import { z } from 'zod';
import { logger } from '$utils/logger';

const movieSchema = z.object({
  Title: z.string(),
  Year: z.string(),
  imdbID: z.string(),
  Type: z.string(),
  Poster: z.string().url(),
});

export type MovieType = z.infer<typeof movieSchema>;

// const moviesSchema = z.array(movieSchema).nonempty();

type State = {
  page: number;
  searchValue: string;
};

type Response = {
  success: boolean;
  data: {
    movies: MovieType[];
    totalMovies: string;
  } | null;
};

export const fetchMovies = async ({
  page,
  searchValue,
}: State): Promise<Response> => {
  if (!page || !searchValue) {
    return { success: false, data: null };
  }

  const response = await fetch(
    `http://www.omdbapi.com/?apiKey=${
      import.meta.env.VITE_OMDB_API_KEY
    }&s=${searchValue}&page=${page}`,
  )
    .then((resp) => resp?.json())
    .catch(logger)
    .then((data) => {
      if (data.Response === 'True') {
        return {
          movies: data.Search,
          totalMovies: data.totalResults,
        };
      }

      return null;
    })
    .catch(logger);

  if (response) {
    // TODO: use zod to parse the results
    return {
      success: true,
      data: response,
    };
  }

  return {
    success: false,
    data: null,
  };
};
