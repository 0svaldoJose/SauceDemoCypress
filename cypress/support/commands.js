Cypress.Commands.add('login', (user, password) => { 
    cy.get('#user-name').type(user);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
});

Cypress.Commands.add('adicionarProduto', (product) => {
    cy.get('.inventory_item').contains(product)
      .parents('.inventory_item')
      .find('.btn_inventory')
      .contains("Add to cart")
      .click();
    
    cy.get('.shopping_cart_badge').should('be.visible'); // Confirma que o carrinho tem pelo menos 1 item
});

Cypress.Commands.add('verificarProduto', (product) => { 
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('contain', product);
});

Cypress.Commands.add('removerProdutoInventario', (product) => { 
    cy.get('.inventory_item').contains(product)
      .parents('.inventory_item')
      .find('.btn_inventory')
      .contains("Remove")
      .click();
});

Cypress.Commands.add('removerProdutoCarrinho', (product) => { 
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').contains(product)
      .parents('.cart_item')
      .find('.cart_button')
      .contains("Remove")
      .click();
});