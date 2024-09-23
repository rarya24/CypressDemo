describe("HTTP Requests",()=>{
    
    it("GET Call",()=>{

        cy.request('GET','https://reqres.in/api/users?page=2')
        .its('status')
        .should('equal',200);
    })
 
    it("POST Call",()=>{

        cy.request('POST','https://reqres.in/api/users')
        .its('status')
        .should('equal',201);
    })

    
    it("PUT Call",()=>{

        cy.request('PUT','https://reqres.in/api/users/859')
        .its('status')
        .should('equal',200);
    })

    it("DELETE Call",()=>{

        cy.request('DELETE','https://reqres.in/api/users/2')
        .its('status')
        .should('equal',200);
    })
   
})