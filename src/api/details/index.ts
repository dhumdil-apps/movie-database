import { z } from 'zod';
import { useQuery } from '@tanstack/react-query';
import { logger } from '$utils/logger';

const movieDetailSchema = z.object({
  Title: z.string(),
  Year: z.string(),
  imdbID: z.string(),
  Type: z.string(),
  Poster: z.string().url(),
  Rated: z.string(),
  Released: z.string(),
  Runtime: z.string(),
  Genre: z.string(),
  Director: z.string(),
  Writer: z.string(),
  Actors: z.string(),
  Plot: z.string(),
  Language: z.string(),
  Country: z.string(),
  Awards: z.string(),
  Ratings: z
    .array(
      z.object({
        Source: z.string(),
        Value: z.string(),
      }),
    )
    .nonempty(),
  Metascore: z.string(),
  imdbRating: z.string(),
  imdbVotes: z.string(),
  DVD: z.string(),
  BoxOffice: z.string(),
  Production: z.string(),
  Website: z.string(),
  Response: z.string(),
});

export type MovieDetailType = z.infer<typeof movieDetailSchema>;

type State = string | undefined;

type Response = {
  success: boolean;
  response: MovieDetailType | null;
};

const fetchMovieDetails = async (imdbID: State): Promise<Response> => {
  if (!imdbID) {
    return { success: false, response: null };
  }

  const response = await fetch(
    `http://omdbapi.com/?apikey=${
      import.meta.env.VITE_OMDB_API_KEY
    }&i=${imdbID}`,
  )
    .then((resp) => resp?.json())
    .catch(logger)
    .then((data) => {
      if (data.Response === 'True') {
        return {
          success: true,
          response: data,
        };
      }

      return {
        success: false,
        response: data,
      };
    })
    .catch(logger);

  if (response?.success) {
    // TODO: use zod to parse the results
    // const result = movieDetailSchema.safeParse(response.response);
    //
    // if (result.success) {
    //   return {
    //     success: true,
    //     response: result.data,
    //   };
    // }

    return response;
  }

  return {
    success: false,
    response: null,
  };
};

export const useMovieDetailsQuery = (state: State) =>
  useQuery({
    queryKey: ['movieDetails', state],
    queryFn: () => fetchMovieDetails(state),
  });
