import styled from 'styled-components'
import CloseButtonImage from '../../assets/211651_close_round_icon.svg'

type CloseButtonProps = {
  onClick: () => void
}

const StyledCloseButton = styled.img<CloseButtonProps>`
  position: fixed;
  top: 3rem;
  right: 3rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  filter: brightness(0) invert(1);
`

const CloseButton = ({ onClick }: CloseButtonProps) => (
  <StyledCloseButton src={CloseButtonImage} alt="Close" onClick={onClick} />
)

export default CloseButton
