import * as React from 'react';
import TestRenderer, { ReactTestRendererJSON } from 'react-test-renderer';

import { Movie, MovieType } from "../components/Movie/Movie";

describe("<Movie key='' movie=''/>", () => {
    test("should display movie with details", async () => {
        const movieType = {"Title" : "Hello Again", "Poster" : "poster.jpg", "Year" : "1987"}
        const testRenderer = TestRenderer.create(<Movie key={`1-Hello Again`} movie={movieType} />);
        const testInstance = testRenderer.root;

        expect(testInstance.findByProps({className: "movie"}).type).toBe("div")
        expect(testInstance.findByProps({className: "image"}).type).toBe("img")
        expect(testInstance.findByType(Movie).props.movie.Title).toBe("Hello Again");
        expect(testInstance.findByType(Movie).props.movie.Year).toBe("1987");
        expect(testInstance.findByType(Movie).props.movie.Poster).toBe("poster.jpg");
    });
});