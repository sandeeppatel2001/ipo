// /* Set rates + misc */
// var taxRate = 0.05;
// var shippingRate = 15.0;
// var fadeTime = 300;

// /* Assign actions */
// $(".product-quantity input").change(function () {
//   updateQuantity(this);
// });

// $(".product-removal button").click(function () {
//   removeItem(this);
// });

// /* Recalculate cart */
// function recalculateCart() {
//   var subtotal = 0;

//   /* Sum up row totals */
//   $(".product").each(function () {
//     subtotal += parseFloat($(this).children(".product-line-price").text());
//   });

//   /* Calculate totals */
//   var tax = subtotal * taxRate;
//   var shipping = subtotal > 0 ? shippingRate : 0;
//   var total = subtotal + tax + shipping;

//   /* Update totals display */
//   $(".totals-value").fadeOut(fadeTime, function () {
//     $("#cart-subtotal").html(subtotal.toFixed(2));
//     $("#cart-tax").html(tax.toFixed(2));
//     $("#cart-shipping").html(shipping.toFixed(2));
//     $("#cart-total").html(total.toFixed(2));
//     if (total == 0) {
//       $(".checkout").fadeOut(fadeTime);
//     } else {
//       $(".checkout").fadeIn(fadeTime);
//     }
//     $(".totals-value").fadeIn(fadeTime);
//   });
// }

// /* Update quantity */
// function updateQuantity(quantityInput) {
//   /* Calculate line price */
//   var productRow = $(quantityInput).parent().parent();
//   var price = parseFloat(productRow.children(".product-price").text());
//   var quantity = $(quantityInput).val();
//   var linePrice = price * quantity;

//   /* Update line price display and recalc cart totals */
//   productRow.children(".product-line-price").each(function () {
//     $(this).fadeOut(fadeTime, function () {
//       $(this).text(linePrice.toFixed(2));
//       recalculateCart();
//       $(this).fadeIn(fadeTime);
//     });
//   });
// }

// /* Remove item from cart */
// function removeItem(removeButton) {
//   /* Remove row from DOM and recalc cart total */
//   var productRow = $(removeButton).parent().parent();
//   productRow.slideUp(fadeTime, function () {
//     productRow.remove();
//     recalculateCart();
//   });
// }
let container = document.querySelector(".productcont");
let fru = [
  "apple.jpeg",
  "tomato.jpg",
  "lady finger.jpeg",
  "pea.jpeg",
  "pomogrenate.jpeg",
  "mango.jpeg",
  "bannana.jpeg",
  "pine apple.jpeg",
  "potato.jpg",
  "watermelon.jpeg",
  "bottle guard.jpeg",
  "corrender.jpeg",
  "brinjal.jpeg",
  "lichi.jpeg",
  "strawberry.jpeg",
  "guava.jpeg",
  "jack fruit.jpeg",
  "pumpkin.jpeg",
];
let price = [
  80, 20, 30, 30, 150, 100, 25, 80, 20, 60, 20, 100, 30, 100, 150, 25, 50, 30,
];
let totalpric = 0;
let count = 0;
function send() {
  const req = new XMLHttpRequest();
  const urlParams = {
    r: "cart",
  };

  const baseUrl = "https://pickfress.adaptable.app/cart";
  req.open("POST", baseUrl, true);
  req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  req.send(JSON.stringify(urlParams));

  req.onreadystatechange = async function () {
    // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      const nodedata = JSON.parse(this.responseText);
      let y = JSON.stringify(nodedata);

      console.log(y, y.length);
      for (let i = 1; i < y.length; i++) {
        if (i % 2 == 0) continue;
        console.log(y[i]);
        count++;
        let product = document.createElement("div");
        let p = document.createElement("p");
        product.setAttribute("class", "product");
        console.log(y[i] - 1, fru[y[i] - 1], "url('" + fru[y[i] - 1] + "')");
        product.style.backgroundImage = "url('" + fru[y[i] - 1] + "')";
        p.textContent = price[i - 1] + "/kg";
        p.setAttribute("class", "price");
        product.append(p);
        container.append(product);
        totalpric = totalpric + price[i - 1];
      }
      document.getElementById("itemsquantity").textContent = count;
      document.getElementById("total").textContent = totalpric;
      document.getElementById("tt").textContent = "Total  Price = " + totalpric;
    }
  };
}
send();
document.getElementById("checkout").addEventListener("click", (e) => {
  window.location.href = "./qr.html";
});
