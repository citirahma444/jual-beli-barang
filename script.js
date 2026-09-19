/* =====================================================
   PASARKITA
   JAVASCRIPT UTAMA
===================================================== */


/* =====================================================
   DATA DEFAULT
===================================================== */

const defaultProducts = [
    {
        id: "product-001",
        name: "Laptop ASUS VivoBook",
        price: 7500000,
        category: "Elektronik",
        description:
            "Laptop ASUS VivoBook dengan performa baik untuk pekerjaan, kuliah, browsing, dan kebutuhan sehari-hari. Kondisi masih sangat baik.",
        image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
        location: "Jakarta",
        condition: "Bekas",
        stock: 2,
        rating: 4.8,
        createdAt: Date.now() - 100000
    },

    {
        id: "product-002",
        name: "iPhone 13 128GB",
        price: 6500000,
        category: "Elektronik",
        description:
            "iPhone 13 128GB dengan kondisi sangat baik. Kamera jernih dan performa masih sangat responsif untuk penggunaan sehari-hari.",
        image:
            "https://images.unsplash.com/photo-1592286927505-2fd2a2d9f8c3?auto=format&fit=crop&w=900&q=80",
        location: "Bandung",
        condition: "Bekas",
        stock: 3,
        rating: 4.9,
        createdAt: Date.now() - 200000
    },

    {
        id: "product-003",
        name: "Sepatu Sneakers Premium",
        price: 450000,
        category: "Fashion",
        description:
            "Sepatu sneakers nyaman untuk digunakan sehari-hari. Desain modern dan cocok digunakan untuk aktivitas santai.",
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
        location: "Jakarta Selatan",
        condition: "Baru",
        stock: 8,
        rating: 4.7,
        createdAt: Date.now() - 300000
    },

    {
        id: "product-004",
        name: "Kursi Kerja Ergonomis",
        price: 1200000,
        category: "Rumah Tangga",
        description:
            "Kursi kerja ergonomis dengan sandaran nyaman. Cocok untuk bekerja dari rumah maupun kantor.",
        image:
            "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=900&q=80",
        location: "Depok",
        condition: "Baru",
        stock: 5,
        rating: 4.6,
        createdAt: Date.now() - 400000
    },

    {
        id: "product-005",
        name: "Sepeda Gunung MTB",
        price: 2800000,
        category: "Olahraga",
        description:
            "Sepeda gunung MTB dengan frame kuat dan nyaman digunakan untuk bersepeda di jalan maupun medan ringan.",
        image:
            "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=900&q=80",
        location: "Bogor",
        condition: "Bekas",
        stock: 1,
        rating: 4.8,
        createdAt: Date.now() - 500000
    },

    {
        id: "product-006",
        name: "Toyota Avanza 2019",
        price: 165000000,
        category: "Kendaraan",
        description:
            "Toyota Avanza tahun 2019. Kondisi terawat dan siap digunakan. Dokumen kendaraan lengkap.",
        image:
            "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
        location: "Tangerang",
        condition: "Bekas",
        stock: 1,
        rating: 4.5,
        createdAt: Date.now() - 600000
    },

    {
        id: "product-007",
        name: "Buku Belajar JavaScript",
        price: 85000,
        category: "Buku",
        description:
            "Buku pembelajaran JavaScript untuk pemula. Membahas dasar-dasar JavaScript dengan contoh yang mudah dipahami.",
        image:
            "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80",
        location: "Yogyakarta",
        condition: "Baru",
        stock: 15,
        rating: 4.9,
        createdAt: Date.now() - 700000
    },

    {
        id: "product-008",
        name: "Kamera Mirrorless Sony",
        price: 8200000,
        category: "Elektronik",
        description:
            "Kamera mirrorless Sony untuk fotografi dan video. Cocok untuk content creator maupun fotografer.",
        image:
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
        location: "Surabaya",
        condition: "Bekas",
        stock: 2,
        rating: 4.8,
        createdAt: Date.now() - 800000
    }
];


/* =====================================================
   STATE APLIKASI
===================================================== */

