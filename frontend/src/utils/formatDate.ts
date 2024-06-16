export const formatDateForHumans = (isoString: string): string => {
  const date = new Date(isoString);
  return (
    date.toLocaleDateString("en-US") +
    " " +
    date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
  );
};
