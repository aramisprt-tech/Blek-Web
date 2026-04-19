import React, { useEffect } from 'react';
import './Privacy.css';

export function Privacy() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <header className="privacy-header">
          <h1 className="privacy-title">Política de Privacidad</h1>
          <p className="privacy-updated">Última actualización: Abril 2026</p>
        </header>

        <section className="privacy-content">
          <div className="privacy-section">
            <h2>1. Introducción</h2>
            <p>
              En Blek nos comprometemos a proteger tu privacidad. Esta Política de Privacidad explica qué información recopilamos, cómo la utilizamos y cuáles son tus derechos sobre ella. Al usar la aplicación, aceptas las prácticas descritas en este documento.
            </p>
          </div>

          <div className="privacy-section">
            <h2>2. Información que recopilamos</h2>
            <p>Recopilamos la siguiente información para ofrecerte el servicio:</p>
            <ul>
              <li><strong>Datos de cuenta:</strong> Dirección de correo electrónico y nombre de usuario que proporcionas al registrarte.</li>
              <li><strong>Actividad de lectura:</strong> Libros que añades a tu biblioteca, tu historial de lectura y valoraciones.</li>
              <li><strong>Metas y progreso:</strong> Metas de lectura y progreso registrado dentro de la app.</li>
              <li><strong>Preferencias:</strong> Preferencias de notificación y ajustes de la aplicación.</li>
              <li><strong>Datos técnicos:</strong> Información de conexión técnica básica (tipo de dispositivo, versión del sistema operativo) para garantizar el correcto funcionamiento de la app.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>3. Cómo usamos tu información</h2>
            <p>Utilizamos tus datos exclusivamente para:</p>
            <ul>
              <li>Crear y gestionar tu cuenta personal en Blek.</li>
              <li>Sincronizar tu biblioteca y progreso de lectura entre dispositivos.</li>
              <li>Enviarte notificaciones relacionadas con tus metas y actividad, si lo has autorizado.</li>
              <li>Mejorar la experiencia de la aplicación y corregir errores técnicos.</li>
              <li>Responder a tus solicitudes de soporte o consultas.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>4. Compartir información con terceros</h2>
            <p>
              No vendemos, alquilamos ni compartimos tu información personal con terceros con fines comerciales. Únicamente podemos compartir datos en los siguientes casos limitados:
            </p>
            <ul>
              <li>Con proveedores de servicios técnicos que nos ayudan a operar la infraestructura de la app, bajo estrictos acuerdos de confidencialidad.</li>
              <li>Cuando sea requerido por ley o autoridad competente.</li>
              <li>Para proteger los derechos, la seguridad o la propiedad de Blek o de sus usuarios.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>5. Almacenamiento y seguridad</h2>
            <p>
              Tu información se almacena en servidores seguros con cifrado en tránsito y en reposo. Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos contra accesos no autorizados, pérdida o alteración.
            </p>
            <p>
              Conservamos tus datos mientras tu cuenta esté activa. Si eliminas tu cuenta, tus datos personales serán borrados de forma permanente en un plazo máximo de 30 días.
            </p>
          </div>

          <div className="privacy-section">
            <h2>6. Tus derechos</h2>
            <p>Tienes derecho a:</p>
            <ul>
              <li>Acceder a los datos personales que tenemos sobre ti.</li>
              <li>Solicitar la corrección de datos inexactos.</li>
              <li>Solicitar la eliminación completa de tu cuenta y todos tus datos.</li>
              <li>Retirar tu consentimiento para el envío de notificaciones en cualquier momento desde los ajustes de la app.</li>
              <li>Presentar una reclamación ante la autoridad de protección de datos competente.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>7. Menores de edad</h2>
            <p>
              Blek no está destinado a menores de 13 años. No recopilamos conscientemente información de menores. Si eres padre o tutor y crees que tu hijo ha proporcionado datos personales, contáctanos para que podamos eliminarlos.
            </p>
          </div>

          <div className="privacy-section">
            <h2>8. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos cualquier cambio relevante a través de la aplicación. El uso continuado de Blek tras la publicación de cambios implica tu aceptación de la nueva versión.
            </p>
          </div>

          <div className="privacy-section">
            <h2>9. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política o quieres ejercer tus derechos, escríbenos a: <a href="mailto:soporte@blekapp.com">soporte@blekapp.com</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
