$( document ).ready(() => {
    //const socket = io.connect('http://localhost:3002');
    const socket = io.connect('https://remote-properties-client.herokuapp.com/');

    //init
    let quantity = localStorage.getItem('qtd') === null ? 1 : localStorage.getItem('qtd');
    let initColor = localStorage.getItem('color') === null ? 1 : localStorage.getItem('color');

    refresh(quantity, initColor);

    socket.on('push', (data) => {
        let qtd;
        let circleColor;
    
        if(data.qtd === undefined || data.qtd === null) {
            if(localStorage.getItem('qtd') === null) {
                qtd = 1; //default value
            } else {
                qtd = localStorage.getItem('qtd');
            }
        } else {
            localStorage.setItem('qtd', data.qtd);
            qtd = data.qtd;
        }
    
        if(data.color === undefined || data.color === null) {
            if(localStorage.getItem('color') === null) {
                color = 'black'; //default value
            } else {
                color = localStorage.getItem('color');
            }
        } else {
            localStorage.setItem('color', data.color);
            color = data.color;
        }
    
        refresh(qtd, color);
    });
});