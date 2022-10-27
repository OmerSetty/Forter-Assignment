export function getCurrentHourAndMinutes() {
  const date = new Date;
  let hour = date.getHours().toString(), minutes = date.getMinutes().toString();
  if (hour.length === 1) hour = hour.padStart(2, '0');
  if (minutes.length === 1) minutes = minutes.padStart(2, '0');
  return `${hour}:${minutes}`;
}