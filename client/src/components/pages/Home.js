import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

import Card from '../Card.js';

import banner from '../../img/bannerr.jpg';
import item1 from '../../img/item1.webp';
import item2 from '../../img/item2.webp';
import item3 from '../../img/item3.webp';
import item4 from '../../img/item4.webp';
import item5 from '../../img/item5.webp';
import item6 from '../../img/item6.webp';

const Home = () => {

  const navigate = useNavigate();

  const onClicked = (caminho) => {
    navigate(`/${caminho}`)
  }

  return (
    <div className="container">
      <div className="row text-center mt-1 p-2">
        <label> <b className="pe-1 ps-1" style={{ backgroundColor: "red", color: "white", borderRadius: "10px" }}>10%</b> de <b>desconto</b> para clientes cadastrados!</label>
      </div>
      <div className="banner text-center">
        <img src={banner} alt="banner" style={{ borderRadius: "30px" }}></img>
      </div>
      {/*Botões de agendar visita e consultar visita*/}
      <div className="row mt-3 text-center">
        <div className="col-6">
          <Button
            className="btn btn-success btn-home"
            onClick={() => onClicked("agendar")}>
            <FontAwesomeIcon icon={faCalendarPlus} transform="grow-14" style={{ marginRight: "25px" }} />Agendar Visita</Button>
        </div>
        <div className="col-6">
          <Button
            className="btn btn-primary btn-home"
            onClick={() => onClicked("consultar")}>
            <FontAwesomeIcon icon={faCalendarCheck} transform="grow-14" style={{ marginRight: "25px" }} />Consultar Visita</Button>
        </div>
      </div>

      <div className="row mt-5 mb-4 text-center">
        <h3 className="mb-3 items">MAIS VENDIDOS</h3>
        <hr />
        {/*Div responsavel por atualizar os cards dos produtos*/}
        <div className="row">
          <Card
            item={item1}
            title="Comida de gato"
            description="é boa ein" />

          <Card
            item={item2}
            title="Comida de Cachorro"
            description="essa é top" />

          <Card
            item={item3}
            title="Comida de gato"
            description="será que é boa?" />
        </div>

        <div className="row mt-3">
          <Card
            item={item4}
            title="Comida de gato"
            description="boa boa" />

          <Card
            item={item5}
            title="Comida de gato"
            description="parece de qualidade" />

          <Card
            item={item6}
            title="Casina de pet"
            description="casinha" />
        </div>
      </div>
      <hr />
    </div >
  );
}

export default Home;