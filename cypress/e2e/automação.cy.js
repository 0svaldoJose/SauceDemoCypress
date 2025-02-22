beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
});

describe('Login com credenciais válidas e inválidas', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com');
    });

    it('Deve fazer login com credenciais válidas', () => {
        cy.login('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory.html');
    });

    it('Deve exibir erro para credenciais inválidas', () => {
        cy.login('invalid_user', 'wrong_password');
        cy.get('[data-test="error"]').should('be.visible')
          .and('contain', 'Epic sadface');
    });
});

describe('Gerenciamento de produtos no carrinho', () => {
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce');
    });

    it('Deve adicionar um produto ao carrinho e verificar se está correto', () => {
        cy.adicionarProduto('Sauce Labs Backpack');
        cy.verificarProduto('Sauce Labs Backpack');
    });

    it('Deve remover um produto do inventário', () => {
        cy.adicionarProduto('Sauce Labs Backpack');
        cy.removerProdutoInventario('Sauce Labs Backpack');
        cy.get('.shopping_cart_badge').should('not.exist');
    });

    it('Deve remover um produto do carrinho', () => {
        cy.adicionarProduto('Sauce Labs Backpack');
        cy.removerProdutoCarrinho('Sauce Labs Backpack');
        cy.get('.cart_item').should('not.exist');
    });
});