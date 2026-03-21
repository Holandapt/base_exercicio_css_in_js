import { type } from 'os'
import { ReactNode } from 'react'
import { Tittle as TittleStyle } from './styles'

export type props = {
  children: ReactNode
  fontSize?: number
}

const Tittle = (props: props) => (
  <TittleStyle fontSize={props.fontSize}>{props.children}</TittleStyle>
)

export default Tittle
