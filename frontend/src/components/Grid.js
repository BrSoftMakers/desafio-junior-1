import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  padding-right: 30px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ pets, setPets, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:3001/pets/" + id)
      .then(({ data }) => {
        const newArray = pets.filter((pets) => pets.id !== id);

        setPets(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>idade</Th>
                    <Th>Tipo</Th>
                    <Th>Raca</Th>
                    <Th>Contato</Th>
                    <Th>Endereco</Th>
                </Tr>
            </Thead>
            <Tbody>
                {pets.map((item, i) => (
                    <Tr key={i}>
                        <Td width="10%">{item.nome}</Td>
                        <Td width="10%">{item.idade}</Td>
                        <Td width="10%">{item.tipo}</Td>
                        <Td width="10%">{item.raca}</Td>
                        <Td width="10%">{item.contato}</Td>
                        <Td width="10%">{item.endereco}</Td>
                        <Td alignCenter width="5%">
                            <FaEdit onClick={() => handleEdit(item)} />
                        </Td>
                        <Td alignCenter width="5%">
                            <FaTrash onClick={() => handleDelete(item.id)} />
                        </Td>
                    </Tr>
                  ))}
            </Tbody>
        </Table>
    );
}

export default Grid;