import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

//Se passar um estilo na página pra um componente, os estilos se sobrescrevem. Para isso usamos o twMerge
//Se tiver algum estilo duplicado, ele remove a anterior

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    /*
        Todas as infos são retiradas do Figma

        Padding todos os lados 6px => p-1.5
        Fundo cinza 500 = bg-gray-500
        Texto azul = text-blue
        Arredondamento 8px =>rounded-md
        Cursor pointer
        Mudanças do hover depois de hover:--
        Transição ajustar cor tempo => transition-colors duration-300
        */

    <button
      className={twMerge(
        'p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900',
        className
      )}
      {...props}
    />
  )
}
