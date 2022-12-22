const translateStatus = (status: string): string => {
  switch (status) {
    case "Alive":
      return "Vivo";
    case "Dead":
      return "Muerto";
    default:
      return "Desconocido";
  }
};

export { translateStatus };