let products = [];
let cart = [];
let orders = [];

let currentCategory = "Semua";
let currentSearch = "";
let currentSort = "newest";

let toastTimer = null;


/* =====================================================
   DOM ELEMENT
===================================================== */

const productGrid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const productResultText =
    document.getElementById("productResultText");

const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const searchBtn =
    document.getElementById("searchBtn");

const sortSelect =
    document.getElementById("sortSelect");

const categoryList =
    document.getElementById("categoryList");

const cartCount =
    document.getElementById("cartCount");

const cartSidebar =
    document.getElementById("cartSidebar");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartItems =
    document.getElementById("cartItems");

const cartSubtotal =
    document.getElementById("cartSubtotal");

const shippingCost =
    document.getElementById("shippingCost");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutTotal =
    document.getElementById("checkoutTotal");

const productModal =
    document.getElementById("productModal");

const productDetailContent =
    document.getElementById("productDetailContent");

const addProductModal =
    document.getElementById("addProductModal");

const checkoutModal =
    document.getElementById("checkoutModal");

const successModal =
    document.getElementById("successModal");

const productForm =
    document.getElementById("productForm");

const checkoutForm =
    document.getElementById("checkoutForm");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");

const toastIcon =
    document.getElementById("toastIcon");

const mobileMenu =
    document.getElementById("mobileMenu");


/* =====================================================
   LOCAL STORAGE
===================================================== */

function saveToLocalStorage() {

    localStorage.setItem(
        "pasarkita_products",
        JSON.stringify(products)
    );

    localStorage.setItem(
        "pasarkita_cart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "pasarkita_orders",
        JSON.stringify(orders)
    );
}


function loadFromLocalStorage() {

    const savedProducts =
        localStorage.getItem("pasarkita_products");

    const savedCart =
        localStorage.getItem("pasarkita_cart");

    const savedOrders =
        localStorage.getItem("pasarkita_orders");


    if (savedProducts) {

        try {
            products = JSON.parse(savedProducts);
        } catch (error) {

            products = [...defaultProducts];

        }

    } else {

        products = [...defaultProducts];

    }


    if (savedCart) {

        try {
            cart = JSON.parse(savedCart);
        } catch (error) {

            cart = [];

        }

    } else {

        cart = [];

    }


    if (savedOrders) {

        try {
            orders = JSON.parse(savedOrders);
        } catch (error) {

            orders = [];

        }

    } else {

        orders = [];

    }


    saveToLocalStorage();
}


/* =====================================================
   FORMAT RUPIAH
===================================================== */

function formatRupiah(value) {

    const number =
        Number(value) || 0;

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0
        }
    ).format(number);
}


/* =====================================================
   GENERATE ID
===================================================== */

function generateId(prefix = "item") {

    return (
        prefix +
        "-" +
        Date.now() +
        "-" +
        Math.random()
            .toString(36)
            .substring(2, 8)
    );
}


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent =
        String(value ?? "");

    return div.innerHTML;
}


/* =====================================================
   IMAGE FALLBACK
===================================================== */

