module.exports = function(RED) {
  function rockpicomm(config) {
      RED.nodes.createNode(this, config);
      var node = this;

      // Manejar eventos cuando llegue una entrada al nodo
      this.on('input', function(msg) {

          // Obtener los valores de los radio buttons desde msg.payload
          var radioButton1 = msg.payload.radioButton1;
          var radioButton2 = msg.payload.radioButton2;
          var radioButton3 = msg.payload.radioButton3;

         

          // Crear el comando o mensaje para enviar al script Python
          var command = `python tu_script_python.py ${radioButton1} ${radioButton2} ${radioButton3}`; 
           
           // Ejecutar el comando o enviarlo como mensaje a través de la salida del nodo
           msg.payload.command=command;
           node.send(msg);
      });
  }

  RED.nodes.registerType("rockpicommon", rockpicomm);
}