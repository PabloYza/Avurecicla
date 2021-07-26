import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <form
        id="contact"
        action="https://formsubmit.co/info@avurecicla.eu"
        method="post"
      >
        <h2 className="heading-secondary">Contacta con nosotros</h2>
        <fieldset>
          <input
            placeholder="Nombre de empresa"
            name="Nombre"
            type="text"
            tabIndex="1"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Cargo en empresa"
            name="Cargo"
            type="text"
            tabIndex="2"
            required
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Teléfono de contacto"
            name="Telf"
            type="tel"
            tabIndex="3"
            required
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Tu dirección de correo"
            name="Dirección correo"
            type="text"
            tabIndex="4"
            required
          />
        </fieldset>
        <fieldset>
          <input placeholder="Página web" name="web" type="text" tabIndex="4" />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Escribe aquí tu mensaje...."
            name="Mensaje:"
            tabIndex="5"
            required
          ></textarea>
        </fieldset>
        <div>
          <fieldset>
            <button type="submit" id="contact-submit" data-submit="...Sending">
              Submit
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Contact;
