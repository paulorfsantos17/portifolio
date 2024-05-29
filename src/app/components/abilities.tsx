'use client'
import { useState } from 'react'
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiStyledcomponents } from 'react-icons/si'
import { TbBrandTypescript } from 'react-icons/tb'

import CardAbility from './card-ability'

export default function Abilities() {
  const [description, setDescription] = useState(
    '*Passe o mouse para ver a descrição da habilidade.',
  )

  function handleSetDescription(description: string) {
    setDescription(description)
  }
  const abilities = [
    {
      name: 'javascript',
      description:
        'JavaScript é uma linguagem de programação dinâmica e multi-paradigma, essencial para criar conteúdo interativo na web. Ela permite animações, controle de multimídia, e respostas a interações do usuário.',
      icon: <FaJs className="h-2/3 w-2/3" />,
    },
    {
      name: 'html',
      description:
        'HTML5 é uma linguagem de marcação de hipertexto utilizada na construção de sites.',
      icon: <FaHtml5 className="h-2/3 w-2/3" />,
    },
    {
      name: 'css',
      description:
        'Cascading Style Sheets (CSS) é uma linguagem de folhas de estilo para sites.',
      icon: <FaCss3 className="h-2/3 w-2/3" />,
    },
    {
      name: 'react',
      description:
        'React é uma biblioteca JavaScript que promove a componentização, permitindo a construção de interfaces de usuário modulares e reutilizáveis.',
      icon: <FaReact className="h-2/3 w-2/3" />,
    },
    {
      name: 'typescript',
      description:
        'TypeScript é uma extensão de JavaScript que adiciona tipos estáticos, oferecendo mais segurança e ferramentas para o desenvolvimento de códigos robustos e manuteníveis.',
      icon: <TbBrandTypescript className="h-2/3 w-2/3" />,
    },
    {
      name: 'tailwindcss',
      description:
        'Tailwind CSS é um framework CSS que utiliza uma abordagem de design utilitário, oferecendo classes de propósito único que podem ser aplicadas diretamente no HTML para estilizar elementos de forma rápida e eficiente',
      icon: <RiTailwindCssFill className="h-2/3 w-2/3" />,
    },
    {
      name: 'Styled Component',
      description:
        'Styled Components é uma abordagem de CSS-in-JS, que permite integrar estilos CSS dentro do JavaScript, criando uma experiência de desenvolvimento mais coesa e componentizada.',
      icon: <SiStyledcomponents className="h-2/3 w-2/3" />,
    },
  ]

  return (
    <section className="mx-8 flex flex-col gap-12" id="abilities">
      <h3
        className="font-ultralife text-3xl 
          font-bold uppercase text-gray-300 "
      >
        Habilidades
      </h3>
      <div className=" flex flex-col gap-12 sm:flex-row ">
        <div
          className=" flex min-h-40 w-[90%] items-center justify-center 
            self-center rounded-lg border border-primary/80 bg-primary/20 px-6 
            shadow-md  md:h-80"
        >
          <p className="text-sm text-slate-200 sm:text-base">{description}</p>
        </div>
        <div className="grid max-h-80 w-[90%] grid-cols-3 gap-3 self-center xl:grid-cols-4">
          {abilities.map((ability, index) => {
            return (
              <CardAbility
                key={ability.name + index}
                description={ability.description}
                onHover={handleSetDescription}
                icon={ability.icon}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
