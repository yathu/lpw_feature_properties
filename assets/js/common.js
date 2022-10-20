$(document).ready(function () {

    const pageHeader = document.querySelector(".page-header");
    const mobile_nav = document.querySelector(".mobile-nav-container");
    const toggleMenu = mobile_nav.querySelector(".toggle-menu");
    const menuWrapper = pageHeader.querySelector(".menu-wrapper");
    const level1Links = pageHeader.querySelectorAll(".level-1 > li > a");
    const listWrapper2 = pageHeader.querySelector(".list-wrapper:nth-child(2)");
    const listWrapper3 = pageHeader.querySelector(".list-wrapper:nth-child(3)");
    const subMenuWrapper2 = listWrapper2.querySelector(".sub-menu-wrapper");
    const subMenuWrapper3 = listWrapper3.querySelector(".sub-menu-wrapper");
    const backOneLevelBtns = pageHeader.querySelectorAll(".back-one-level");
    const isVisibleClass = "is-visible";
    const isActiveClass = "is-active";

    $('.close-mobile-nav').on("click", function () {
        $(".toggle-menu").trigger("click");
    });

    toggleMenu.addEventListener("click", function () {
        menuWrapper.classList.toggle(isVisibleClass);

        console.log(this.classList);

        if (!this.classList.contains(isVisibleClass)) {
            console.log("yes");
            listWrapper2.classList.remove(isVisibleClass);
            listWrapper3.classList.remove(isVisibleClass);
            const menuLinks = menuWrapper.querySelectorAll("a");
            for (const menuLink of menuLinks) {
                menuLink.classList.remove(isActiveClass);
            }
        }
    });

    for (const level1Link of level1Links) {
        level1Link.addEventListener("click", function (e) {
            const siblingList = level1Link.nextElementSibling;
            if (siblingList) {
                e.preventDefault();
                this.classList.add(isActiveClass);
                const cloneSiblingList = siblingList.cloneNode(true);
                subMenuWrapper2.innerHTML = "";
                subMenuWrapper2.append(cloneSiblingList);
                listWrapper2.classList.add(isVisibleClass);
            }
        });
    }

    listWrapper2.addEventListener("click", function (e) {
        const target = e.target;
        if (target.tagName.toLowerCase() === "a" && target.nextElementSibling) {
            const siblingList = target.nextElementSibling;
            e.preventDefault();
            target.classList.add(isActiveClass);
            const cloneSiblingList = siblingList.cloneNode(true);
            subMenuWrapper3.innerHTML = "";
            subMenuWrapper3.append(cloneSiblingList);
            listWrapper3.classList.add(isVisibleClass);
        }
    });

    for (const backOneLevelBtn of backOneLevelBtns) {
        backOneLevelBtn.addEventListener("click", function () {
            const parent = this.closest(".list-wrapper");
            parent.classList.remove(isVisibleClass);
            parent.previousElementSibling
                .querySelector(".is-active")
                .classList.remove(isActiveClass);
        });
    }


    $('.main-nav > li > .dropdown-toggle').click(function () {
        window.location = $(this).attr('href');
    });

});