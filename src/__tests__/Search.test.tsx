import * as React from 'react';
import TestRenderer, { ReactTestRendererJSON } from 'react-test-renderer'
import { Search, SearchProps } from "../components/Search/Search";

describe("<Search />", () => {
    test("should display search box with placeholder and search button", async () => {

        const testRenderer = TestRenderer.create(<Search searchAction={search} />);
        const testInstance = testRenderer.root;

        expect(testInstance.findByProps({className: "search"}).type).toBe("form");
        expect(testInstance.findByProps({className: "searchbox"}).type).toBe("input");
        expect(testInstance.findByProps({className: "submit"}).type).toBe("input");

        expect(testInstance.findByProps({className: "searchbox"}).props.placeholder).toBe("Search UMDB");
        expect(testInstance.findByProps({className: "searchbox"}).props.type).toBe("text");

        expect(testInstance.findByProps({className: "submit"}).props.value).toBe("SEARCH");
        expect(testInstance.findByProps({className: "submit"}).props.type).toBe("submit");
    });

    test("onClick Search button",async () => {
        const testRenderer = TestRenderer.create(<Search searchAction={search} />);
        const component = testRenderer.root;
        component.findByProps({className: "submit"}).props.onClick.value;
    });
});


const search = (searchValue: string) => {
    return "hello";
};
