const $=(id)=>document.getElementById(id);

$('bgcolor') && $("bgcolor").addEventListener('click',()=>{
    document.body.style.backgroundColor='darkCyan';
});





$("btAdd") && $("btAdd").addEventListener("click", ()=>{
    const li=document.createElement('li');
    li.innerText = $('elementToAdd').value;
    $("liste").appendChild(li);
});




$('btAddition') && $('btAddition').addEventListener('click',()=>{
    document.querySelector('#res .detail').textContent=$('elemAdd1').value+'+'+$('elemAdd2').value;
    document.querySelector('#res .number').textContent=parseInt($('elemAdd1').value)+parseInt($('elemAdd2').value);
});




$('btChangeImage') && $('btChangeImage').addEventListener('click',()=>{
    $('image').src='./../../asset/images/'+$('SelectImage').value;
});




$('over') && $('over').addEventListener('mouseover',()=>{
    $('message-over').innerHTML+='Mouse over..<br>';
});




$('to-delete') && $('to-delete').addEventListener('click',()=>{
    const elm=$('to-delete')
    if(confirm("Suprimer l'élément?")){
        elm.remove();
        //l'élément réapparait au bout de 3sec
        setTimeout(()=>{
            document.body.appendChild(elm)
        },3000);
    }
});