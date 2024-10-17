var form = document.getElementById("add-form");
var list = document.getElementById("list");
//formun gönderilme olayını izleme
form.addEventListener("submit", addExpense);
//Harcamayı listeye ekler 
function addExpense(event) {
    //sayfayı yenilemesini engeller
    event.preventDefault();
    console.log(event);
    // inputtaki degerlere  erisme
    var title = event.target[0].value;
    var price = event.target[1].value;
    //listenin html kısmına yeni li etiketi ekleme 
    list.innerHTML += `
    <li>
        <h3>${title}</h3>
        <h3>${price}</h3>
       <button id="delete">Sil</button>
    </li>
`;
    //inputları temizleme
    event.target[0].value = "";
    event.target[1].value = "";
}
//liste alanındaki tıklanma olaylarını izleme
list.addEventListener("click", handleClick)
function handleClick(e) {
    var element = e.target;
    //tıklanılan elemanın ıd'si delete ise silme işlemi yap
    console.log(element);
    if (element.id === "delete") {
        //butonun kapsayıcısına erişme
        const parent = element.parentElement;
        //html'den kaldırma
        parent.remove();
    }

}