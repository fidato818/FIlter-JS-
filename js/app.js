var pcAndLaptops = {
        pc : {
                name: 'Laptop',
                brand: 'Dell',
                subBrand: 'Latitude',
                model: 'e5400',
                price: 'Rs 20000/-'
            },
        LT : {
                name: 'Note Book',
                brand: 'Google',
                subBrand: 'Chrome book',
                model: 'c6000',
                price: 'Rs 40000/-'
            },
        Laptops : {
                name: 'Gaming',
                brand: 'Samsung',
                subBrand: 'Sam-book',
                model: 'ESJ-6000',
                price: 'Rs 55000/-'
            },
        com : {
                name: 'Computer',
                brand: 'HP',
                subBrand: 'Pavillion',
                model: '569-SGH',
                price: 'Rs 80000/-'
            }
    
    
}
        document.getElementById('name').innerHTML = pcAndLaptops.pc.name;
        document.getElementById('aname').innerText = pcAndLaptops.LT.name;
        document.getElementById('vname').innerText = pcAndLaptops.Laptops.name;
        document.getElementById('bname').innerText = pcAndLaptops.com.name;

        document.getElementById('pcBrand').innerHTML = pcAndLaptops.pc.brand;
        document.getElementById('ltBrand').innerText = pcAndLaptops.LT.brand;
        document.getElementById('laptopBrand').innerText = pcAndLaptops.Laptops.brand;
        document.getElementById('comBrand').innerText = pcAndLaptops.com.brand;
   
        document.getElementById('pcsub').innerHTML = pcAndLaptops.pc.subBrand;
        document.getElementById('ltsub').innerText = pcAndLaptops.LT.subBrand;
        document.getElementById('laptopsub').innerText = pcAndLaptops.Laptops.subBrand;
        document.getElementById('comsub').innerText = pcAndLaptops.com.subBrand;

        document.getElementById('pcmodel').innerHTML = pcAndLaptops.pc.model;
        document.getElementById('ltmodel').innerText = pcAndLaptops.LT.model;
        document.getElementById('laptopmodel').innerText = pcAndLaptops.Laptops.model;
        document.getElementById('commodel').innerText = pcAndLaptops.com.model;

        document.getElementById('pcprice').innerHTML = pcAndLaptops.pc.price;
        document.getElementById('ltprice').innerText = pcAndLaptops.LT.price;
        document.getElementById('laptopprice').innerText = pcAndLaptops.Laptops.price;
        document.getElementById('comprice').innerText = pcAndLaptops.com.price;

// for(var key in pcAndLaptops){
//     var aj = pcAndLaptops[key].name;
//     // console.log(key);
//     console.log(pcAndLaptops[key]);
//     // console.log(pcAndLaptops)

//     for(var key2 in pcAndLaptops[key]){
//         // console.log(pcAndLaptops[key])
//     document.getElementById('vname').innerHTML = aj;

//     }
// }

function input(){
    var input, filter, table, tr, td, i;
    input = document.getElementById('input');
    filter = input.value.toUpperCase();
    table = document.getElementById('filterTable');
    tr = document.getElementsByTagName('tr');
    
    for(var i = 0; i <tr.length;i++){
        td = tr[i].getElementsByTagName('td')[0];
        if(td){
            if(td.innerHTML.toUpperCase().indexOf(filter) > -1 ){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = 'none';   
            }
        }
    }
}




