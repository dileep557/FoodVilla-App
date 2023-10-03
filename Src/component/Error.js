import { useRouteError } from "react-router-dom"
//********** useRouterError hook to Access routing Error  **********//
const Error= ()=>{

    const err= useRouteError();
    // we are all so use via destructuring it ||
   // const {status, statusText}=err;
  // console.log(status+":"+statusText);

    return (
        <div>
            <h1>OPPs !</h1>
            <h2>Something went wrong !</h2>
            <h2>{err.status+":"+err.statusText}</h2>

        </div>

    )


}
export default Error;