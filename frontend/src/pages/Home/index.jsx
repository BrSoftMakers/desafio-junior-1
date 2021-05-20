import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchPets } from "../../requests";
import Card from "../../components/Card";

const Home = () => {
  const [pets, setPets] = useState();

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchPets();
      setPets(response.data);
    };
    fetch();
  }, []);

  return (
    <section>
      <div className="container">
        <Content>
          <ul>
            {pets?.map(({ id, ...rest }) => {
              return (
                <li key={id}>
                  <Link to={`/pet/${id}`}>
                    <Card pet={rest} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </Content>
      </div>
    </section>
  );
};

export default Home;

const Content = styled.div`
  margin: 100px 0;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    li {
      width: 30%;
      margin-bottom: 30px;
    }
  }
`;
