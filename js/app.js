const loadPhones = async() =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = phones =>{
    // console.log(phones);
    const phonesContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
        
        `;
        phonesContainer.appendChild(phoneDiv);
    });
}
loadPhones();
