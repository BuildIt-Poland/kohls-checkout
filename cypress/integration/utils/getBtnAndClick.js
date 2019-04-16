/* global cy*/

export default function getBtnAndClick(selector, content) {
  return cy
    .get(selector)
    .contains(content)
    .click();
}
