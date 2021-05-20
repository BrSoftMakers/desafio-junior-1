import React, { Component } from "react";
import axios from "axios";

const initialState = {
  pet: { nome: "", idade: "", tipo: "", raca: "", nome_dono: "", telefone: "" },
  list: [],
  viewDados: false,
};

export default class TablePetshop extends Component {
  state = { ...initialState };

  componentWillMount() {
    axios("http://localhost:3001/list").then((resp) => {
      this.setState({ list: resp.data });
    });
  }

  clear() {
    this.setState({ pet: initialState.pet, viewDados: false });
  }

  savePet() {
    const pet = this.state.pet;
    const method = pet.id ? "put" : "post";
    const url = pet.id
      ? "http://localhost:3001/edit/" + `${pet.id}`
      : "http://localhost:3001/create";
    axios[method](url, pet).then((resp) => {
      const list = this.getUpdatedList(resp.data);
      this.setState({ pet: initialState.pet, list });
    });
  }

  getUpdatedList(pet) {
    const list = this.state.list.filter((p) => p.id !== pet.id);
    list.unshift(pet);
    return list;
  }

  getRemoveList(pet) {
    return this.state.list.filter((p) => p.id !== pet.id);
  }

  updateField(event) {
    const pet = { ...this.state.pet };
    pet[event.target.name] = event.target.value;
    this.setState({ pet });
  }

  renderForm() {
    return (
      <div className="container">
        <div className="form">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>Nome</label>
                <input
                  type="text"
                  className="form-control"
                  disabled={this.state.viewDados}
                  name="nome"
                  value={this.state.pet.nome}
                  onChange={(e) => this.updateField(e)}
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>Idade</label>
                <input
                  type="text"
                  className="form-control"
                  disabled={this.state.viewDados}
                  name="idade"
                  value={this.state.pet.idade}
                  onChange={(e) => this.updateField(e)}
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>Tipo</label>
                <input
                  type="text"
                  className="form-control"
                  disabled={this.state.viewDados}
                  name="tipo"
                  value={this.state.pet.tipo}
                  onChange={(e) => this.updateField(e)}
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>Raça</label>
                <input
                  type="text"
                  className="form-control"
                  disabled={this.state.viewDados}
                  name="raca"
                  value={this.state.pet.raca}
                  onChange={(e) => this.updateField(e)}
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>Nome do Dono</label>
                <input
                  type="text"
                  className="form-control"
                  disabled={this.state.viewDados}
                  name="nome_dono"
                  value={this.state.pet.nome_dono}
                  onChange={(e) => this.updateField(e)}
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>Telefone</label>
                <input
                  type="text"
                  className="form-control"
                  disabled={this.state.viewDados}
                  name="telefone"
                  value={this.state.pet.telefone}
                  onChange={(e) => this.updateField(e)}
                />
              </div>
            </div>

            <hr />
            {this.renderButtons()}
          </div>
        </div>
      </div>
    );
  }

  load(pet) {
    this.setState({ pet, viewDados: false });
  }

  viewPet(pet) {
    this.setState({ pet, viewDados: true });
  }

  remove(pet) {
    axios.delete("http://localhost:3001/delete/" + pet.id).then((resp) => {
      const list = this.getRemoveList(pet);
      this.setState({ list });
    });
  }

  renderButtons() {
    if (this.state.viewDados) {
      return (
        <div className="row">
          <div className="col-12 d-flex justify-content-end mb-4">
            <button
              className="btn btn-secondary ms-2"
              onClick={(e) => this.clear()}
            >
              Voltar
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="row">
        <div className="col-12 d-flex justify-content-end mb-4">
          <button className="btn btn-primary" onClick={(e) => this.savePet(e)}>
            Salvar
          </button>
          <button
            className="btn btn-secondary ms-2"
            onClick={(e) => this.clear(e)}
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  }

  renderTable() {
    return (
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Tipo</th>
            <th>Raça</th>
            <th>Nome do dono</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }

  renderRows() {
    return this.state.list.map((pet) => {
      return (
        <tr key={pet.id}>
          <td>{pet.nome}</td>
          <td>{pet.idade}</td>
          <td>{pet.tipo}</td>
          <td>{pet.raca}</td>
          <td>{pet.nome_dono}</td>
          <td>{pet.telefone}</td>
          <td>{this.renderButtonsAcoes(pet)}</td>
        </tr>
      );
    });
  }

  renderButtonsAcoes(pet) {
    return (
      <div>
        <button
          className="btn btn-outline-info"
          onClick={() => this.viewPet(pet)}
        >
          <i className="fas fa-eye"></i>
        </button>
        <button
          className="btn btn-outline-info ms-2"
          onClick={() => this.load(pet)}
        >
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button
          className="btn btn-outline-info ms-2"
          onClick={() => this.remove(pet)}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Cadastro de Petshop</h1>
        {this.renderForm()}
        {this.renderTable()}
      </div>
    );
  }
}
