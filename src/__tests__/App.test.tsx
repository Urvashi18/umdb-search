import * as React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import  { App }  from '..//components/App/App';


describe("<App />", () => {
  test('renders app header', async () => {
    const testRenderer = renderer.create(<App />);
    const app = testRenderer.toJSON() as ReactTestRendererJSON;
    expect(app.props.className).toBe('App');
    expect(app.type).toBe('div');
    expect(app.children.length).toBe(3);
  }); 
})