

const addLeadingZero = (d) => {
  return d < 10 ? `0` + d : d;
};
export const getMinutes = () => {
  let d = new Date();
  return addLeadingZero(d.getMinutes());
};
export const getHours = () => {
  let d = new Date();
  return addLeadingZero(d.getHours());
};
export const getDate = () => {
  let d = new Date();
  return addLeadingZero(d.getDate());
};
export const getMonth = () => {
  let d = new Date();
  return addLeadingZero(d.getMonth() + 1);
};
export const getFullYear = () => {
  let d = new Date();
  return addLeadingZero(d.getFullYear());
};

export const getWorked = (time, timeF) => {
  const timeArr = time.split(":");
  const timeFArr = timeF.split(":");
  return `${timeFArr[0] - timeArr[0]}:${timeFArr[1] - timeArr[1]}`;
};

  export const month = [31, 28, 30, 31, 31, 30, 31, 31, 30, 31, 30, 31];
