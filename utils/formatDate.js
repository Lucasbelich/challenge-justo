export const formatDate = (date) => {
  const newDate = new Date(date);
  let hour = newDate.getHours();
  const minutes = newDate.getMinutes().toString().padStart(2, "0");
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;

  return `${hour}:${minutes} ${ampm}`;
};
