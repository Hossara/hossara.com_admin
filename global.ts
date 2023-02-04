export const pageLoader = {
    show: () => document.getElementById("pageLoader")!.classList.add("show"),
    hide: () => document.getElementById("pageLoader")!.classList.remove("show")
}