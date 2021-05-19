import React from 'react';
import { 
  HomeContainer, 
  Content,
  Greetings,
  Greeting,
  ShowPetsBtn,
  GreetingImage 
} from './style';
import Header from '../../components/Header'; 

const Home = () => {
  return (
      <>
        <Header />
        <HomeContainer id="homePage">
          <Content>
            <Greetings>
              <Greeting>
                A paixão pelos animaizinhos  é oque nos move
              </Greeting>
              <ShowPetsBtn to="petsPage" smooth="true" duration={500}>Ver Pets</ShowPetsBtn>
            </Greetings>
            <GreetingImage src="/home-image.svg" alt="image" />
          </Content>
        </HomeContainer>
      </>
  );
}

export default Home;
