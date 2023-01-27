import { z } from 'zod';

const moviesSchema = z
  .array(
    z.object({
      Title: z.string(),
      Year: z.string(),
      imdbID: z.string(),
      Type: z.string(),
      Poster: z.string().url(),
    }),
  )
  .nonempty();

type MoviesType = z.infer<typeof moviesSchema>;

const result = moviesSchema.safeParse([
  {
    names: ['Dave', 12], // 12 is not a string
    address: {
      line1: '123 Maple Ave',
      zipCode: 123, // zip code isn't 5 digits
      extra: 'other stuff', // unrecognized key
    },
  },
]);
// await stringSchema.safeParseAsync([]);

if (!result.success) {
  // handle error then return
  result.error;
} else {
  // do something
  result.data;
}
