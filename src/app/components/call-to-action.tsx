import { PiChat } from 'react-icons/pi'

export default function CallToAction() {
  return (
    <section
      className="mx-8 my-12 flex flex-col items-center
        justify-center gap-16 bg-gradient-to-r  from-secondary-light via-primary-light to-primary 
        bg-clip-text 
        font-ultralife text-transparent md:mt-40 md:px-36"
      data-taos-offset="600"
    >
      <h2 className="text-center  font-ultralife text-3xl font-bold uppercase md:text-5xl  ">
        Interessado em colaborar comigo?
      </h2>
      <p className="text-center text-primary-light md:text-3xl">
        Estou sempre aberto para discutir trabalhos de Desenvolvimento Web ou
        oportunidades de parceria.
      </p>
      <a
        target="_blank"
        href="https://wa.me/5535992477926?text=Ol%C3%A1+Paulo%2C+vi+seu+perfil+no+seu+site%2C+estou+interessado+no+seus+servi%C3%A7o."
        className="group  relative z-10 flex items-center gap-4 rounded-full border border-transparent bg-primary
        px-6 py-3 font-ultralife font-bold uppercase text-slate-200 duration-300
        ease-in hover:border-primary-light hover:bg-transparent
      hover:text-primary-light"
      >
        <div
          className=" z-5 absolute right-[-1px] box-content  h-[80%] w-[100%] scale-[0.1] animate-ping rounded-full
            bg-primary opacity-100 blur-sm   group-hover:animate-none group-hover:opacity-0"
        ></div>
        <PiChat className="z-10 h-8 w-8 " />
        <p className="z-10">Iniciar uma conversa</p>
      </a>
    </section>
  )
}
