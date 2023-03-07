
class ProductManager {
    constructor() {
      this.products = [];
    }
  
    generateId() {
      return '_' + Math.random().toString(36).substr(2, 9);
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(product) {
      if (this.products.some(p => p.code === product.code)) {
        throw new Error('El código del producto ya existe');
      }
      const newProduct = {
        ...product,
        id: this.generateId()
      };
      this.products.push(newProduct);
      return newProduct;
    }
  
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (!product) {
        throw new Error('Producto no encontrado');
      }
      return product;
    }
  }
  
  // Crear una instancia de la clase ProductManager
  const manager = new ProductManager();
  
  // Llamar al método getProducts recién creada la instancia, debe devolver un arreglo vacío []
  console.log(manager.getProducts()); // []
  
  // Llamar al método addProduct con los campos
  const newProduct = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
  };
  manager.addProduct(newProduct);
  
  // El objeto debe agregarse exitosamente con un id generado automáticamente SIN REPETIRSE
  console.log(manager.getProducts()); // [{id: '_abcdefghi', title: 'producto prueba', description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc123', stock: 25}]
  
  // Llamar al método addProduct con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
  try {
    manager.addProduct(newProduct);
  } catch (err) {
    console.error(err.message); // El código del producto ya existe
  }
  
  // Llamar al método getProductById
  const productId = manager.getProducts()[0].id;
  console.log(manager.getProductById(productId)); // {id: '_abcdefghi', title: 'producto prueba', description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc123', stock: 25}
  
  // Evaluar que getProductById devuelva error si no encuentra el producto
  try {
    manager.getProductById('invalid_id');
  } catch (err) {
    console.error(err.message); // Producto no encontrado
  }