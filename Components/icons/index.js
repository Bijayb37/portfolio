import icons from './icons'
import Image from 'next/image'

const Icon = ({ children: icon, white }) => {
  const name = icon.toLowerCase() + (white ? 'White' : '')
  const newIcon = icons?.[name]
  const src = newIcon?.src

  if (src) {
    return <Image  title={icon} src={src} alt={icon} width="50px" height="35px" />
  }

  return null
}

export default Icon