function imageError(img) {

    img.onerror = null;

    img.src =
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="800"
                 height="600"
                 viewBox="0 0 800 600">

                <rect width="800"
                      height="600"
                      fill="#e2e8f0"/>

                <text x="400"
                      y="290"
                      text-anchor="middle"
                      font-size="35"
                      font-family="Arial"
                      fill="#64748b">
                    Gambar Tidak Tersedia
                </text>

                <text x="400"
                      y="340"
                      text-anchor="middle"
                      font-size="22"
                      font-family="Arial"
                      fill="#94a3b8">
                    PasarKita
                </text>
            </svg>
        `);
}


/* =====================================================
   FILTER PRODUCT
===================================================== */

function getFilteredProducts() {

    let result = [...products];


    if (currentCategory !== "Semua") {

        result =
            result.filter(product =>
                product.category === currentCategory
            );

    }


    if (currentSearch.trim() !== "") {

        const keyword =
            currentSearch
                .toLowerCase()
                .trim();

        result =
            result.filter(product => {

                const searchableText = [
                    product.name,
                    product.category,
                    product.description,
                    product.location,
                    product.condition
                ]
                    .join(" ")
                    .toLowerCase();

                return searchableText.includes(keyword);

            });

    }


    switch (currentSort) {

        case "low":

            result.sort(
                (a, b) =>
                    Number(a.price) -
                    Number(b.price)
            );

            break;


        case "high":

            result.sort(
                (a, b) =>
                    Number(b.price) -
                    Number(a.price)
            );

            break;


        case "rating":

            result.sort(
                (a, b) =>
                    Number(b.rating) -
                    Number(a.rating)
            );

            break;


        case "newest":

        default:

            result.sort(
                (a, b) =>
                    Number(b.createdAt) -
                    Number(a.createdAt)
            );

            break;
    }


    return result;
}


/* =====================================================
   RENDER PRODUCTS
===================================================== */

function renderProducts() {

    const result =
        getFilteredProducts();


    productGrid.innerHTML = "";


    if (result.length === 0) {

        productGrid.classList.add("hidden");

        emptyState.classList.remove("hidden");

    } else {

        productGrid.classList.remove("hidden");

        emptyState.classList.add("hidden");


        result.forEach(product => {

            const card =
                document.createElement("article");

            card.className =
                "product-card";


            const safeName =
                escapeHTML(product.name);

            const safeCategory =
                escapeHTML(product.category);

            const safeCondition =
                escapeHTML(product.condition);

            const safeLocation =
                escapeHTML(product.location);


            card.innerHTML = `

                <div class="product-image-wrapper">

                    <img
                        class="product-image"
                        src="${escapeHTML(product.image)}"
                        alt="${safeName}"
                        onerror="imageError(this)"
                    >

                    <span class="product-condition">
                        ${safeCondition}
                    </span>

                    ${
                        product.userCreated
                        ?
                        `
                        <button
                            class="delete-product"
                            data-action="delete"
                            data-id="${product.id}"
                            title="Hapus produk"
                        >
                            🗑
                        </button>
                        `
                        :
                        ""
                    }

                </div>


                <div class="product-info">

                    <span class="product-category">
                        ${safeCategory}
                    </span>

                    <h3
                        class="product-name"
                        title="${safeName}"
                    >
                        ${safeName}
                    </h3>

                    <div class="product-price">
                        ${formatRupiah(product.price)}
                    </div>

                    <div class="product-meta">

                        <span>
                            📍 ${safeLocation}
                        </span>

                        <span class="rating">
                            ★ ${Number(product.rating).toFixed(1)}
                        </span>

                    </div>


                    <div class="product-actions">

                        <button
                            class="detail-btn"
                            data-action="detail"
                            data-id="${product.id}"
                        >
                            Lihat Detail
                        </button>

                        <button
                            class="add-cart-btn"
                            data-action="add-cart"
                            data-id="${product.id}"
                        >
                            + Keranjang
                        </button>

                    </div>

                </div>
            `;


            productGrid.appendChild(card);

        });

    }


    updateProductResultText(result.length);

}


/* =====================================================
   RESULT TEXT
===================================================== */

function updateProductResultText(count) {

    let text =
        `Menampilkan ${count} produk`;

    if (currentCategory !== "Semua") {

        text +=
            ` dalam kategori ${currentCategory}`;

    }

    if (currentSearch.trim() !== "") {

        text +=
            ` untuk "${currentSearch}"`;

    }

    productResultText.textContent =
        text;
}


/* =====================================================
   PRODUCT EVENTS
===================================================== */

productGrid.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest("button");

        if (!button) {
            return;
        }


        const action =
            button.dataset.action;

        const id =
            button.dataset.id;


        if (!id) {
            return;
        }


        if (action === "detail") {

            openProductDetail(id);

        }


        if (action === "add-cart") {

            addToCart(id);

        }


        if (action === "delete") {

            deleteProduct(id);

        }

    }
);


/* =====================================================
   OPEN PRODUCT DETAIL
===================================================== */

function openProductDetail(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) {

        showToast(
            "Produk tidak ditemukan",
            "!"
        );

        return;
    }


    productDetailContent.innerHTML = `

        <div class="product-detail-content">

            <div>

                <img
                    class="detail-image"
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}"
                    onerror="imageError(this)"
                >

            </div>


            <div class="detail-info">

                <span class="product-category">
                    ${escapeHTML(product.category)}
                </span>

                <h2>
                    ${escapeHTML(product.name)}
                </h2>

                <div class="detail-price">
                    ${formatRupiah(product.price)}
                </div>

                <div class="rating">
                    ★ ${Number(product.rating).toFixed(1)}
                </div>


                <div class="detail-meta-list">

                    <div>
                        <span>Kondisi</span>
                        <strong>
                            ${escapeHTML(product.condition)}
                        </strong>
                    </div>

                    <div>
                        <span>Lokasi</span>
                        <strong>
                            ${escapeHTML(product.location)}
                        </strong>
                    </div>

                    <div>
                        <span>Stok</span>
                        <strong>
                            ${Number(product.stock)}
                        </strong>
                    </div>

                </div>


                <p class="detail-description">
                    ${escapeHTML(product.description)}
                </p>


                <button
                    class="primary-btn detail-add-btn"
                    id="detailAddCartBtn"
                    data-id="${product.id}"
                >
                    🛒 Tambah ke Keranjang
                </button>

            </div>

        </div>
    `;


    productModal.classList.add("active");


    const addButton =
        document.getElementById(
            "detailAddCartBtn"
        );


    addButton.addEventListener(
        "click",
        () => {

            addToCart(product.id);

            closeModal(productModal);

        }
    );

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) {
        return;
    }


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        if (
            existing.quantity >=
            Number(product.stock)
        ) {

            showToast(
                "Jumlah melebihi stok",
                "!"
            );

            return;
        }

        existing.quantity += 1;

    } else {

        cart.push({
            id: product.id,
            quantity: 1
        });

    }


    saveToLocalStorage();

    renderCart();

    updateCartCount();


    showToast(
        "Produk berhasil ditambahkan ke keranjang",
        "✓"
    );
}


/* =====================================================
   UPDATE CART COUNT
===================================================== */

function updateCartCount() {

    const total =
        cart.reduce(
            (sum, item) =>
                sum + Number(item.quantity),
            0
        );


    cartCount.textContent =
        total;
}


/* =====================================================
   RENDER CART
===================================================== */

function renderCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>Keranjang kosong</h3>

                <p>
                    Belum ada barang yang ditambahkan.
                </p>

            </div>
        `;

        cartSubtotal.textContent =
            formatRupiah(0);

        shippingCost.textContent =
            formatRupiah(0);

        cartTotal.textContent =
            formatRupiah(0);

        checkoutTotal.textContent =
            formatRupiah(0);

        updateCartCount();

        return;
    }


    let subtotal = 0;


    cart.forEach(cartItem => {

        const product =
            products.find(
                item =>
                    item.id === cartItem.id
            );


        if (!product) {
            return;
        }


        const quantity =
            Number(cartItem.quantity);

        const itemSubtotal =
            Number(product.price) *
            quantity;

        subtotal += itemSubtotal;


        const item =
            document.createElement("div");

        item.className =
            "cart-item";


        item.innerHTML = `

            <img
                class="cart-item-image"
                src="${escapeHTML(product.image)}"
                alt="${escapeHTML(product.name)}"
                onerror="imageError(this)"
            >


            <div class="cart-item-info">

                <h4>
                    ${escapeHTML(product.name)}
                </h4>

                <div class="cart-item-price">
                    ${formatRupiah(product.price)}
                </div>

                <div class="quantity-control">

                    <button
                        data-cart-action="decrease"
                        data-id="${product.id}"
                    >
                        −
                    </button>

                    <span>
                        ${quantity}
                    </span>

                    <button
                        data-cart-action="increase"
                        data-id="${product.id}"
                    >
                        +
                    </button>

                </div>

                <div class="cart-item-subtotal">
                    Subtotal:
                    ${formatRupiah(itemSubtotal)}
                </div>

            </div>


            <button
                class="remove-cart-item"
                data-cart-action="remove"
                data-id="${product.id}"
                title="Hapus"
            >
                ×
            </button>

        `;


        cartItems.appendChild(item);

    });


    const shipping =
        subtotal > 0
        ? 15000
        : 0;


    const total =
        subtotal + shipping;


    cartSubtotal.textContent =
        formatRupiah(subtotal);

    shippingCost.textContent =
        formatRupiah(shipping);

    cartTotal.textContent =
        formatRupiah(total);

    checkoutTotal.textContent =
        formatRupiah(total);


    updateCartCount();
}


