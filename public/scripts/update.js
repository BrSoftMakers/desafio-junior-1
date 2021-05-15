/* eslint-disable @typescript-eslint/no-unused-vars */
let petId = "";

function petData(id, name, age, race, owner, telephone) {
    petId = id;

    document.getElementById("name").value = name;
    document.getElementById("age").value = age;
    document.getElementById("race").value = race;
    document.getElementById("owner").value = owner;
    document.getElementById("telephone").value = telephone;

    if (
        document.querySelector('input[name="animal"]:checked').value !==
        "animal"
    ) {
        document.getElementById("gato").checked = false;
        document.getElementById("cachorro").checked = true;
    }
}

async function handleUpdate() {
    const url = `http://localhost:3333/pets/${petId}`;

    const radioValue = document.querySelector(
        'input[name="animal"]:checked'
    ).value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const race = document.getElementById("race").value;
    const img = document.getElementById("file-input").files[0];
    const owner = document.getElementById("owner").value;
    const contactOwner = document.getElementById("telephone").value;
    const formData = new FormData();

    if (name === "" || age === "" || race === "" || owner === "") {
        return;
    }

    formData.append("name", name);
    formData.append("age", age);
    formData.append("race", race);
    formData.append("animal", radioValue);
    formData.append("file", img);
    formData.append("owner", owner);
    formData.append("contactOwner", contactOwner);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("race").value = "";
    document.getElementById("owner").value = "";
    document.getElementById("telephone").value = "";

    const response = await fetch(url, {
        method: "PUT",
        body: formData,
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    setTimeout(() => document.location.reload(true), 100);
}
