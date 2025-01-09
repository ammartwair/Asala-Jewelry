const designForm = document.querySelector(".design-form");
const designName = document.querySelector(".design-name");
const designDetails = document.querySelector(".design-details");
const designImage = document.querySelector(".design-image");
const myDesigns = document.querySelector("#tasameem-products");

document.querySelector('form').onsubmit = (ev) => {
  ev.preventDefault();
  return;
}

designForm.onclick = async () => {
  if(designName.value==="" || designDetails.value==="") {
    alert("You should fill both of the design name and design details");
    return;
  }
  
  const res = await fetch('http://localhost:3000/designs',{
    method: 'post',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
      name: designName.value,
      details: designDetails.value,
      image: designImage.value
    })
  });
  designDetails.value="";
  designName.value="";
  if(res.status>=400) {
    alert("There is an error try again");
    return;
  }
  alert("The design added successfully");
  window.location.reload();
}

const start = async () => {
    const data = await (await fetch('http://localhost:3000/designs')).json();
    const {designs} = data;
    for(const design of designs) {
        const designDiv = document.createElement('div');
        designDiv.className="product-item";
        const image = document.createElement('img');
        image.src = "img/خواتم للعرض5.jpg";
        const details = document.createElement('div');
        details.className = "product-details";
        details.innerHTML = `
            <h3>تصميماتي</h3>
            <p>${design.name}</p>
            <div class="price">50₪</div>
            <button class="add-to-cart" onclick="addToCart('free palestine', 90)">إضافة</button>
        `;
        designDiv.appendChild(image);
        designDiv.appendChild(details);
        myDesigns.appendChild(designDiv);
    }
}
start();
