import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import List from "../../components/List";
import { fetchUsers } from "../../requests";
import Field from "../../components/Field";
import Button from "../../components/Button";
import { useParams } from "react-router-dom";
import { createUsers } from "../../requests";
import { toast } from "react-toastify";

const Users = () => {
  const [formUser, setFormUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createUsers(formData);
    setFormUser(false);
    fetchUserAPI();
    toast.success("User created successfully!");
  };

  const handleChange = ({ name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const fetchUserAPI = async () => {
    const { data } = await fetchUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUserAPI();
  }, []);

  return (
    <section>
      <div className="container">
        <Content>
          <h1>Users</h1>
          <CreateUser onClick={() => setFormUser(!formUser)}>
            <h1>Create User</h1>
          </CreateUser>
          <List data={users} />
          {formUser && (
            <Form onSubmit={handleSubmit}>
              <h1>Register</h1>
              <Field
                label="Name"
                name="name"
                type="text"
                onChange={({ target }) => handleChange(target)}
              />
              <Field
                label="Telephone"
                name="telephone"
                type="text"
                onChange={({ target }) => handleChange(target)}
              />
              <Button>Confirm</Button>
            </Form>
          )}
        </Content>
      </div>
    </section>
  );
};

export default Users;

const Content = styled.div`
  margin: 100px 0;
  & > h1 {
    text-align: center;
    font-size: 3rem;
    color: var(--color-primary);
    margin-bottom: 50px;
  }
`;

const CreateUser = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 73px;
  border: 2px solid var(--color-primary);
  background-color: var(--color-primary);
  margin-bottom: 10px;
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    background-color: var(--color-others);
    color: var(--color-primary);
  }
`;

const Form = styled.form`
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
