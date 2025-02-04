export const getDate = (): string => {
  const today = new Date();
  const monthNames = [
    "Január",
    "Február",
    "Március",
    "Április",
    "Május",
    "Június",
    "Július",
    "Augusztus",
    "Szeptember",
    "Oktober",
    "November",
    "December",
  ];
  const monthIndex = today.getMonth();
  const monthName = monthNames[monthIndex];
  const year = today.getFullYear();
  const date = today.getDate();
  return `${year}. ${monthName}. ${date}`;
};
