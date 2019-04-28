import React from 'react';
import Test from '@rc-x/test';

import Grid from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={[]}
      componentProps={[]}
      componentTestProps={[]}
      componentName={[]}
      componentPackageJson={packageJson}
    >
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            grid={{
              size: {
                lg: 3,
                md: 6,
                sm: 12,
                xs: 12
              }
            }}
          >
            Hello World!
          </Grid.Col>
          <Grid.Col
            grid={{
              size: {
                lg: 3,
                md: 6,
                sm: 12,
                xs: 12
              }
            }}
          >
            Hello World!
          </Grid.Col>
          <Grid.Col
            grid={{
              size: {
                lg: 3,
                md: 6,
                sm: 12,
                xs: 12
              }
            }}
          >
            Hello World!
          </Grid.Col>
          <Grid.Col
            grid={{
              size: {
                lg: 3,
                md: 6,
                sm: 12,
                xs: 12
              }
            }}
          >
            Hello World!
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Test>
  );
}
