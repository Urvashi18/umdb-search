import * as React from 'react';
import TestRenderer, { ReactTestRendererJSON } from 'react-test-renderer';

import { Header } from "../components/Header/AppHeader";

describe("<Header title='UMDB'/>", () => {
    test("should display a header with the app name as the title", async () => {
        const testRenderer = TestRenderer.create(<Header title="UMDB"/>);
        const testInstance = testRenderer.root;
        expect(testInstance.findByProps({className: "AppHeader"}).type).toBe("header")
        expect(testInstance.findByType(Header).props.title).toBe('UMDB');
       
    });
});