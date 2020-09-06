const formatValue = (value: number): string => {
  return (!value) ? '' :  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

export default formatValue;
