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

  updateProduct(id, fields) {
    const productIndex = this.products.findIndex(p => p.id === id);
    if (productIndex < 0) {
      throw new Error('Producto no encontrado');
    }
    const product = {
      ...this.products[productIndex],
      ...fields,
      id
    };
    this.products[productIndex] = product;
    return product;
  }

  deleteProduct(id) {
    const productIndex = this.products.findIndex(p => p.id === id);
    if (productIndex < 0) {
      throw new Error('Producto no encontrado');
    }
    return this.products.splice(productIndex, 1)[0];
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

// Llamar al método getProductById
const productId = manager.getProducts()[0].id;
console.log(manager.getProductById(productId)); // {id: '_abcdefghi', title: 'producto prueba', description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc123', stock: 25}

// Llamar al método updateProduct
const updatedProduct = manager.updateProduct(productId, {
  price: 300,
  stock: 30
});
console.log(updatedProduct); // {id: '_abcdefghi', title: 'producto prueba', description: 'Este es un producto prueba', price: 300, thumbnail: 'Sin imagen', code: 'abc123', stock: 30}
console.log(manager.getProducts()); // [{id: '_abcdefghi', title: 'producto prueba', description: 'Este es un producto prueba', price: 300, thumbnail: 'Sin imagen', code: 'abc123', stock: 30}]

// Llamar al método deleteProduct
const deletedProduct = manager.deleteProduct(productId);
console.log(deletedProduct); // {id: '_abcdefghi', title: 'producto prueba', description: 'Este es un producto prueba', price:
