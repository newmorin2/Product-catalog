
function ProductCatalog(){
  
const products = [
  {
    name: "Laptop",
    price: 75000,
    category: "Electronics",
    inStock: true
  },
  {
    name: "Headphones",
    price: 5000,
    category: "Electronics",
    inStock: true
  },
  {
    name: "Office Chair",
    price: 12000,
    category: "Furniture",
    inStock: false
  },
  {
    name: "Desk",
    price: 15000,
    category: "Furniture",
    inStock: true
  }
];

const display = products.map((prod) => (
  <div className="col-12 col-sm-6 col-lg-4">
      <div className='card h-100 shadow-sm'>
          <div className="card-body">
              <h3 className="card-name">{prod.name}</h3>
              <h5 className='card-text'>Price: {prod.price}</h5>
              <h5 className='card-text'>Category: {prod.category}</h5>
              <h5 className='card-text'>Stock: {prod.inStock ? "In Stock" : "Out of Stock"}</h5>
          </div>
      </div>
    </div>
))

const inStock = products.filter((prod) => prod.inStock == true)
const displayStock = inStock.map((prod) => (
  <div className='col-12 col-sm-6 col-lg-4'>
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h3 className='card-text'>{prod.name}</h3>
        <h5 className='card-text'>Price: {prod.price}</h5>

      </div>
    </div>
    </div>
))

const totalProducts = products.length

    return(
    <>
    <div className='container p-5 bg-dark text-white'>
      <div className='mb-5'>
        <h3>Product Catalog</h3>
        <h4 className='row g-4'>{display}</h4>
      </div>
      <div className='mb-5 '>
        <h3>Products In Stock</h3>
        <h4 className='row g-4'>{displayStock}</h4>
      </div>
      
      <h3 className='card-text'>Total number of products</h3>
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <div className='total'>
              <h4 className='row g-3'>{totalProducts}</h4>
            </div>
          </div>
        </div>
    </div>
    </>
    )
  }
    export default ProductCatalog