const products = [
    {
        id: 1,
        img:  'https://i.etsystatic.com/9808196/r/il/8a880c/3795936175/il_fullxfull.3795936175_n704.jpg',
        name: 'Phone',
        price: 2000,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequuntur cupiditate provident cum aspernatur repellat quae pariatur. Provident, laboriosam tempora!',
    },
        {
        id: 2,
        img:  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Powerbook_100_pose.jpg/1200px-Powerbook_100_pose.jpg',
        name: 'Laptop',
        price: 5000,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequuntur cupiditate provident cum aspernatur repellat quae pariatur. Provident, laboriosam tempora!',
    },
]


const list = document.querySelector('.js-products')

list.innerHTML = createEl(products)
list.style.display = 'flex'

list.addEventListener('click', onClick)


function createEl(product) {
    return product.map(({ id, img, name, price, description }) => {
        return `<li class = "js-product-item item" data-id ="${id}"><img  src = "${img}"><h2>${name}</h2><h3>${price}</h3></li>`
    }).join('')
}


function onClick(event) {

    if (event.target === event.currentTarget) {
        return
    }
    const currentTarget = event.target.closest('.js-product-item')
    const productId = currentTarget.dataset.id
    const product = products.find(({ id }) => id === Number(productId))
    console.log(product)

    const instance = basicLightbox.create(`
        <div class="modal">
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <h3>${product.price}</h3>
            <p>${product.description}</p>
        </div>
    `)
    console.log(instance)
    instance.show()
}


