let cards = [
    {
        nome:'Wayne Barnett',
        ruolo:'Founder & CEO',
        immagine: './img/wayne-barnett-founder-ceo.jpg',
        
       
    },

 
    
    {
        nome:'Angela Carrol',
        ruolo:'Chief Editor',
        immagine: './img/angela-caroll-chief-editor.jpg',
        


    },
    {
        nome:'Walter Gordon',
        ruolo:'Office Manager',
        immagine: './img/walter-gordon-office-manager.jpg',
        


    },
    {
        nome:'Angela Lopez',
        ruolo:'Social Media Manager',
        immagine: './img/angela-lopez-social-media-manager.jpg',
        


    },
    {
        nome:'Scott Estrada',
        ruolo:'Developer',
        immagine: './img/scott-estrada-developer.jpg',
        


    },
    {
        nome:'Barbara Ramos',
        ruolo:'Graphic Designer',
        immagine: './img/barbara-ramos-graphic-designer.jpg',
        


    }
];

console.log(cards);





function stampaNomi(){
    let containerTeam = document.querySelector('.team-container');
    for(let i = 0; i < cards.length; i++){
        containerTeam.innerHTML += `
                              <div class="team-card">
                                 <div class="card-image">
                                    <img src="${cards[i].immagine}"alt="${cards[i].nome}"/>
                                 </div>                  
                                 <div class="card-text">
                                   <h3>${cards[i].nome}</h3>                           
                                   <p> ${cards[i].ruolo}</p>                          
                                 </div>                             
                                        
                              </div>`                                   

    }
};
        
stampaNomi();




let bottone = document.getElementById('addMemberButton');
bottone.addEventListener('click', addNewMember);

function addNewMember () {
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const image = document.getElementById('image').value;

    const newMember = 
    {
        nome:name,
        ruolo:role,
        immagine:image,

    }  
cards.push(newMember);

}
addNewMember();