import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import backgroundImage from '../../assets/warrick.jpg'

interface CardProps {
  opened: boolean
}

export const MainContainer = styled.div<{ height: number }>`
  width: 100vw;
  height: ${(props) => props.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);
  
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`

export const DimmedLayer = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: black;
  opacity: 0;
  pointer-events: none;
`

export const Card = styled(motion.div)<CardProps>`
  display: flex;
  justify-content: center;
  background-color: var(--bg-color-alt);
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:nth-child(2) {
background-color: var(--bg-color);
  }

  &:nth-child(1) {
    grid-row: span 2;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 1000px) {
    &:nth-child(1) {
      display: none;
    }
  }

  ${(props) =>
    props.opened &&
    css`
      background-color: var(--bg-color-alt);
      height: calc(100vh - 2rem);
      width: calc(65.8vw - 1rem);
      position: absolute;
      inset: 0;
      margin-left: auto;
      margin-top: 1rem;
      margin-right: 1rem;
      z-index: 10;
      overflow-y: auto;

      @media (max-width: 1000px) {
        align-items: flex-start;
        height: calc(100vh - 1.5rem);
        width: calc(100vw - 1.5rem);
        margin: auto;
      }
    `}
`
