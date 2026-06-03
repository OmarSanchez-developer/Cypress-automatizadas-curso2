/// <reference types="cypress" />
describe('example to-do app', () => {
  beforeEach(() => {
    cy.setCookie('__AUTH-TOKEN-APP', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxY2VhYjE2LWNjM2ItNGE1MC1hYmZlLTFhMzMwMGE4ZTg3NSIsImlhdCI6MTc4MDQ2MDcxMCwiZXhwIjoxNzgzMDUyNzEwfQ.eSZdjz2UPxVwefoHMAmxWztfdxoex_KQ08ntPZkhX_M',
      {secure: true}
    )
    cy.visit('https://www.laboratoriodetesting.com/form-practice')
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
  it("encontrar elementos hijos", () => {
    cy.get('[data-at="header"]').find('ul > li:nth-child(2)').click()
  })

  // Se llena Formulario y se marcan checked de interés
  it('Check and uncheck', () => {
    cy.get('[data-at="practice-interests-manual"]').check()
    cy.get('[data-at="practice-interests-devops"]').check()
    cy.get('[data-at="practice-interests-manual"]').
      should('be.checked')
    cy.get('[data-at="practice-interests-development"]').
      should('not.be.checked')
  })

      //Manejo dropdown
  it("manejo de dropdown", () => {
    cy.get('[data-at="practice-country"]').select('Colombia')
    cy.get('[data-at="practice-country"]').should('be.visible').and('have.value', 'Colombia')
  })
        //Manejo de Radio  Button
  it("manejo de radio button", () => {
    cy.get('#sch_Mañana').click()
    cy.get('#sch_Mañana').should('be.checked')
    cy.get('#sch_Tarde').should('not.be.checked')
    cy.get('#sch_Noche').should('not.be.checked')
  })

        //Escribir en campos de texto
  it.only("Escribir en campos de texto", () => {
    cy.get('[data-at="practice-name"]').type('Omar', {force: true}) //fuerza para escribir en un elemento web anterior como un div
    cy.get(':nth-child(2) > .bg-gray-50').type('123') //{enter} oculta contraseña
  })
})