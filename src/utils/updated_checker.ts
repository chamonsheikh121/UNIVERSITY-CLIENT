const updated_checker = (created: string, updated:string) => {
  const created_date = new Date(created);
  const updated_date = new Date(updated);

  if (created_date.getTime() < updated_date.getTime()) {
    return updated_date.toISOString();
  } else {
    return null;
  }
};

export default updated_checker;
