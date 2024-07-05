document.addEventListener("DOMContentLoaded", function()
{
    const listItems = document.querySelectorAll(".list");
    const plusItem = document.querySelector(".list:nth-child(3)");
    const smallMenu = document.querySelector(".small_menu");
    const indicator = document.querySelector(".indicator");

    function toggleSmallMenu(event) {
        event.preventDefault();

        // Kiểm tra nếu đã click vào plusItem
        if (this === plusItem) {
            if (smallMenu.classList.contains("hienra")) {
                // Ẩn small_menu và đặt lại transform của dấu cộng
                smallMenu.classList.remove("hienra");
                this.querySelector("i.fa-solid.fa-plus").style.transform = "rotate(0deg)";
                indicator.style.transform = `translateX(calc(70px * ${Array.from(listItems).indexOf(this)}))`;
            } else {
                // Hiển thị small_menu và đặt transform của dấu cộng
                smallMenu.classList.add("hienra");
                this.querySelector("i.fa-solid.fa-plus").style.transform = "rotate(45deg)";
                indicator.style.transform = `translateX(calc(70px * ${Array.from(listItems).indexOf(this)}))`;
            }
        } else {
            // Nếu click vào các list khác plusItem
            // Ẩn small_menu và đặt lại transform của dấu cộng
            smallMenu.classList.remove("hienra");
            plusItem.querySelector("i.fa-solid.fa-plus").style.transform = "rotate(0deg)";
            indicator.style.transform = `translateX(calc(70px * ${Array.from(listItems).indexOf(this)}))`;
        }

        // Loại bỏ class 'active' khỏi tất cả các listItems
        listItems.forEach(item => item.classList.remove("active"));
        // Thêm class 'active' vào phần tử được click
        this.classList.add("active");
    }

    // Bắt sự kiện click cho mỗi phần tử trong listItems
    listItems.forEach(item => item.addEventListener("click", toggleSmallMenu));

    const icons_left = document.querySelector('.left');
    const icons_right = document.querySelector('.right');
    const card = document.querySelector('.card');
    const cardDom = document.querySelector("#width-card").getBoundingClientRect().width;

    icons_left.addEventListener('click', function() {
        sliderPrev(card);
    });

    icons_right.addEventListener('click', function() {
        sliderNext(card);
    });

    function sliderPrev(target) {
        target.scrollBy({
            left: -cardDom,
            behavior: "smooth",
        });

        // Kiểm tra nếu scroll đến hình cuối cùng bên trái
        if (target.scrollLeft === 0) {
            // Di chuyển về hình đầu tiên
            target.scrollTo({
                left: target.scrollWidth,
                behavior: "smooth",
            });
        }
    }

    function sliderNext(target) {
        target.scrollBy({
            left: cardDom,
            behavior: "smooth",
        });

        // Kiểm tra nếu scroll đến hình cuối cùng bên phải
        if (target.scrollLeft + target.clientWidth >= target.scrollWidth) {
            // Di chuyển về hình đầu tiên
            target.scrollTo({
                left: 0,
                behavior: "smooth",
            });
        }
    }

    let icon_search = document.querySelector(".fa-magnifying-glass");
    let clear = document.querySelector(".clear");
    icon_search.onclick = function()
    {
        document.querySelector(".khung_search").classList.toggle("active");
    }
    clear.onclick = function()
    {
        document.getElementById("search").value = "";
    }
}, false);