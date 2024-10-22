import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-10 text-2xl">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );

}

export default ErrorPage