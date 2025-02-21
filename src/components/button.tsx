import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
  return (
    /*
        Todas as infos são retiradas do Figma

        Elementos um ao lado do outro => flex
        Um elemento à esquerda e outro à direita => justify-between
        Alinhar verticalmente ao centro = items-center
        Padding em x de 20px => px-5
        Altura 48px => h-12
        Fundo cinza 500 = bg-gray-500
        Texto azul = text-blue
        Fonte semi negrito => font-semibold
        Arredondamento 10px =>rounded-xl (lg=8 e xl=12 --> reconfigurado em global.css = 0,625rem)
        Ocupar toda largura do container => w-full
        Cursor pointer
        Mudanças do hover depois de hover:--
        Transição ajustar cor tempo => transition-colors duration-300
        */

    <button
      className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...props}
    />
  )
}
