// This is called upon launching the site and displayes the "standard" items in the product list
async function standardProducts(){
  const res = await fetchProducts('/standard')
  const products = res.products
  addProductsToDOM(products)
}

// This is called upon whenever the user search for a specific keyword
async function searchProducts(searchTerm){
  const res = await fetchProducts('/search?q=' + searchTerm)
  const products = res.products
  addProductsToDOM(products)
}

// This is used to fetch the products from the proxy server
async function fetchProducts(parameters){
  url = 'http://localhost:3000' + parameters
  const response = await fetch(url)
  const data = await response.json()
  return data
}

// Adds the fetched products to the DOM of the site, the products are placed in one of three different columns
async function addProductsToDOM(products){
  const col1 = document.getElementById('productCol1')
  while (col1.lastElementChild) {
    col1.removeChild(col1.lastElementChild)
  }
  const col2 = document.getElementById('productCol2')
  while (col2.lastElementChild) {
    col2.removeChild(col2.lastElementChild)
  }
  const col3 = document.getElementById('productCol3')
  while (col3.lastElementChild) {
    col3.removeChild(col3.lastElementChild)
  }

  let col = 1;

  for(let i = 0; i < products.length; i++){

    const fig = await createFigFromImage(products[i].name, products[i].product_image.url)

    if(col == 1){
      col1.append(fig)
    } else if(col == 2){
      col2.append(fig)
    } else if(col == 3){
      col3.append(fig)
    }

    col++
    if(col > 3) col = 1;
  }
}

// creates a figure of the fetched products using the names and images from the fetch
async function createFigFromImage(name, url){
  const fig = document.createElement('div')
  fig.classList.add('container-fluid')
  fig.classList.add('product')
  const link = document.createElement('a')
  link.href = 'http://localhost:1234/'
  const img = document.createElement('img')
  img.classList.add('img-fluid')
  const cap = document.createElement('h1')
  cap.textContent = name
  cap.classList.add('product-text')
  img.src = url
  fig.append(link)
  link.append(img)
  link.append(cap)
  return fig
}


export default {
  standardProducts,
  searchProducts
}
