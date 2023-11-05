export const phoneMask = (
  e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
  oldValue: string,
) => {
  if (e.target.value.length < oldValue.length) return e;
  const originValue = e.target.value.replace(/[\s()]/g, "");
  let newValue = "";
  for (let i = 0; i < originValue.length; i++) {
    if (i === 0) {
      if (originValue[i] === "8") newValue += "+7 (";
      else if (originValue.length === 1 && originValue[i] === "+") newValue += "+";
      else if (originValue[i] === "+" && originValue[i + 1] === "7") {
        newValue += "+7 (";
        i += 1;
      }
      continue;
    }
    newValue += originValue[i];
    if (i === 4) newValue += ") ";
    if (i === 7) newValue += " ";
    if (i === 9) newValue += " ";
  }
  const temp: typeof e = Object.assign(e);
  temp.target.value = newValue;
  return temp;
};
