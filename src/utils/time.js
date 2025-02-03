export default function convertDateToLocalString(dateString = "") {
  return new Date(dateString).toLocaleDateString();
}
