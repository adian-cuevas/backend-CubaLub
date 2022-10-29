module.exports = {
  async afterCreate(event) {
    try {
      await strapi.plugin("email").service("email").send({
        to: "adiancuevasmartinez@gmail.com",
        from: "someone2@example.com",
        subject: "Probando envio de email",
        text: "Esto es un texto",
        html: `

        <b>Usted ha solicitado un cambio de contraseña</b>
        ${event.nombre}
        
        `,
      });
    } catch (err) {
      console.log("dio error");
      console.log(err);
    }
  },
};
