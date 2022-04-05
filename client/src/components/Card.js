import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faFaceFrown } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {

  return (
    /*Componente de renderização dos card na home*/
    <div className="col-4">
      <div className="row justify-content-center">
        <div class="card" style={{ width: "15rem" }}>
          <img src={props.item} class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description}</p>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
              <button type="button" class="btn btn-success"><FontAwesomeIcon icon={faFaceSmile} /></button>
              <button type="button" class="btn btn-danger"><FontAwesomeIcon icon={faFaceFrown} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card;