const date_formater = (date_time: string) => {
  return new Date(date_time).toISOString();
};

export default date_formater;
