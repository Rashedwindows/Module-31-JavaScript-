document.getElementById('add-border').addEventListener('click', function(){

  const workingStyle = document.getElementById('friend-container');
  workingStyle.style.border = '3px solid red';
});

// --------add style onclik, getElementsByClassName and for of loop wise-----


function addBackgroundColor() {

    const friends = document.getElementsByClassName('friend');
    for(const friend of friends) {

        friend.style.backgroundColor = 'lightblue';
        friend.style.border = '1px solid red';

    }
}





// --------------add friend with new tag list----------//

document.getElementById('add-friend').addEventListener('click', function(){

   const container =  document.getElementById('friend-container');

   const friendDiv = document.createElement('div');
   friendDiv.classList.add('friend');
   friendDiv.innerHTML = `
           <h3 class="friend-name">New-Friend</h3>
          <p>Lorem, ipsum.</p>`;
    
    container.appendChild(friendDiv);
   
        
});

// -------color specific tag with class and onclick button(same to background color add)---------


function colorFriend(){

    const friendsName = document.getElementsByClassName('friend-name');

for(const friendName of friendsName){

    friendName.style.color = 'red';
}

};





