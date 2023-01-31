const tabs = Array.from(document.querySelectorAll(".tab"));
const tabContents = Array.from(document.querySelectorAll(".tab__content"));

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const activeTab = document.querySelector(".tab_active");
        activeTab.classList.remove("tab_active");
        tab.classList.add("tab_active");

        const activeTabContent = document.querySelector(".tab__content_active");
        activeTabContent.classList.remove("tab__content_active");
        let currentTab = tabs.indexOf(tab);
        tabContents[currentTab].classList.add("tab__content_active");
    });
});
