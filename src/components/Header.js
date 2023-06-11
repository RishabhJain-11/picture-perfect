import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => {
    return (
        <div>
            <h1>Picture Perfect</h1>
            <p>Search for any kind of photos from the list of a billion photos from around the globe.</p>
            <p>Step 1 : Search for any picture topic of your choice.</p>
            <p>Step 2 : A list of images will be generated and then download those images :)</p>
            <hr />
            <p>This is a collection of flickr's online API, here the members of Flickr upload their favorite images.</p>
            <Form history={history} handleSubmit={handleSubmit} />
            <Navigation />
        </div>
    );
};

export default Header;
