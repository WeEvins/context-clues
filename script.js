
document.addEventListener('DOMContentLoaded', function () {

    //defining my variables in one place for my convenience
    var friendNames = ['Klutch', 'Calvin Jitter', 'Riska', 'Frills', 'Kali'];
    var locationNames = ['ballpit', 'dining room', 'room with the moose', 'upstairs bathroom, you know the one for when you have too much taco bell', 'library', 'kitchen', 'guest bedroom', 'fancy parlor', 'normal parlor', 'pool in the back'];
    var weaponNames = ['a bag of endless cats', 'candlejacks candlejack', '15 toothpicks and a small amount of lint', 'a gun that shoots knives that explodes into smaller guns', 'just a lot of body odor. like, so much.', 'POCKET SAND', 'a really cool switchblade comb', 'the power of friendship', 'a really big sword. like jrpg big.', 'gordon freemans crowbar', 'an overly long anecdote', 'a bunch of dynamite and an acme plunger', 'a ton of tiny plastic horses', 'questionable gas station sushi', 'weapon', 'weapon2', 'weapon3', 'weapon4', 'weapon5'];


    //I know i need to do a for loop that iterates to 100, and creates the h3s, appends them to the page, 
    //then set an event listener on those individual h3 to give it a random accusation


    for (var i = 0; i < 100; i++) {
        var accusation = document.createElement('h3');
        f = i + 1;
        accusation.textContent = `Accusation ${f}`;
        document.body.appendChild(accusation); 
        
        //Okay, so i need to make a math for randomizing my friend, location, and weapon, then feed that
        //to the double click func below vvvv 

        //playing with the math here. using my random color math as reference from previous project.
        //  let rand = colorArray[Math.floor(Math.random() * colorArray.length)]; 

        var randFriend = friendNames[Math.floor(Math.random() * friendNames.length)];
        var randWeapon = weaponNames[Math.floor(Math.random() * weaponNames.length)];
        var randLocation = locationNames[Math.floor(Math.random() * locationNames.length)];

        //okay my math is somewhat working. it's pulling a random one from the array, but its the SAME random one
        accusation.addEventListener('dblclick', (e) => {
            console.log('it worked')
            alert(`I accuse ${randFriend}, with ${randWeapon} in the ${randLocation}!!`);
        })
    }
});    