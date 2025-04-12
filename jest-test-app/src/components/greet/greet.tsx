import React from "react";

type GreetProps = {
    name?: string;
};

const Greet = ({ name }: GreetProps) => {
    return (
        <>
            <div>Hello {name}</div>
            <h1>thank you</h1>
        </>
    );
};

export default Greet;
