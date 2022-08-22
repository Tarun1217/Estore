class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById("product-list")
        const element = document.createElement("div");
        // DESIGN the html that is going to be inside product-list in the html
        element.innerHTML = `
            <div class="card text-center mb-4 ">
                <!--div encargado del contenido de la tarjeta-->
                <div class="card-body">
                    <strong>Product</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.year}
                </div>
            </div>
        `;

        // INSERT the design we made up
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById("product-form").reset();
    }


    deleteProduct() {

    }

    showMessage() {

    }
}

// DOM EVENTS

document.getElementById("product-form").addEventListener("submit", function (event) {

    const productName = document.getElementById("pName").value;
    const price = document.getElementById("pPrice").value;
    const year = document.getElementById("pYear").value;

    const product = new Product(productName, price, year);

    /*object ui that obtains the methods from ui
    addProduc, deleteProduct and show message*/
    const ui = new UI();
    ui.addProduct(product);
    ui.resetForm()
    
    // CANCEL DEFAULT REFRESH
    event.preventDefault();

});
