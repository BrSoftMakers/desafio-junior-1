/* eslint-disable @typescript-eslint/no-unused-vars */
let petIdDelete = "";

function petDataDelete(id) {
    petIdDelete = id;
}
async function handleRemove() {
    const url = `http://localhost:3333/pets/${petIdDelete}`;
    const response = await fetch(url, {
        method: "DELETE",
        headers: new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        }),
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    document.location.reload(true);
}
