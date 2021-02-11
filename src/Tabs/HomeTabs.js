import React from 'react';
import HomePage from '../tabComponents/HomePage';
import FooterTabs from '../layouts/FooterTabs';
import {Container, Content} from 'native-base';
export default function HomeTabs() {
  return (
    <Container>
      <Content>
        <HomePage />
      </Content>
      <FooterTabs />
    </Container>
  );
}
