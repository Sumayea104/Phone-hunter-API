const loadPhones = async(searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = phones => {
    // console.log(phones);
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.textContent = '';


    // display 20 phones only
    phones = phones.slice(0, 6);


    // display no phones found

    const noPhone = document.getElementById('no-found-massage');
    if(phones.length === 0){
        noPhone.classList.remove('d-none');
    }
else{
    noPhone.classList.add('d-none');
}
    // display all phones
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4 m-4">
            <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body ">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
        
        `;
        phonesContainer.appendChild(phoneDiv);
    });
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText);
    
})



loadPhones();
