const form = document.querySelector("form");
const url = "http://localhost:3333/pets";

async function sendData(e) {
    e.preventDefault();
    const button = document.getElementById("button");
    const load = document.getElementById("load");

    const radioValue = document.querySelector(
        'input[name="animal"]:checked'
    ).value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const race = document.getElementById("race").value;
    const owner = document.getElementById("owner").value;
    const telephone = document.getElementById("telephone").value;

    const img = document.getElementById("file-input").files[0];

    const formData = new FormData();

    if (name === "" || age === "" || race === "") {
        const invalid = document.getElementById("invalid");
        invalid.classList.remove("invisiblee");
        setTimeout(() => {
            invalid.classList.add("invisiblee");
        }, 1000);
        return;
    }

    button.disabled = true;
    load.classList.remove("invisiblee");

    formData.append("name", name);
    formData.append("age", age);
    formData.append("race", race);
    formData.append("animal", radioValue);
    formData.append("owner", owner);
    formData.append("contactOwner", telephone);
    formData.append("file", img);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("race").value = "";
    document.getElementById("owner").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("file-input").value = "";

    await fetch(`${url}`, {
        body: formData,
        method: "post",
    });

    setTimeout(() => {
        button.disabled = false;
        load.classList.add("invisiblee");
    }, 500);
}

form.addEventListener("submit", sendData);
