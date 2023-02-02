import React from 'react';
import renderer from 'react-test-renderer';
import Slider from './Slider';

test('renders landing page when first opened', () => {
    const tree = renderer.create(<Slider />).toJSON();
    expect(tree).toMatchSnapshot();
});