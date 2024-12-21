import React from "react";
import ReactDOM from "react-dom/client";
    import {createRoot} from 'react-dom/client';
// react functional component

const Ja= (<h1>This is js element</h1>);

const Title = () => (
    <h1 className="head" tabIndex="5">Namste react using JSX</h1>
);

const HeadingComponent = () => (
    <div id="container">
        {Ja}
        <Title/>
        <h1 className="heading">Namaste React Functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

