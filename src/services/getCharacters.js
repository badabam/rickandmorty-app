export default function getCharacters(url) {
  return fetch(url).then(res => res.json())
}
