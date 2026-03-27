import styled from 'styled-components'
import { theme } from '../../themes/theme'

export const VagaContainer = styled.div`
	border: 1px solid ${(props) => (props.theme as theme).corPrincipal};
	background-color: ${(props) => (props.theme as theme).corSecundaria};
	color: ${(props) => (props.theme as theme).corPrincipal};
	padding: 16px;
	transition: all ease 0.3s;
	border-radius: 8px;

	&&:hover {
		background-color: ${(props) => (props.theme as theme).corPrincipal};
		color: ${(props) => (props.theme as theme).corSecundaria};
	}

	@media (max-width: 768px) {
		width: 80%;
		margin: auto;
	}
`

export const LinkBotao = styled.a`
	border-color: ${(props) => (props.theme as theme).corSecundaria};
	background-color: ${(props) => (props.theme as theme).corPrincipal};
	color: ${(props) => (props.theme as theme).corSecundaria};
	display: inline-block;
	padding: 8px 16px;
	text-decoration: none;
	margin-top: 16px;
	font-weight: bold;
	font-size: 14px;
	border-radius: 8px;
	text-align: center;

	&&:hover {
		border-color: ${(props) => (props.theme as theme).corPrincipal};
		background-color: ${(props) => (props.theme as theme).corSecundaria};
		color: ${(props) => (props.theme as theme).corPrincipal};
		cursor: pointer;
	}

	@media (max-width: 768px) {
		display: block;
	}
`
