export function make_title_case(s: string): string {
  if (typeof s !== "string") return "";
  for (let i = 0, capitalize_next = true; i < s.length; i++) {
    if (capitalize_next) {
      capitalize_next = false;
      s = s.slice(0, i) + s[i].toLocaleUpperCase() + s.slice(i + 1);
    }
    if (/\s/.test(s[i])) {
      capitalize_next = true;
    }
  }
  return s;
}

export function state_code(s: string): string {
  s = make_title_case(s);
  switch (s) {
    case "Alabama":
      return "AL";
    case "Alaska":
      return "AK";
    case "Arizona":
      return "AZ";
    case "Arkansas":
      return "AR";
    case "California":
      return "CA";
    case "Colorado":
      return "CO";
    case "Connecticut":
      return "CT";
    case "Delaware":
      return "DE";
    case "District of Columbia":
      return "DC";
    case "Florida":
      return "FL";
    case "Georgia":
      return "GA";
    case "Hawaii":
      return "HI";
    case "Idaho":
      return "ID";
    case "Illinois":
      return "IL";
    case "Indiana":
      return "IN";
    case "Iowa":
      return "IA";
    case "Kansas":
      return "KS";
    case "Kentucky":
      return "KY";
    case "Louisiana":
      return "LA";
    case "Maine":
      return "ME";
    case "Maryland":
      return "MD";
    case "Massachusetts":
      return "MA";
    case "Michigan":
      return "MI";
    case "Minnesota":
      return "MN";
    case "Mississippi":
      return "MS";
    case "Missouri":
      return "MO";
    case "Montana":
      return "MT";
    case "Nebraska":
      return "NE";
    case "Nevada":
      return "NV";
    case "New Hampshire":
      return "NH";
    case "New Jersey":
      return "NJ";
    case "New Mexico":
      return "NM";
    case "New York":
      return "NY";
    case "North Carolina":
      return "NC";
    case "North Dakota":
      return "ND";
    case "Ohio":
      return "OH";
    case "Oklahoma":
      return "OK";
    case "Oregon":
      return "OR";
    case "Pennsylvania":
      return "PA";
    case "Rhode Island":
      return "RI";
    case "South Carolina":
      return "SC";
    case "South Dakota":
      return "SD";
    case "Tennessee":
      return "TN";
    case "Texas":
      return "TX";
    case "Utah":
      return "UT";
    case "Vermont":
      return "VT";
    case "Virginia":
      return "VA";
    case "Washington":
      return "WA";
    case "West Virginia":
      return "WV";
    case "Wisconsin":
      return "WI";
    case "Wyoming":
      return "WY";
    default:
      return "XX";
  }
}
