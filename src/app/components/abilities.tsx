import CardAbility from './card-ability'

export function Abilities() {
  return (
    <section className="mx-8 flex flex-col gap-12">
      <h3
        className="taos:translate-x-[-200px] taos:opacity-0 font-ultralife text-3xl 
          uppercase text-slate-200 delay-[300ms] duration-[600ms]"
        data-taos-offset="400"
      >
        Habilidades
      </h3>
      <div className=" flex flex-col gap-12 sm:flex-row ">
        <div
          className="taos:scale-[0.6]   taos:opacity-0 flex min-h-40 w-[90%] items-center justify-center 
            self-center rounded-lg border border-primary/80 bg-primary/20 px-6 
            shadow-md delay-[300ms] duration-[600ms] md:h-80"
          data-taos-offset="400"
        >
          <p className=" text-md  text-slate-200">
            *Passe o mouse para ver a descrição da habilidade.
          </p>
        </div>
        <div className="grid max-h-80 w-[90%] grid-cols-3 gap-3 self-center xl:grid-cols-4">
          <CardAbility />
          <CardAbility />
          <CardAbility />
          <CardAbility />
          <CardAbility />
          <CardAbility />
        </div>
      </div>
    </section>
  )
}
