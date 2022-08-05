let fecha = new Date;
fecha = fecha.getUTCFullYear() + '-' +
('00' + (fecha.getUTCMonth()+1)).slice(-2) + '-' +
('00' + fecha.getUTCDate()).slice(-2) + ' ' + 
('00' + (fecha.getUTCHours()-3)).slice(-2) + ':' + 
('00' + fecha.getUTCMinutes()).slice(-2) + ':' + 
('00' + fecha.getUTCSeconds()).slice(-2);
console.log(fecha);