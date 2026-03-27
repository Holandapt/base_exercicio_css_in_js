import styled from 'styled-components'
import { props } from '.'

export const Tittle = styled.h3<props>`
	font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '18px')};
	margin: 0 0 16px;
	font-family: ${(props) =>
		props.fontFamily ? props.fontFamily : 'Lato, sans-serif'};

	@media (max-width: 768px) {
		font-size: 32px;
		text-align: center;
	}
`
