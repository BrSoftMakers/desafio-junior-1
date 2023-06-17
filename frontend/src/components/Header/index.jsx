import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div>
        <a href="#" className="header-link__titulo">PetShop</a>
      </div>
      <div className="header-links">
        <a href="#" className="header-link">Cachorro</a>
        <a href="#" className="header-link">Gato</a>
      </div>
    </header>
  )
}

export default Header