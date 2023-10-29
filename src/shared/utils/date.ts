export const getMinutesFromDate = (date: Date): number =>
  date.getHours() * 60 + date.getMinutes();

export const formatMinutesToText = (minutes: number): string => {
  const days = Math.floor(minutes / (24 * 60));
  minutes %= 24 * 60;
  const hours = Math.floor(minutes / 60);
  minutes %= 60;

  let result = "";

  if (days > 0) {
    result += `${days} day${days > 1 ? "s" : ""} `;
  }
  if (hours > 0) {
    result += `${hours} hour${hours > 1 ? "s" : ""} `;
  }
  if (minutes > 0) {
    result += `${minutes} minute${minutes > 1 ? "s" : ""}`;
  }

  return result.trim();
};
