import { RegisterProps } from "./interfaces"

export async function createNewPet(formData: RegisterProps): Promise<RegisterProps> {
  const response = await fetch("http://localhost:1881/pets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });

  if (!response.ok) {
    throw new Error(`Erro ao cadastrar pet: ${response.statusText}`);
  }

  const data: RegisterProps = await response.json();
  return data;
}

export async function getAllPets(): Promise<Array<RegisterProps>> {
  const response = await fetch("http://localhost:1881/pets", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  })

  if (!response.ok) {
    throw new Error(`Erro ao listar todos os pets: ${response.statusText}`)
  }

  const data: Array<RegisterProps> = await response.json()
  return data
}

export async function getPetById(id: number): Promise<Array<RegisterProps>> {
  const response = await fetch(`http://localhost:1881/pets/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  })

  if (!response.ok) {
    throw new Error(`Erro ao listar todos os pets: ${response.statusText}`)
  }

  const data: Array<RegisterProps> = await response.json()
  return data
}

export async function editPet(pet: RegisterProps): Promise<RegisterProps[]> {
  const response = await fetch(`http://localhost:1881/pets/${pet.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pet),
  });

  if (!response.ok) {
    throw new Error(`Erro ao editar pet: ${response.statusText}`);
  }

  return response.json();
}

export async function deletePet(pet: RegisterProps): Promise<RegisterProps[]> {
  const response = await fetch(`http://localhost:1881/pets/${pet.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
  });

  if (!response.ok) {
    throw new Error(`Erro ao remover pet: ${response.statusText}`);
  }

  return response.json();
}
