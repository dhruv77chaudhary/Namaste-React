import { useRouteError } from "react-router";
const Eroor = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1> Oopsss!!</h1>
            <h2>Something went wrong</h2>
        </div>
    )
}
export default Eroor;