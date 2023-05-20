window.onload = function(){
    fetchData
}

async function fetchData() {
    try {
      const response = await fetch("https://randomuser.me/api/?results=4");
      const data = await response.json();
      
      const empData = data.results;
  
      empData.forEach(obj => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const name = document.createElement("p");
        const phone = document.createElement("p");
        const email = document.createElement("p");
  
        name.textContent = `${obj.name.first} ${obj.name.last}`;
        phone.textContent = obj.phone;
        email.textContent = obj.email;
        img.src = obj.picture.medium;
  
        document.getElementById("users").appendChild(li);
        li.appendChild(img);
        li.appendChild(name);
        li.appendChild(phone);
        li.appendChild(email);
      });
    } catch (err) {
      document.getElementById("err").textContent = err;
    }
  }
  
  fetchData();
  
  function refresh() {
    window.location.reload();
  }
  