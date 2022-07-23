import { useState } from "react";
import PetCard from "../../components/PetCard";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { SectionWrapper } from "./style";

const Pets = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("pets");

  return (
    <SectionWrapper>
      {loading && <p>Carregando...</p>}
      {posts && posts.map((post) => <PetCard key={post.id} post={post} />)}
    </SectionWrapper>
  );
};

export default Pets;
