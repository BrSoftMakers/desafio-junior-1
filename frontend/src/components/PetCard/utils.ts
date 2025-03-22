const formattedPhone = (phone: string) => {
  const clearPhoneNumber = phone.replace(/\D/g, "");

  if (clearPhoneNumber.length === 11) {
    const ddd = clearPhoneNumber.slice(0, 2);
    const pt1 = clearPhoneNumber.slice(2, 7);
    const pt2 = clearPhoneNumber.slice(7);
    return `(${ddd}) ${pt1}-${pt2}`;
  }

  return phone;
}

const formattedDate = (date: Date) => {
    return new Date(date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
}

export { formattedPhone, formattedDate }
