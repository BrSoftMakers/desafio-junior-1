import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  fetchUsersPets,
  createPetByUser,
  deletePet,
  fetchRaces,
} from "../../requests";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import { IoMdAdd } from "react-icons/io";
import Field from "../../components/Field";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { toast } from "react-toastify";

const User = () => {
  const [pets, setPets] = useState([]);
  const [formPet, setFormPet] = useState(false);
  const [formData, setFormData] = useState({});
  const [raceOptions, setRaceOptions] = useState([]);
  const params = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createPetByUser(params.id, formData);
    setFormPet(false);
    fetchPetAPI();
    toast.success("Pet created successfully!");
  };

  const handleChange = ({ name, value }) => {
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleDelete = async () => {
    await deletePet(params.id);
    toast.success("Pet deleted successfully!");
  };

  const fetchPetAPI = async () => {
    const response = await fetchUsersPets(params.id);
    setPets(response.data);
  };

  useEffect(() => {
    fetchPetAPI();
  }, []);

  useEffect(() => {
    const fetchRacesAPI = async () => {
      const { data } = await fetchRaces();
      setRaceOptions(data);
    };

    fetchRacesAPI();
  }, [formPet]);

  return (
    <section>
      <div className="container">
        <Content>
          <Title>My Pets</Title>
          <AddPet title="Add New Pet" onClick={() => setFormPet(!formPet)}>
            <IoMdAdd />
          </AddPet>
          {pets.length <= 0 && <h1>No pets registered.</h1>}
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
          {formPet && (
            <PetForm onSubmit={(event) => handleSubmit(event)}>
              <h1>Register Pet</h1>
              <Field
                label="Name"
                name="name"
                type="text"
                onChange={({ target }) => handleChange(target)}
              />
              <Select
                label="Race"
                name="race_id"
                options={raceOptions}
                onChange={({ target }) => handleChange(target)}
              />
              <Field
                label="Age"
                name="age"
                type="number"
                onChange={({ target }) => handleChange(target)}
              />
              <Button>Confirm</Button>
            </PetForm>
          )}
        </Content>
      </div>
    </section>
  );
};

export default User;

const Content = styled.div`
  h1 {
    text-align: center;
    font-size: 3rem;
    color: var(--color-primary);
  }

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

const Title = styled.h1`
  margin-bottom: 50px;
`;

const AddPet = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 3rem;
  border: 0;
  margin-bottom: 30px;
  background-color: var(--color-primary);
  cursor: pointer;
  transition-duration: 0.5s;

  &:hover {
    transform: scale(1.02);
  }
`;

const PetForm = styled.form`
  width: 600px;
  margin: 50px auto;
  padding: 50px 10px;
  background-color: var(--color-primary);
  border-radius: 10px;

  h1 {
    font-size: 2rem;
    text-align: center;
    color: var(--color-others);
    margin: 10px 0;
  }

  input {
    width: 100%;
    margin-bottom: 10px;
    background-color: var(--color-secondary);
    color: var(--color-primary);
  }

  label {
    color: var(--color-others);
  }

  button {
    margin-top: 20px;
  }
`;