/* =====================================================
   CART BUTTON EVENTS
===================================================== */

cartItems.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest("button");

        if (!button) {
            return;
        }


        const action =
            button.dataset.cartAction;

        const id =
            button.dataset.id;


        if (!id) {
            return;
        }


        if (action === "increase") {

            changeQuantity(id, 1);

        }


        if (action === "decrease") {

            changeQuantity(id, -1);

        }


        if (action === "remove") {

            removeFromCart(id);

        }

    }
);


/* =====================================================
   CHANGE QUANTITY
===================================================== */

function changeQuantity(id, amount) {

    const cartItem =
        cart.find(
            item => item.id === id
        );


    const product =
        products.find(
            item => item.id === id
        );


    if (!cartItem || !product) {
        return;
    }


    const newQuantity =
        Number(cartItem.quantity) +
        Number(amount);


    if (newQuantity <= 0) {

        removeFromCart(id);

        return;
    }


    if (
        newQuantity >
        Number(product.stock)
    ) {

        showToast(
            "Jumlah melebihi stok",
            "!"
        );

        return;
    }


    cartItem.quantity =
        newQuantity;


    saveToLocalStorage();

    renderCart();

    updateCartCount();
}


/* =====================================================
   REMOVE FROM CART
===================================================== */

function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );


    saveToLocalStorage();

    renderCart();

    updateCartCount();


    showToast(
        "Produk dihapus dari keranjang",
        "✓"
    );
}


