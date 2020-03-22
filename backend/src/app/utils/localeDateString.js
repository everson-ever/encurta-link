const localeDate = date => {
  date = new Date(date);
  date = date.toLocaleDateString();
  return date;
};

export default localeDate;
