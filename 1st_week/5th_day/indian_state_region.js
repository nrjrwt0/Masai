var state = "Haryana";

if (
  state === "Chandigarh" ||
  state === "Delhi" ||
  state === "Haryana" ||
  state === "Himachal Pradesh" ||
  state === "Jammu and Kashmir" ||
  state === "Ladakh" ||
  state === "Punjab" ||
  state === "Uttarakhand" ||
  state === "Uttar Pradesh" ||
  state === "Haryana"
) {
  console.log("NORTH");
} else if (
  state === "Bihar" ||
  state === "Orissa" ||
  state === "Jharkhand" ||
  state === "West Bengal" ||
  state === "Assam" ||
  state === "Sikkim" ||
  state === "Nagaland" ||
  state === "Meghalaya" ||
  state === "Sikkim"
) {
  console.log("EAST");
} else if (
  state === "Andhra Pradesh" ||
  state === "Karnataka" ||
  state === "Kerala" ||
  state === "Tamil Nadu" ||
  state === "Telangana" ||
  state === "Lakshadweep" ||
  state === "Puducherry" ||
  state === "Tamil Nadu"
) {
  console.log("SOUTH");
} else {
  console.log("WEST");
}
