describe("Bienvenido al curso de Cypress sección 1", () => {
 
  it("Mi primer Test -> Hola mundo", () => {
    cy.log("Hola mundo")
    cy.wait(1500)
  })

  it("Segundo test -> campo name", () =>{
    cy.visit("https://demoqa.com/text-box")
    cy.get("#userName").type("Paula")
    cy.wait(4000)

  })   
})//cierre de describe
