import { PiChat } from 'react-icons/pi'

export default function CallToAction() {
  return (
    <section className="mx-8 my-12 flex flex-col items-center justify-center gap-8">
      <h2 className="text-center font-ultralife text-3xl uppercase">
        Interessado em colaborar comigo?
      </h2>
      <p className="text-center text-primary-light">
        Estou sempre aberto para discutir trabalhos de Desenvolvimento Web ou
        oportunidades de parceria.
      </p>
      <button className="flex items-center gap-4 rounded-full bg-primary px-6 py-3 font-ultralife font-bold uppercase">
        <PiChat className="h-8 w-8 text-slate-200" />
        Iniciar uma conversa
      </button>
    </section>
  )
}
