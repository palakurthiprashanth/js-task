import Error from "../../components/Error/Error";

const SomethingWentWrong = (): JSX.Element => {
  return (
    <Error>
      <div data-testid="somethingWentWrong">
          <h1>Something went wrong.</h1>
          <p>Pleast try again after sometime.</p>
      </div>
    </Error>  
  );
};


export default SomethingWentWrong;