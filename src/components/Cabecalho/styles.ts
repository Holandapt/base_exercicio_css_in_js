import styled from 'styled-components'
import { theme } from '../../themes/theme'

export const Cabeca = styled.header`
	background-color: ${(props) => (props.theme as theme).corSecundaria};
	color: ${(props) => (props.theme as theme).corPrincipal};
	text-align: center;
	padding: 24px 0;
`
