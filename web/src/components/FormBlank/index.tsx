export function FormBlank(props: any) {
  return (
    <div className="w-[319px] h-[443px] bg-white flex flex-col justify-center items-center">
      <img src="src/assets/caneta_pena.png" />
      <span className="text-[rgba(0,0,0,0.4)]">Nenhum pet selecionado</span>
      <button 
        className="text-[#006C8F] text-xs"
        onClick={() => props.handleSelectedPet()}
      >
        Deseja cadastrar um novo pet?
      </button>
    </div>
  )
}