import type { ComponentProps } from "react"

interface IconButtonProps extends ComponentProps<'button'>{}

export function IconButton(props: IconButtonProps) {
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
            className="p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
            {...props}
        />

    )
}