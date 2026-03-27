import { ChangeEventHandler, FormEvent, useState } from 'react'
import { ForVagas, InputVaga } from './styles'
import { ButtonSub } from './styles'

type Props = {
	aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
	const [termo, setTermo] = useState<string>('')

	const HandlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTermo(event.target.value)
	}

	const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		aoPesquisar(termo.toLocaleLowerCase())
	}

	return (
		<ForVagas onSubmit={aoEnviarForm}>
			<InputVaga
				placeholder="Front-end, Fullstack, node, desingn"
				onChange={HandlerChange}
				type="search"
			/>
			<ButtonSub>Pesquisar</ButtonSub>
		</ForVagas>
	)
}
export default FormVagas
