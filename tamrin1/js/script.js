const ROOT = document.querySelector(".root");

function api() {
  fetch("https://dummyjson.com/products")
    .then((data) => data.json())
    .then((res) => {
      let respons = res.products.map((item) => {
        ROOT.innerHTML += `<div class="data">
        <div class="box">
          <div class="heder">
            <h3>id: ${item.id}</h3>
            <h3>title: ${item.title}</h3>
          </div>
          <div class="images">
            <img src=${item.thumbnail} />
            <img src=${item.meta.qrCode} />
          </div>
          <div class="all">
            <div class="item">
              <h3>description: ${item.description}</h3>
              <h3>category: ${item.category}</h3>
              <h3>price: ${item.price}</h3>
              <h3>discountPercentage: ${item.discountPercentage}</h3>
              <h3>rating: ${item.rating}</h3>
              <h3>stock: ${item.stock}</h3>
            </div>
            <div class="item">
              <h3>tags: ${item.tags}</h3>
              <h3>brand: ${item.brand}</h3>
              <h3>sku: ${item.sku}</h3>
              <h3>weight: ${item.weight}</h3>
            </div>
            <div class="item">
              <h3>width: ${item.dimensions.width}</h3>
              <h3>height: ${item.dimensions.height}</h3>
              <h3>depth: ${item.dimensions.depth}</h3>
            </div>
            <div class="item">
              <h3>warrantyInformation: ${item.warrantyInformation}</h3>
              <h3>shippingInformation: ${item.shippingInformation}</h3>
              <h3>availabilityStatus: ${item.availabilityStatus}</h3>
            </div>
            <div class="item">
              <h3>rating: ${item.reviews.map((res) => {
                return `${res.rating} `;
              })}</h3>
              <h3>comment: ${item.reviews.map((res) => {
                return `${res.comment} `;
              })}</h3>
              <h3>date: ${item.reviews.map((res) => {
                return `${res.date} `;
              })}</h3>
              <h3>reviewerName: ${item.reviews.map((res) => {
                return `${res.reviewerName} `;
              })}</h3>
              <h3>reviewerEmail: ${item.reviews.map((res) => {
                return `${res.reviewerEmail} `;
              })}</h3>
            </div>
            <div class="item">
              <h3>returnPolicy: ${item.returnPolicy}</h3>
              <h3>minimumOrderQuantity: ${item.minimumOrderQuantity}</h3>
            </div>
            <div class="item">
              <h3>createdAt: ${item.meta.createdAt}</h3>
              <h3>updatedAt: ${item.meta.updatedAt}</h3>
              <h3>barcode: ${item.meta.barcode}</h3>
            </div>
            <div class="item"></div>
          </div>`;
      });
    });
}

api();
