const DEF_URL = "http://pinterest.com/pin/create/button/";

export function PinShareParams(
  LinkURL: string,
  ImageURL: string,
  Description: string
) {
  let params = `${DEF_URL}?url=${LinkURL}&media=${ImageURL}&description=${Description}`;
  return params;
}
