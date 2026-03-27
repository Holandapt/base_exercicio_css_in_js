import Tittle from '../Tittle'
import { LinkBotao, VagaContainer } from './styles'
import { ReactNode } from 'react'

type Props = {
	titulo: string
	localizacao: string
	nivel: string
	modalidade: string
	salarioMin: number
	salarioMax: number
	requisitos: string[]
}

const Vaga = (props: Props) => (
	<VagaContainer>
		<Tittle fontSize={18}>{props.titulo}</Tittle>
		<ul>
			<li>Localizacao: {props.localizacao}</li>
			<li>Senioridade: {props.nivel}</li>
			<li>Tipo de contratacao: {props.modalidade}</li>{' '}
			<li>
				Salário: {props.salarioMin} - {props.salarioMax}{' '}
			</li>
			<li>Requisitos: {props.requisitos.join(', ')}</li>{' '}
		</ul>
		<LinkBotao>Ver detalhes e candidatar-se</LinkBotao>
	</VagaContainer>
)
export default Vaga
