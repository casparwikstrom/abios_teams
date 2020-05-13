export function convertRole(role) {
  if (!(typeof role != "undefined" && role != null)) {
    return "Unknown role";
  } else if (role === "1") {
    return "Carry";
  } else if (role === "2") {
    return "Mid";
  } else if (role === "3") {
    return "Offlane";
  } else if (role === "4") {
    return "Support";
  } else {
    return "Hard Support";
  }
}
