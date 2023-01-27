import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const myErrorHandler = (error: Error, info: { componentStack: string }) => {
  // Do something with the error
  // E.g. log to an error logging client here
};

/**
 * Page should contain search input field with search button on the top of the page.
 * When user submits the search, all search results should be displayed under the search input field.
 * Please consider paging or endless scrolling of search results.After redirect to another page and go back,
 * the last searching and results should be still visible with the last visible table page or scroll position.
 */
function Home() {
  return (
    <ErrorBoundary
      // This is a component you want rendered in the event of an error. As props it will be passed the error and resetErrorBoundary (which will reset the error boundary's state when called, useful for a "try again" button when used in combination with the onReset prop).
      FallbackComponent={ErrorFallback}
      // This will be called immediately before the ErrorBoundary resets it's internal state (which will result in rendering the children again). You should use this to ensure that re-rendering the children will not result in a repeat of the same error happening again.
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
      // This will be called when there's been an error that the ErrorBoundary has handled. It will be called with two arguments: error, info.
      onError={myErrorHandler}
    >
      <h1>Search Results Page</h1>
    </ErrorBoundary>
  );
}

export default Home;
