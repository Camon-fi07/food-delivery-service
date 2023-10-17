export const phoneMask = (
  oldValue: string,
  e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
) => {
  if (e.target.value.length < oldValue.length) {
    return e;
  }
  const originValue = e.target.value;
  let newValue = "";
  for (let i = 0; i < originValue.length; i++) {
    if (i === 0) {
      if (originValue[i] === "8") newValue += "+7 (";
      else if (originValue[i] === "+" && originValue[i + 1] === "7") {
        newValue += "+7 (";
        i += 3;
      }
      continue;
    }
    newValue += originValue[i];
    if (i === 6 && i === originValue.length - 2) {
      newValue += ") ";
    }
    if (i === 11 && i === originValue.length - 2) newValue += " ";
    if (i === 14 && i === originValue.length - 2) newValue += " ";
  }
  const temp: typeof e = Object.assign(e);
  temp.target.value = newValue;
  return temp;
};
