import styled from 'styled-components'
import Stack from '@mui/material/Stack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Typography from '@mui/material/Typography';

export const ArrowForward = styled(ArrowForwardIosIcon)`
&& {
  color: 	#E8E8E8;
  font-size: 1.6em;
  transition: all .2s ease-in;

} 
`
export const ArrowBackward = styled(ArrowBackIosNewIcon)`
&& {
  color: #E8E8E8;
  font-size: 1.6em;
  transition: all .2s ease-in;

}
`
export const DarkOverlay = styled(Stack)`
&& {
  background: hsla(0,0%,8%,.5);
  margin: ${props => props.margin || 0};
  z-index: 10;
  opacity: ${props => props.opacity || 1};
  cursor: pointer;

  &:hover .arrow {
    transform: scale(1.25);
    color: #FFF;
  }
}
`

export const ListContentContainer = styled(Stack)`

&& {
  &:hover > .darkOverlay {
    opacity: 1;
  }
}
`

export const Title = styled(Typography)`

&& {
  color: #E8E8E8;
  font-size: 1.9em;
  font-weight: bold;
  margin-left: 2em;
  text-transform: capitalize;
  cursor: pointer;
  transition: all .2s ease-in;

  &:hover {
    color: #FFF;
  }
}
`