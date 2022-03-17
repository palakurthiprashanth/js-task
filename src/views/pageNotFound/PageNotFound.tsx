import Error from "../../components/Error/Error";

const PageNotFound = (): JSX.Element => {
  return (
    <Error>
      <div data-testid="pageNotFound">
        <h1>404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>You can always go back to the <a href="/">homepage</a></p>
      </div>
    </Error>  
  );
};


export default PageNotFound;