/* =====================================================
   OPEN CART
===================================================== */

function openCart() {

    cartSidebar.classList.add("active");

    cartOverlay.classList.add("active");

    document.body.style.overflow =
        "hidden";
}


/* =====================================================
   CLOSE CART
===================================================== */

function closeCart() {

    cartSidebar.classList.remove("active");

    cartOverlay.classList.remove("active");

    document.body.style.overflow =
        "";
}


/* =====================================================
   OPEN ADD PRODUCT MODAL
===================================================== */

function openAddProductModal() {

    productForm.reset();

    addProductModal.classList.add("active");

    document.body.style.overflow =
        "hidden";
}


/* =====================================================
   ADD PRODUCT FORM
===================================================== */

productForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById(
                "productName"
            ).value.trim();

        const price =
            Number(
                document.getElementById(
                    "productPrice"
                ).value
            );

        const category =
            document.getElementById(
                "productCategory"
            ).value;

        const condition =
            document.getElementById(
                "productCondition"
            ).value;

        const location =
            document.getElementById(
                "productLocation"
            ).value.trim();

        const stock =
            Number(
                document.getElementById(
                    "productStock"
                ).value
            );

        const image =
            document.getElementById(
                "productImage"
            ).value.trim();

        const description =
            document.getElementById(
                "productDescription"
            ).value.trim();


        if (
            !name ||
            !price ||
            price <= 0 ||
            !category ||
            !condition ||
            !location ||
            !stock ||
            stock <= 0 ||
            !description
        ) {

            showToast(
                "Mohon lengkapi data produk",
                "!"
            );

            return;
        }


        const newProduct = {

            id: generateId("product"),

            name,

            price,

            category,

            description,

            image:
                image ||
                "data:image/svg+xml;charset=UTF-8," +
                encodeURIComponent(`
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="800"
                         height="600">

                        <rect
                            width="800"
                            height="600"
                            fill="#e2e8f0"
                        />

                        <text
                            x="400"
                            y="300"
                            text-anchor="middle"
                            font-size="36"
                            font-family="Arial"
                            fill="#64748b"
                        >
                            ${name.substring(0, 20)}
                        </text>
                    </svg>
                `),

            location,

            condition,

            stock,

            rating: 5,

            createdAt: Date.now(),

            userCreated: true

        };


        products.unshift(
            newProduct
        );


        saveToLocalStorage();

        renderProducts();


        closeModal(
            addProductModal
        );


        showToast(
            "Produk berhasil ditambahkan",
            "✓"
        );

    }
);


