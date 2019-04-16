/* global cy*/

export default function fillFormInput(name, content) {
  return cy.get(`input[name=${name}]`).type(content);
}
