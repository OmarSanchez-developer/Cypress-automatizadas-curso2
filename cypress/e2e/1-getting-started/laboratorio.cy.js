/// <reference types="cypress" />
describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.laboratoriodetesting.com/products/chaqueta-deportiva-para-correr')
  })

  it('displays two todo items by default', () => {
   cy.get('.inline-block').click()
   cy.get('.inline-block')
   cy.wait(20000)
   cy.contains('Añadir al carrito').click()
   cy.get('[data-at=cart-opener-mobile]').click()
   cy.get('.py-5.overflow-auto').should('contains.text'
    ,'Bandas Elásticas de Resistencia')
   cy.get('.text-black.text-center').should
   ('have.text', 'Total: $350.00')
   cy.get('[data-at=empty-cart]').click()
   cy.get('.text-black.text-center').should
   ('have.text', 'Total: $0.00')
  })
  
  //Mapear ó encontrar elementos por texto
  it('encontrar elementos por texto', ()=> {
    cy.contains('Acceder').click()
  })

  it('encontrar elementos por atributo', ()=> {
    cy.get('[data-at="increment-quantity"]').click()
    cy.get('[data-at="add-to-cart"]').click()
    cy.get('[name="email"]')
  })
 
    //Encontrar elementos dentro de header y nietos con find y selector(eq ó selectorCss: Ul> li:nth-child(2))
  it.only("encontrar elementos hijos", () => {
    cy.get('[data-at="header"]').find('ul > li:nth-child(2)').click()
  })
})