/* =====================================================
   DELETE PRODUCT
===================================================== */

function deleteProduct(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) {
        return;
    }


    if (!product.userCreated) {

        showToast(
            "Produk contoh tidak dapat dihapus",
            "!"
        );

        return;
    }


    const confirmed =
        window.confirm(
            `Hapus produk "${product.name}"?`
        );


    if (!confirmed) {
        return;
    }


    products =
        products.filter(
            item => item.id !== id
        );


    cart =
        cart.filter(
            item => item.id !== id
        );


    saveToLocalStorage();

    renderProducts();

    renderCart();


    showToast(
        "Produk berhasil dihapus",
        "✓"
    );
}


/* =====================================================
   SEARCH
===================================================== */

function performSearch() {

    currentSearch =
        searchInput.value.trim();

    renderProducts();


    if (currentSearch) {

        clearSearch.style.display =
            "block";

    } else {

        clearSearch.style.display =
            "none";

    }
}


searchInput.addEventListener(
    "input",
    performSearch
);


searchBtn.addEventListener(
    "click",
    performSearch
);


clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        currentSearch = "";

        clearSearch.style.display =
            "none";

        renderProducts();

        searchInput.focus();

    }
);


/* =====================================================
   CATEGORY
===================================================== */

categoryList.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                ".category-item"
            );


        if (!button) {
            return;
        }


        currentCategory =
            button.dataset.category;


        document
            .querySelectorAll(
                ".category-item"
            )
            .forEach(item => {

                item.classList.toggle(
                    "active",
                    item === button
                );

            });


        renderProducts();


        document
            .getElementById(
                "categories"
            )
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    }
);


/* =====================================================
   SORTING
===================================================== */

sortSelect.addEventListener(
    "change",
    () => {

        currentSort =
            sortSelect.value;

        renderProducts();

    }
);


/* =====================================================
   RESET SEARCH
===================================================== */

document
    .getElementById(
        "resetSearchBtn"
    )
    .addEventListener(
        "click",
        () => {

            currentSearch = "";

            currentCategory =
                "Semua";

            searchInput.value = "";

            sortSelect.value =
                "newest";

            currentSort =
                "newest";

            clearSearch.style.display =
                "none";


            document
                .querySelectorAll(
                    ".category-item"
                )
                .forEach(button => {

                    button.classList.toggle(
                        "active",
                        button.dataset.category ===
                        "Semua"
                    );

                });


            renderProducts();

        }
    );


/* =====================================================
   CHECKOUT
===================================================== */

function calculateCartTotal() {

    let subtotal = 0;


    cart.forEach(cartItem => {

        const product =
            products.find(
                item =>
                    item.id === cartItem.id
            );


        if (product) {

            subtotal +=
                Number(product.price) *
                Number(cartItem.quantity);

        }

    });


    const shipping =
        subtotal > 0
        ? 15000
        : 0;


    return {
        subtotal,
        shipping,
        total:
            subtotal + shipping
    };
}


/* =====================================================
   OPEN CHECKOUT
===================================================== */

function openCheckout() {

    if (cart.length === 0) {

        showToast(
            "Keranjang masih kosong",
            "!"
        );

        return;
    }


    const totals =
        calculateCartTotal();


    checkoutTotal.textContent =
        formatRupiah(
            totals.total
        );


    checkoutModal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";
}


