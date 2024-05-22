import CardAbility from './card-ability'

export function Abilities() {
  return (
    <section className="mx-8 flex flex-col gap-12">
      <h3 className="font-ultralife text-3xl uppercase text-slate-200">
        Habilidades
      </h3>
      <div className=" flex flex-col gap-12 sm:flex-row ">
        <div className="flex   min-h-40 w-[90%] items-center justify-center self-center rounded-lg border border-primary/80 bg-primary/20 px-6 shadow-md md:h-80">
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
