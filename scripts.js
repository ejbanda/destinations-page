/*
    form 
        #user_input_form
            input
                #destination_input
                #location_input
                #url_input
            textarea
                #description_input
            button 
                #add_input

    right form
        #details
        #detail_box
*/

// add listener to form

user_input_form.addEventListener('submit', (event) => {
    event.preventDefault();
    //create variables for the input fields
    const destination_var = destination_input.value;
    const location_var = location_input.value;
    const url_var = url_input.value;
    const descript_var = description_input.value;

    //create card
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute("style", "width: 18rem");

    //-create img
    const photo = document.createElement('img');
    photo.setAttribute("src", url_var);
    photo.classList.add('card-img-top');
    photo.setAttribute("alt", url_var);

    card.appendChild(photo);
    //-create div
    const card_body = document.createElement('div');
    card_body.classList.add('card-body');

    card.appendChild(card_body);
    //--create h5
    const header_title = document.createElement('h5');
    header_title.classList.add('card-title');
    header_title.innerText = destination_var;

    card_body.appendChild(header_title);

    //--create subhead
    const header_subTitle = document.createElement('h6');
    header_subTitle.classList.add('card-subtitle');
    header_subTitle.classList.add('mb-2');
    header_subTitle.classList.add('text-muted');
    header_subTitle.innerText = location_var;

    card_body.appendChild(header_subTitle);
    //--create p
    const para_descript = document.createElement('p');
    para_descript.classList.add('card-text');
    para_descript.innerText = descript_var;

    card_body.appendChild(para_descript);

    //--container for buttons
    const btn_container = document.createElement('div');
    btn_container.classList.add('button_container');

    card_body.appendChild(btn_container);
    //---create edit button
    const edit_btn = document.createElement('button');
    edit_btn.classList.add('btn');
    edit_btn.classList.add('btn-warning');
    edit_btn.innerText = "Edit";
//add another listener for edit

    btn_container.appendChild(edit_btn);
    //---create remove button
    const remove_btn = document.createElement('button');
    remove_btn.classList.add('btn');
    remove_btn.classList.add('btn-danger');
    remove_btn.innerText = "Remove";
    remove_btn.addEventListener('click', (event) =>{
        let cardBody = event.target.parentElement.parentElement;
        let card = cardBody.parentElement;
        card.remove();
    });

    btn_container.appendChild(remove_btn);
    //append to detail_box
    detail_box.append(card);

    detail_title.innerText= "My WishList";
})