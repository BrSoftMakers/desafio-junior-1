import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  updatePet,
  deletePet,
  fetchPet,
  fetchRacesByType,
  fetchUsers,
} from "../../requests";
import { useHistory } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Field from "../../components/Field";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const petInitialState = {
  race: {},
  user: {},
};

const Pet = () => {
  const [formEdit, setFormEdit] = useState(false);
  const [formData, setFormData] = useState({});
  const [pet, setPet] = useState(petInitialState);
  const [raceOptions, setRaceOptions] = useState([]);
  const [userOptions, setUserOptions] = useState([]);
  const params = useParams();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updatePet(params.id, formData);
    setFormEdit(false);
    fetchPetAPI();
    toast.success("Pet updated successfully!");
  };

  const handleChange = ({ name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = async () => {
    await deletePet(params.id);
    toast.success("Pet deleted successfully!");
    history.push("/");
  };

  const fetchPetAPI = async () => {
    const { data } = await fetchPet(params.id);
    setPet(data);
  };

  useEffect(() => {
    fetchPetAPI();
  }, []);

  useEffect(() => {
    const fetchRacesAPI = async () => {
      const { data } = await fetchRacesByType(pet.race.type);
      setRaceOptions(data);
    };

    const fetchUsersAPI = async () => {
      const { data } = await fetchUsers();
      setUserOptions(data);
    };

    fetchRacesAPI();
    fetchUsersAPI();
  }, [formEdit]);

  return (
    <section>
      <div className="container">
        <Content>
          <Info>
            <Name>{pet.name}</Name>
            <Data>
              <InfoPet>
                <span>
                  <b>Type: </b> {pet.race.type}
                </span>
                <span>
                  <b>Race: </b>
                  {pet.race.name}
                </span>
                <span>
                  <b>Age: </b>
                  {pet.age}
                </span>
              </InfoPet>
              <InfoOwner>
                <span>
                  <b>Owner: </b>
                  {pet.user.name}
                </span>
                <span>
                  <b>Telephone: </b>
                  {pet.user.telephone}
                </span>
              </InfoOwner>
              <Buttons>
                <button title="Edit" onClick={() => setFormEdit(!formEdit)}>
                  <AiFillEdit />
                </button>
                <button title="Delete" onClick={() => handleDelete()}>
                  <AiFillDelete />
                </button>
              </Buttons>
            </Data>
          </Info>
          {formEdit && (
            <EditForm onSubmit={(event) => handleSubmit(event)}>
              <h1>Edit</h1>
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
                value={pet.race_id}
                onChange={({ target }) => handleChange(target)}
              />
              <Field
                label="Age"
                name="age"
                type="number"
                onChange={({ target }) => handleChange(target)}
              />
              <Select
                label="Onwer"
                name="user_id"
                options={userOptions}
                value={pet.user_id}
                onChange={({ target }) => handleChange(target)}
              />
              <Button>Confirm</Button>
            </EditForm>
          )}
        </Content>
      </div>
    </section>
  );
};

export default Pet;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;
`;

const Info = styled.div`
  width: 600px;
  background-color: var(--color-primary);
  padding: 10px;
  border-radius: 10px;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

const Data = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoPet = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  border-radius: 10px;
  background-color: var(--color-secondary);
  padding: 10px;

  h2 {
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--color-primary);
  }

  span {
    font-size: 1.1rem;
    color: var(--color-primary);
  }
`;

const InfoOwner = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  border-radius: 10px;
  background-color: var(--color-secondary);
  padding: 10px;

  span {
    font-size: 1.1rem;
    color: var(--color-primary);
  }
`;

const Buttons = styled.div`
  width: 50px;
  border-radius: 10px;
  background-color: var(--color-secondary);

  button {
    color: var(--color-primary);
    font-size: 1.5rem;
    background-color: var(--color-primary);
    border: none;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    transition-duration: 0.5s;
    background-color: var(--color-secondary);
    &:hover {
      color: white;
    }
  }
`;

const EditForm = styled.form`
  width: 600px;
  margin: 50px 0;
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
