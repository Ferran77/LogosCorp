export const openExxtrainfo = () => {
  document.getElementById("extra-info").classList.add("active");
  document.getElementById("extra-info-overlay").classList.add("active");
};
export const closeExxtrainfo = () => {
  document.getElementById("extra-info").classList.remove("active");
  document.getElementById("extra-info-overlay").classList.remove("active");
};
