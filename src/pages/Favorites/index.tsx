import { useQuery } from '@tanstack/react-query';

function Favorites() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['getJson'],
    queryFn: () =>
      fetch('https://reqbin.com/echo/get/json', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res) => res.data),
  });

  console.log({ isFetching });
  console.log({ isLoading });
  console.log({ error });
  console.log({ data });

  return <h1>Favorites</h1>;
}

export default Favorites;
