import React from 'react';
import { mount } from '@cypress/react';
import App from './App';
import 'tailwindcss/dist/tailwind.css'
it('renders learn react link', () => {
  mount(<App />);
  cy.get('h1').contains('User Details');
});

it("intercepts post request", () => {
  cy.intercept('GET', 'https://jsonplaceholder.typicode.com/*').as('getUserDetails')

  mount(<App />);
  cy.wait('@getUserDetails')
  cy.get('.userProfileCard').eq(0).should("exist");
})