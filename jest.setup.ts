import { configure } from 'enzyme';
import React from 'react';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });
React.useLayoutEffect = React.useEffect;
