import LoginPage from "../e2e/Swag_lab/loginPage"
import HomePage from "../e2e/Swag_lab/Home_page"
import Cartpage from "../e2e/Swag_lab/page_Cart"

describe('swaglab', () => {
  
  it('Homepage', () => {
  
    cy.fixture('swaglabs').then( (testdata)=>{
        
      //Visit the site
      cy.visit(testdata.URL);

        const ln = new LoginPage()
          ln.SetUserName(testdata.username);
          ln.SetPassword(testdata.password);
          ln.ClickSubmit();

        const hp = new HomePage()
          hp.verifyLogo(testdata.applogo);
          hp.AddFilter(testdata.filtervalue);
          hp.addProduct();
          hp.goToCart();

        const ct = new Cartpage()
          ct.ValidateProduct(testdata.Product_Name);
          ct.RemoveProduct();
          ct.Validate_Remove();
          ct.Validate_Remove1(testdata.list);

        });
    });
});