/* =====================================================
   CHECKOUT FORM
===================================================== */

checkoutForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        if (cart.length === 0) {

            showToast(
                "Keranjang masih kosong",
                "!"
            );

            closeModal(
                checkoutModal
            );

            return;
        }


        const customerName =
            document.getElementById(
                "customerName"
            ).value.trim();

        const customerPhone =
            document.getElementById(
                "customerPhone"
            ).value.trim();

        const customerAddress =
            document.getElementById(
                "customerAddress"
            ).value.trim();

        const customerCity =
            document.getElementById(
                "customerCity"
            ).value.trim();

        const customerPostal =
            document.getElementById(
                "customerPostal"
            ).value.trim();

        const paymentMethod =
            document.getElementById(
                "paymentMethod"
            ).value;


        if (
            !customerName ||
            !customerPhone ||
            !customerAddress ||
            !customerCity ||
            !customerPostal ||
            !paymentMethod
        ) {

            showToast(
                "Mohon lengkapi data pengiriman",
                "!"
            );

            return;
        }


        const totals =
            calculateCartTotal();


        const orderNumber =
            "PK-" +
            new Date()
                .getTime()
                .toString()
                .slice(-8);


        const order = {

            id: generateId("order"),

            orderNumber,

            customer: {

                name:
                    customerName,

                phone:
                    customerPhone,

                address:
                    customerAddress,

                city:
                    customerCity,

                postalCode:
                    customerPostal

            },

            paymentMethod,

            items:
                cart.map(
                    cartItem => {

                        const product =
                            products.find(
                                item =>
                                    item.id ===
                                    cartItem.id
                            );


                        return {

                            productId:
                                cartItem.id,

                            name:
                                product
                                ? product.name
                                : "Produk",

                            price:
                                product
                                ? product.price
                                : 0,

                            quantity:
                                cartItem.quantity

                        };

                    }
                ),

            subtotal:
                totals.subtotal,

            shipping:
                totals.shipping,

            total:
                totals.total,

            createdAt:
                Date.now()

        };


        orders.unshift(order);


        /* Kurangi stok */
        cart.forEach(cartItem => {

            const product =
                products.find(
                    item =>
                        item.id ===
                        cartItem.id
                );


            if (product) {

                product.stock =
                    Math.max(
                        0,
                        Number(product.stock) -
                        Number(cartItem.quantity)
                    );

            }

        });


        cart = [];


        saveToLocalStorage();

        renderProducts();

        renderCart();


        closeModal(
            checkoutModal
        );

        closeCart();


        checkoutForm.reset();


        showOrderSuccess(
            order
        );

    }
);


/* =====================================================
   SHOW ORDER SUCCESS
===================================================== */

function showOrderSuccess(order) {

    const customer =
        order.customer;


    const detail =
        document.getElementById(
            "orderDetail"
        );


    detail.innerHTML = `

        <div class="order-detail-row">

            <span>Nomor Pesanan</span>

            <strong>
                ${escapeHTML(order.orderNumber)}
            </strong>

        </div>


        <div class="order-detail-row">

            <span>Pembeli</span>

            <strong>
                ${escapeHTML(customer.name)}
            </strong>

        </div>


        <div class="order-detail-row">

            <span>Pembayaran</span>

            <strong>
                ${escapeHTML(order.paymentMethod)}
            </strong>

        </div>


        <div class="order-detail-row">

            <span>Alamat</span>

            <strong>
                ${escapeHTML(customer.city)}
            </strong>

        </div>


        <div class="order-detail-row">

            <span>Total</span>

            <strong>
                ${formatRupiah(order.total)}
            </strong>

        </div>
    `;


    successModal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";
}


/* =====================================================
   MODAL CLOSE
===================================================== */

function closeModal(modal) {

    modal.classList.remove(
        "active"
    );

    if (
        !document.querySelector(
            ".modal-overlay.active"
        ) &&
        !cartSidebar.classList.contains(
            "active"
        )
    ) {

        document.body.style.overflow =
            "";

    }
}


