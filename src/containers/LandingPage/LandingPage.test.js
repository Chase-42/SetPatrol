import React from 'react';
import { renderShallow } from '../../util/test-helpers';
import { LandingPageComponent } from './LandingPage';
import { RoutesProvider } from '../../components';
import routesConfiguration from '../../routesConfiguration';

const noop = () => null;

describe('LandingPage', () => {
  it('matches snapshot', () => {
    const tree = renderShallow(
      <LandingPageComponent
        onLocationChanged={v => v}
        history={{ push: noop }}
        flattenedRoutes={[]}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});