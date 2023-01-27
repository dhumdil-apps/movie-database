import { z } from 'zod';

const movieDetailSchema = z.object({
  Title: z.string(),
  Year: z.string(),
  imdbID: z.string(),
  Type: z.string(),
  Poster: z.string().url(),
  // TODO: add the rest from detail
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

type MovieDetailType = z.infer<typeof movieDetailSchema>;

const result = movieDetailSchema.safeParse([
  {
    names: ['Dave', 12], // 12 is not a string
    address: {
      line1: '123 Maple Ave',
      zipCode: 123, // zip code isn't 5 digits
      extra: 'other stuff', // unrecognized key
    },
  },
]);
// await stringSchema.safeParseAsync({});

if (!result.success) {
  // handle error then return
  result.error;
} else {
  // do something
  result.data;
}
