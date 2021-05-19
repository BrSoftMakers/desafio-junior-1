<template>
  <div class="animais">
    <v-container>
      <div class="animais-form">
        <form>
          <v-row>
            <v-col cols="12" sm="3">
              <v-text-field
                label="Nome do Animal"
                placeholder="Ex: Marley"
                outlined
                v-model="animal.nome_animal"
                prepend-inner-icon="mdi-dog-side"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3">
              <v-text-field
                label="Tipo do Animal"
                placeholder="Ex: Cachorro"
                outlined
                v-model="animal.tipo_animal"
                prepend-inner-icon="mdi-paw"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3">
              <v-text-field
                label="Raça do Animal"
                placeholder="Ex: Labrador"
                outlined
                v-model="animal.raca_animal"
                prepend-inner-icon="mdi-paw"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3">
              <v-text-field
                label="Idade do Animal"
                placeholder="Ex: 15"
                outlined
                type="number"
                v-model="animal.idade_animal"
                prepend-inner-icon="mdi-cake-variant"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Nome do Dono"
                placeholder="Ex: Luis Manoel"
                outlined
                v-model="animal.nome_dono"
                prepend-inner-icon="mdi-account"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Telefone do Dono"
                placeholder="Ex: (81)99684-3403"
                outlined
                v-model="animal.telefone_dono"
                v-mask="'(##) #####-####'"
                prepend-inner-icon="mdi-phone"
              ></v-text-field>
            </v-col>
          </v-row>
        </form>

        <div class="buttons">
          <v-btn depressed v-if="mode === 'save'" @click="save" color="success">
            Salvar
            <v-icon dark right> mdi-content-save </v-icon>
          </v-btn>
          <v-divider vertical></v-divider>
          <v-btn
            depressed
            v-if="mode === 'remove'"
            @click="remove"
            color="error"
          >
            Excluir
            <v-icon dark right> mdi-delete </v-icon>
          </v-btn>
          <v-divider vertical></v-divider>
          <v-btn
            depressed
            @click="reset"
            class="btn-cancel ml-2"
            color="primary"
          >
            Cancelar
            <v-icon dark right> mdi-close-thick </v-icon>
          </v-btn>
        </div>
      </div>

      <v-data-table :items="animais" :headers="headers">
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn
            class="bt-actions"
            color="primary"
            fab
            elevation="0"
            small
            @click="loadAnimal(item)"
            dark
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn
            class="bt-actions ml-1"
            color="error"
            fab
            elevation="0"
            small
            @click="loadAnimal(item, 'remove')"
            dark
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>

      <div class="lista-animais">
        <v-row>
          <v-col
            cols="12"
            sm="3"
            v-for="animal in listaAnimais"
            :key="animal.id"
          >
            <v-card class="mx-auto" max-width="344">
              <v-card-text>
                <div>
                  Dono: <strong> {{ animal.nome_dono }} </strong>
                </div>
                <p class="display-1 text--primary">{{ animal.nome_animal }}</p>
                <p>
                  Tipo: <strong> {{ animal.tipo_animal }} </strong>
                </p>
                <p>
                  Raça: <strong> {{ animal.raca_animal }} </strong>
                </p>
                <p>
                  Idade: <strong> {{ animal.idade_animal }} </strong>
                </p>
                <p>
                  Telefone do Dono:
                  <strong> {{ animal.telefone_dono }} </strong>
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <div class="lista-btn text-center mt-10">
          <v-btn
            depressed
            color="primary"
            v-if="loadMore"
            @click="loadListaAnimais"
          >
            Carregar Mais
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { showError } from "../global";
import api from "../config/api";

export default {
  name: "Animais",
  data: function () {
    return {
      mode: "save",
      animal: {},
      animais: [],
      listaAnimais: [],
      page: 1,
      loadMore: true,
      headers: [
        {
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Código", value: "id" },
        { text: "Nome do Animal", value: "nome_animal" },
        { text: "Tipo do Animal", value: "tipo_animal" },
        { text: "Raça do Animal", value: "raca_animal" },
        { text: "Idade do Animal", value: "idade_animal" },
        { text: "Nome do Dono", value: "nome_dono" },
        { text: "Telefone do Dono", value: "telefone_dono" },
        { text: "Ações", value: "actions" },
      ],
    };
  },
  methods: {
    loadAnimais() {
      const url = `/animais`;
      api.get(url).then((res) => {
        this.animais = res.data;
      });
    },

    reset() {
      this.mode = "save";
      this.animal = {};
      this.loadAnimais();
    },

    save() {
      const method = this.animal.id ? "put" : "post";
      const id = this.animal.id ? `/${this.animal.id}` : "";
      api[method](`/animais${id}`, this.animal)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },

    remove() {
      const id = this.animal.id;
      api
        .delete(`/animais/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },

    loadAnimal(animal, mode = "save") {
      this.mode = mode;
      api.get(`/animais/${animal.id}`).then((res) => (this.animal = res.data));
    },

    loadListaAnimais() {
      api(`/animaisPaginado?page=${this.page}`).then((res) => {
        this.listaAnimais = this.listaAnimais.concat(res.data.data);
        this.page++;

        if (res.data.data.length === 0) this.loadMore = false;
      });
    },
  },
  watch: {
    $route(to) {
      this.listaAnimais = [];
      this.page = 1;
      this.loadMore = true;

      this.loadAnimais();
      this.loadListaAnimais();
    },
  },
  mounted() {
    this.loadAnimais();
    this.loadListaAnimais();
  },
};
</script>

<style>
.animais {
  background: rgb(234, 234, 234);
  color: inherit;
  height: 100vh;
}

.animais-form {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 10px;
}

.lista-animais {
  margin-top: 50px;
}
</style>
