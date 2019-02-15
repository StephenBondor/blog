import React from 'react'
import styled from 'styled-components'

import styles from '../styles'

const Container = styled.div`
  color: ${styles.color.grey};
  margin-bottom: 16px;

  &:hover {
    --title-size: 1.2;
  }

  @media only screen and (min-width: ${styles.width.medium}) {
    margin-bottom: 24px;
  }
`

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 3.2rem;
  margin-bottom: 8px;

  /* transition: transform 180ms cubic-bezier(0.16, 0.79, 0.71, 1.99);
  transform: scale(var(--title-size));
  transform-origin: 0 50%; */
`

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 2.8rem;
`

const Bio = () => (
  <Container>
    <Title>Hi, I'm Bondor</Title>
    <Description>
      I am learning how to design and build websites at Lambda School. This is a
      first attempt at a blog website using tech I learned like a few hours ago.
      <br />
      <br />
      I dont know what I am doing.
    </Description>
  </Container>
)

export default Bio
