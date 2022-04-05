/*Import das imagens utilizadas no carousel*/
import c1 from '../../img/c1.jpg';
import c2 from '../../img/c2.jpg';
import c3 from '../../img/c3.jpg';
import c7 from '../../img/c7.jpg';

const AboutUs = () => {
  return (
    /*Texto de apresentação*/
    <div div className="container" >
      <div className="row mt-3">
        <div className="col-6">
          <h2 className="text-center mb-3">Olá, meu nome é Dhiego!</h2>
          <p>Infelizmente, (ou não), essa não é uma pagina real sobre uma petshop,
            mas vocês sabem disso, então eu vou usar essa parte do "Sobre Nós"
            para me apresenta um pouco.
          </p>
          <p>Como eu disse antes, meu nome é Dhiego e tenho pouco menos de um
            ano de experiência profissional com desenvolvimento full stack, porém,
            estou perto de me formar em Ciência da Computação pela UniFavip e estou
            em busca da minha primeira oportunidade como desenvolvedor Júnior.
          </p>

          <p>*Sim estou correndo do tcc*</p>

          <p>Para alegrar o seu dia, caro avaliador,
            aqui ao lado estão algumas fotos dos meus pets ;D.
          </p>
        </div>

        {/*Carousel com foto dos pets*/}
        <div className="col-6">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner align-items-center text-center justify-content-center">
              <div className="carousel-item active">
                <img src={c1} class="w-90" alt="branca"/>
              </div>
              <div className="carousel-item">
                <img src={c2} class=" w-90" alt="duas caras"/>
              </div>
              <div className="carousel-item">
                <img src={c3} class=" w-90" alt="thiago life"/>
              </div>
              <div className="carousel-item">
                <img src={c7} class=" w-90"  alt="dumba"/>
              </div>
            </div>
            <button className="carousel-control-prev w-50" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next w-50" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;