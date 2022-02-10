import CardForm from "../components/CardForm";
import CardAdmin from "../components/CardAdmin";
import { Fragment } from "react/cjs/react.production.min";

const MainApp = () => {
  return (
    <Fragment>
      <CardForm />
      <CardAdmin />
    </Fragment>
  );
};

export default MainApp;
