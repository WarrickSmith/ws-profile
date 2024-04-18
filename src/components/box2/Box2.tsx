import React from 'react'
import styled from 'styled-components'
import WordSlider from '../common/WordSlider'

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-transform: uppercase;
  background-color: var(--bg-color);
`
const Intro = styled.span`
  font-size: var(--fs-sm);
  font-weight: 400;
`

const MyName = styled.span`
  text-align: center;
  font-size: var(--fs-lge);
  font-weight: 700;
  margin: 0.5rem;
`

const words = ['full stack', 'developer']

const Box2: React.FC = () => {
  return (
    <BoxContainer>
      <Intro>Hi There! - I'm</Intro>
      <MyName>Warrick Smith</MyName>
      <WordSlider words={words} />
    </BoxContainer>
  )
}

export default Box2
