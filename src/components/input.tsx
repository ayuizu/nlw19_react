import type { ComponentProps } from "react";
import { Mail } from 'lucide-react'

/*
Norma: gray-600
Definir group para definir estilo de elemento de um item com base no outro (parecido com ~ do CSS)
Ocupa todo espaço da caixa = flex-1
Input sem borda ao clicar = outline-0

Digitando: gray-100
focus-within: se estiver digitando

Preenchido: ícone gray-100
estilizar span se placeholder não estiver aparecendo no input =  group-[&:not(:has(input:placeholder-shown))]:estilo
    & referencia a si mesmo (no caso a div)
    [] colocar qualquer seletor do css que não seja do tailwind

Erro:

*/
// interface InputProps extends ComponentProps<'input'>{
//     error?: boolean
// }

// export function Input({ error = false , ...props}: InputProps){
//     return(
//         <div 
//             data-error={error}
//             className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100
//                         data-[error=true]:border-danger"
//         >
//             <span className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100
//                             group-data-[error=true]:text-danger">
//                 <Mail />
//             </span>
//             <input
//                 className="flex-1 outline-0 placeholder-gray-400"
//                 {...props}
//             />
//         </div>

//     )
// }

interface InputRootProps extends ComponentProps<'div'>{
    error?: boolean
}

export function InputRoot({error = false, ...props}: InputRootProps){
    return(
        <div 
            data-error={error}
            className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100
                        data-[error=true]:border-danger"
            {...props}
        />
    )
}

interface InputIconProps extends ComponentProps<'span'>{}

export function InputIcon(props: InputIconProps){
    return(
        <span className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100
                        group-data-[error=true]:text-danger"
            {...props}
        />
    )
}

interface InputFieldProps extends ComponentProps<'input'>{
    error?: boolean
}

export function InputField({error = false, ...props}: InputFieldProps){
    return(
        <input
            className="flex-1 outline-0 placeholder-gray-400"
            {...props}
        />
    )
}