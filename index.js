let peopl = 0;


function increment() {
    peopl = peopl + 1;
    document.getElementById("count-el").textContent = peopl;
    
};

function save() {
    let peoplStr = peopl + " - "
    document.getElementById("save-el").textContent += peoplStr
    document.getElementById("count-el").textContent = 0
    peopl = 0
};
