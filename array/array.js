
var ProductManag = function() {
    this.products = [];
    this.addProduct = function(product) {
      this.products.push(product);
    };
    this.getProducts = function() {
      return this.products;
    };
  };

  var productManag = new ProductManag();
  console.log(productManag.getProducts());

  var product = {
    name: 'Apple',
    price: '$2.99',
    description: 'Este es un producto prueba'
  };
  productManag.addProduct(product);
  /* title: “producto de prueba” */
  /* description:”Este es un producto prueba” */
  
  /* price:200, */
  
  /* thumbnail:”Sin imagen” */
  /* code:”abc123”, */
  
  /* Stock: 25 */
  

  console.log(productManag.getProducts());

  console.log(productManag.getProducts());
  
  productManag.addProduct(product);