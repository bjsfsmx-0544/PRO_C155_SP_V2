// Componente de rotación del buzo
AFRAME.registerComponent("diver-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 },
    speedOfMovement: { type: "number", default: 0 }
  },
  init: function () {
    window.addEventListener("keydown", (e) => {

      // Obtener los datos de los atributos
      this.data.speedOfRoation = this.el.getAttribute("rotation");      
      this.data.speedOfMovement = this.el.getAttribute("position");

      var diverRotation = this.data.speedOfRoation;      
      var diverPosition = this.data.speedOfMovement;

      // Controlar los atributos con las flechas del teclado
      if (e.key === "ArrowDown") {
        if (diverPosition.z < 20) {
          diverPosition.z += 0.1;
          this.el.setAttribute("position", diverPosition);
        }
      }
      if (e.key === "ArrowUp") {
        if (diverPosition.z> -10) {
          diverPosition.z -= 0.1;
          this.el.setAttribute("position", diverPosition);
        }
      }
      if (e.key === "ArrowRight") {
        if (diverRotation.y > -360) {
          diverRotation.y -= 0.5;
          this.el.setAttribute("rotation", diverRotation);
        }
        if (diverPosition.x < 20) {
          diverPosition.x += 0.05;
          this.el.setAttribute("position", diverPosition);
        }
      }
      if (e.key === "ArrowLeft") {
        if (diverRotation.y <360) {
          diverRotation.y += 0.5;
          this.el.setAttribute("rotation", diverRotation);
        }
        if (diverPosition.x > -20) {
          diverPosition.x -= 0.05;
          this.el.setAttribute("position", diverPosition);
        }
      }
    });
  }
});
