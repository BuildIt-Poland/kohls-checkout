import React from 'react';
import { Link } from 'react-router-dom';

import Text from '../Text';
import TextLink from '../TextLink';
import Content from '../Content';
import Headline from '../Headline';
import Section from './Section';

function LandingPage() {
  return (
    <Content as="article">
      <Section>
        <Headline>Project goals</Headline>
        <Text>
          Build base for <strong>scalable front-end architecture</strong> &mdash; easy to work with for developers and
          QA, fully transparent for stakeholders. <strong>Automate</strong> as many processes as possible and make their
          results easily available.
        </Text>
        <Text>
          Make frontend communicate with backend API only by thin layer of services, making it more resilient to
          inevitable changes.
        </Text>
      </Section>
      <Section>
        <Headline>Workflow</Headline>
        <Text>
          Small, easy to estimate tasks in backlog. Code crafted and delivered according to{' '}
          <TextLink href="https://www.atlassian.com/git/tutorials/comparing-workflows">git workflow</TextLink> &mdash;
          commit and issue pull requests often for easy collaboration between programmers, designers and QA (no one
          should be afraid to participate in PRs review process). Because only small chunks of code are merged it's
          easier and faster to recover from bugs or discover <strong>accessibility and usability</strong> problems.
        </Text>
      </Section>
      <Section>
        <TextLink as={Link} to="/cart">
          Take me to Cart
        </TextLink>
      </Section>
    </Content>
  );
}

export default LandingPage;
