// Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
// Components
import PetCard from "../../components/PetCard";
// CSS
import { SectionWrapper } from "./style";

const Pets = () => {
  const { documents: posts, loading } = useFetchDocuments("pets");

  return (
    <SectionWrapper>
      {loading && <p>Carregando...</p>}
      {posts && posts.map((post) => <PetCard key={post.id} post={post} />)}
    </SectionWrapper>
  );
};

export default Pets;