document.addEventListener(
    "click",
    event => {

        const closeButton =
            event.target.closest(
                "[data-close]"
            );


        if (closeButton) {

            const modalId =
                closeButton.dataset.close;

            const modal =
                document.getElementById(
                    modalId
                );


            if (modal) {

                closeModal(modal);

            }

        }

    }
);


/* =====================================================
   CLICK OUTSIDE MODAL
===================================================== */

[
    productModal,
    addProductModal,
    checkoutModal,
    successModal
].forEach(modal => {

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                modal
            ) {

                closeModal(modal);

            }

        }
    );

});


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }


        [
            productModal,
            addProductModal,
            checkoutModal,
            successModal
        ].forEach(modal => {

            if (
                modal.classList.contains(
                    "active"
                )
            ) {

                closeModal(modal);

            }

        });


        closeCart();

    }
);


/* =====================================================
   CART EVENTS
===================================================== */

document
    .getElementById("cartBtn")
    .addEventListener(
        "click",
        openCart
    );


document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        closeCart
    );


cartOverlay.addEventListener(
    "click",
    closeCart
);


document
    .getElementById("checkoutBtn")
    .addEventListener(
        "click",
        openCheckout
    );


/* =====================================================
   SELL BUTTONS
===================================================== */

document
    .getElementById("sellNavBtn")
    .addEventListener(
        "click",
        event => {

            event.preventDefault();

            openAddProductModal();

        }
    );


document
    .getElementById("heroSellBtn")
    .addEventListener(
        "click",
        openAddProductModal
    );


document
    .getElementById("footerSellBtn")
    .addEventListener(
        "click",
        event => {

            event.preventDefault();

            openAddProductModal();

        }
    );


document
    .getElementById("mobileSellBtn")
    .addEventListener(
        "click",
        event => {

            event.preventDefault();

            mobileMenu.classList.remove(
                "active"
            );

            openAddProductModal();

        }
    );


/* =====================================================
   MOBILE CART
===================================================== */

document
    .getElementById("mobileCartBtn")
    .addEventListener(
        "click",
        event => {

            event.preventDefault();

            mobileMenu.classList.remove(
                "active"
            );

            openCart();

        }
    );


/* =====================================================
   MOBILE MENU
===================================================== */

document
    .getElementById("menuBtn")
    .addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "active"
            );

        }
    );


/* =====================================================
   LOGO
===================================================== */

document
    .getElementById("logoLink")
    .addEventListener(
        "click",
        event => {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


/* =====================================================
   DARK MODE
===================================================== */

const themeBtn =
    document.getElementById(
        "themeBtn"
    );


function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "pasarkita_theme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark"
        );

        themeBtn.textContent =
            "☀";

        themeBtn.title =
            "Light Mode";

    } else {

        document.body.classList.remove(
            "dark"
        );

        themeBtn.textContent =
            "☾";

        themeBtn.title =
            "Dark Mode";

    }
}


themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        const isDark =
            document.body.classList.contains(
                "dark"
            );


        localStorage.setItem(
            "pasarkita_theme",
            isDark
                ? "dark"
                : "light"
        );


        loadTheme();

    }
);


/* =====================================================
   SUCCESS CLOSE
===================================================== */

document
    .getElementById("successCloseBtn")
    .addEventListener(
        "click",
        () => {

            closeModal(
                successModal
            );

        }
    );


/* =====================================================
   TOAST
===================================================== */

function showToast(
    message,
    icon = "✓"
) {

    toastMessage.textContent =
        message;

    toastIcon.textContent =
        icon;


    toast.classList.add(
        "active"
    );


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "active"
                );

            },
            3000
        );
}


/* =====================================================
   CURRENT YEAR
===================================================== */

document
    .getElementById("currentYear")
    .textContent =
    new Date().getFullYear();


/* =====================================================
   INITIALIZE APPLICATION
===================================================== */

function initializeApp() {

    loadFromLocalStorage();

    loadTheme();

    renderProducts();

    renderCart();

    updateCartCount();

}


initializeApp();