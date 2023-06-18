import "./Cabecalho.css";

const Cabecalho = () => {
  return (
    <header className="cabecalho">
      <div>
        <a href="#" className="cabecalho-link__titulo">PetShop</a>
      </div>
      <div className="cabecalho-links">
        <a href="#" className="cabecalho-link">Cachorro</a>
        <a href="#" className="cabecalho-link">Gato</a>
      </div>
    </header>
  )
}

export default Cabecalho;