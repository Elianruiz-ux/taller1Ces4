export const convertirDecimal = (e) => {
  return e.toLocaleString("es-ES", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
