const formatDate = (date: Date): string => {
  let dateOnCorrectFormat = new Date(date);
  return new Intl.DateTimeFormat().format(dateOnCorrectFormat);
}

export default formatDate;
