const $=(id)=>document.getElementById(id);

//background-color
$('bgcolor') && $("bgcolor").addEventListener('click',()=>{
    document.body.style.backgroundColor='darkCyan';
});




//addSelect
$("btAdd") && $("btAdd").addEventListener("click", ()=>{
    const li=document.createElement('li');
    li.innerText = $('elementToAdd').value;
    $("liste").appendChild(li);
});



//Addition
$('btAddition') && $('btAddition').addEventListener('click',()=>{
    document.querySelector('#res .detail').textContent=$('elemAdd1').value+'+'+$('elemAdd2').value;
    document.querySelector('#res .number').textContent=parseInt($('elemAdd1').value)+parseInt($('elemAdd2').value);
});



//Images
$('btChangeImage') && $('btChangeImage').addEventListener('click',()=>{
    $('image').src='./../../asset/images/'+$('SelectImage').value;
});



//mouse-over
$('over') && $('over').addEventListener('mouseover',()=>{
    $('message-over').innerHTML+='Mouse over..<br>';
});




//horloge



//delete-conf
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




//toggle-check
$('ck-toggle') && $('ck-toggle').addEventListener('click',()=>{
    $('toggle-check-elm').style.display=$('ck-toggle').checked?'none':'block';
    //$('ck-toggle-label').textContent=$('ck-toggle').checked?'Afficher':'Masquer';
});