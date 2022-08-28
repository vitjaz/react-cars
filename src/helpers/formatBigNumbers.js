const formatter = Intl.NumberFormat('en', { notation: 'compact' });

export const formatFunc = (number) => {
  return formatter.format(number);
};

export const addSpacesToNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
