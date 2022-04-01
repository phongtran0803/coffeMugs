const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const featureCollection = $('.feature_collection')



const app = {
    images: [

        {
            name: 'Red Love Cup',
            price: '$ 99.00 USD',
            img: './assets/img/item8.jpg',
        },
        {
            name: 'Black Tea Cup',
            price: '$ 99.00 USD',
            img: './assets/img/item3.jpg',
        },
        {
            name: 'B&W Essentials Mug',
            price: '$ 99.00 USD',
            img: './assets/img/item5.jpg',
        },
        {
            name: 'Golden Designers Mug',
            price: '$ 99.00 USD',
            img: './assets/img/item6.jpg',
        },
        {
            name: 'Pink Premium Ceramic',
            price: '$ 99.00 USD',
            img: './assets/img/item1.jpg',
        },
        {
            name: 'Espresso Cup by Mugs.co',
            price: '$ 99.00 USD',
            img: './assets/img/item4.jpg',
        },
        {
            name: 'Winter Style Mug',
            price: '$ 99.00 USD',
            img: './assets/img/item9.jpg',
        },
        {
            name: 'Summer Designer Cup',
            price: '$ 99.00 USD',
            img: './assets/img/item10.jpg',
        },
        {
            name: 'No Handle Bar Cup',
            price: '$ 99.00 USD',
            img: './assets/img/item11.jpg',
        },
    ],
    render: function(){
        const htmls = this.images.map((images) => {
            return `
            <div class="listitem col-3 mgb-50">
                    <div class="image">
                        <img src="${images.img}" class="item_image">    
                        <div class="explore_wrap">
                            <div class="btn_explore">Explore Mug</div>
                        </div>
                    </div>
                    <div class="item_name">${images.name}</div>
                    <div class="item_price">${images.price}</div>
            </div>
            `
        })
        featureCollection.innerHTML = htmls.join('')
    },
    
    start: function(){


        // Render items
        this.render()
    }



}
app.start()
