import styled from 'styled-components'
import { props } from '../Tittle'
import { theme } from '../../themes/theme'

export const ForVagas = styled.form`
	display: grid;
	grid-template-columns: 1fr auto;
	background-color: ${(props) => (props.theme as theme).corSecundaria};
	padding: 32px;
	border-radius: 12px;
	margin-top: 40px;

	@media (max-width: 768px) {
		max-width: 100%;
	}
`
export const InputVaga = styled.input<props>`
	padding: 0 16px;
	outline-color: ${(props) => (props.theme as theme).corPrincipal};

	@media (max-width: 768px) {
		width: 100%;
	}
`

export const ButtonSub = styled.button`
	background-color: ${(props) => (props.theme as theme).corPrincipal};
	border: 1px solid ${(props) => (props.theme as theme).corPrincipal};
	height: 40px;
	padding: 0 16px;
	font-size: 18px;
	color: ${(props) => (props.theme as theme).corSecundaria};
	margin-left: 8px;
	cursor: pointer;

	@media (max-width: 768px) {
		width: 100%;
	}
`
