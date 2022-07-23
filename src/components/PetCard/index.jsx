import styles from "./PetCard.module.css";

const PetCard = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <img src={post.petImage} alt={post.petType} />
      <h2>{post.petName}</h2>
      <p>Espécie: {post.petType}</p>
      <p>Raça: {post.petBreed}</p>
      <p>Idade: {post.petAge}</p>
      <h3>Dados do Tutor</h3>
      <p>Tutor: {post.tutorName}</p>
      <p>Contato: {post.tutorContact}</p>
      <p>Endereço: {post.tutorAdress}</p>
      <div className={styles.buttons_wrapper}>
        <button className={styles.btn}>Editar</button>
        <button className={styles.btn_danger}>Excluir</button>
      </div>
    </div>
  );
};

export default PetCard;
