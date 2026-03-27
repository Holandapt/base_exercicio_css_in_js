import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './styles'
import tema from './themes/theme'

function App() {
	return (
		<>
			<ThemeProvider theme={tema}>
				<EstiloGlobal />
				<Header />
				<Hero />
				<Container>
					<ListaVagas />
				</Container>
			</ThemeProvider>
		</>
	)
}

export default App
