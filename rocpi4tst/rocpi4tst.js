module.exports = function(RED) {
    const {PythonShell} = require('python-shell');
    const path = require('path');
    function rocpi4tst(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        // Configura las opciones para especificar el camino hacia el script Python que deseas ejecutar.
        //###let options = {
        //###    mode: 'text',
        //###    pythonPath: '/ruta/a/python', // Ruta al intérprete de Python en tu sistema.
        //###    pythonOptions: ['-u'], // Opciones adicionales si es necesario.
        //###    scriptPath: '/ruta/al/directorio/de/tu/script/py', // Ruta al directorio donde se encuentra el archivo .py.
        //###};


        node.on('input', function(msg) {

            var p1 = msg.payload.pin7;
            var p2 = msg.payload.pin15;
            var p3 = msg.payload.pin16;
            var p4 = msg.payload.pin22;
            var p5 = msg.payload.pin29;
            var p6 = msg.payload.pin31;
            var p7 = msg.payload.pin32;
            var p8 = msg.payload.pin33;
            var p9 = msg.payload.pin37;
            msg.payload = {
                "pin7":p1,
                "pin15":p2,
                "pin16":p3,
                "pin22":p4,
                "pin29":p5,
                "pin31":p6,
                "pin32":p7,
                "pin33":p8,
                "pin37":p9
            },
   
            node.send(msg);
        });
        
        
    }
    RED.nodes.registerType("rocpi4tst",rocpi4tst);
}