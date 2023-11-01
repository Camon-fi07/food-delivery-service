export const convertDate = (date: string) => {
  const [datePart, timePart] = date.split("T");
  const [year, month, day] = datePart.split("-");
  const [hours, minutes, seconds] = timePart.split(":");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};
