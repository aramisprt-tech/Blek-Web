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
          <p className="privacy-updated">Última actualización: julio 2026</p>
        </header>

        <section className="privacy-content">
          <div className="privacy-section">
            <h2>1. Introducción</h2>
            <p>
              En Blek nos comprometemos a proteger tu privacidad. Esta Política de Privacidad explica qué información recopilamos, cómo la utilizamos y cuáles son tus derechos. Al descargar y utilizar Blek, aceptas las prácticas descritas en este documento.
            </p>
          </div>

          <div className="privacy-section">
            <h2>2. Información que recopilamos</h2>
            <p>Para ofrecerte la mejor experiencia posible, recopilamos la siguiente información:</p>
            <ul>
              <li><strong>Datos de cuenta:</strong> Dirección de correo electrónico, nombre de usuario y contraseña proporcionados al registrarte.</li>
              <li><strong>Actividad y uso:</strong> Los libros que añades a tu estantería digital, tu historial de lectura, valoraciones, rachas de lectura, sesiones con el timer, progreso de tus metas y tu actividad en los clubes de lectura.</li>
              <li><strong>Datos técnicos:</strong> Información básica del dispositivo (modelo, versión del sistema operativo, zona horaria) e información sobre bloqueos o errores de la app para ayudarnos a mejorar su estabilidad.</li>
              <li><strong>Preferencias:</strong> Tus ajustes de notificaciones y personalización de la aplicación.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>3. Cómo usamos tu información</h2>
            <p>Utilizamos tus datos exclusivamente para:</p>
            <ul>
              <li>Crear, personalizar y gestionar tu cuenta en Blek.</li>
              <li>Sincronizar tu biblioteca, rachas y progreso de lectura entre tus dispositivos.</li>
              <li>Permitir tu participación en clubes de lectura y funciones sociales.</li>
              <li>Enviarte recordatorios, notificaciones de tus metas y actualizaciones (siempre que lo hayas autorizado).</li>
              <li>Analizar el rendimiento de la aplicación, solucionar errores técnicos y mejorar nuestras funciones.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>4. Proveedores externos y servicios de terceros</h2>
            <p>
              Blek utiliza servicios de terceros para funcionar correctamente (como bases de datos en la nube y APIs de metadatos de libros para mostrar portadas y sinopsis). Compartimos la información estrictamente necesaria con estos proveedores bajo acuerdos de confidencialidad, únicamente para mantener la infraestructura técnica de la aplicación. No vendemos tus datos a terceros con fines publicitarios o comerciales.
            </p>
          </div>

          <div className="privacy-section">
            <h2>5. Almacenamiento y seguridad</h2>
            <p>
              Aplicamos medidas de seguridad técnicas y organizativas para proteger tus datos contra accesos no autorizados, alteraciones o pérdida. Sin embargo, ningún sistema es completamente infalible. Al utilizar Blek, asumes que la transmisión de datos a través de Internet tiene riesgos inherentes.
            </p>
          </div>

          <div className="privacy-section">
            <h2>6. Menores de edad</h2>
            <p>
              Blek tiene una clasificación de edad de 3+/4+ en las tiendas de aplicaciones, lo que significa que su contenido es seguro y apto para todos los públicos. Sin embargo, para crear una cuenta y procesar datos personales, el usuario debe tener la edad mínima requerida por la legislación de protección de datos de su país (por ejemplo, 13 años en EE.UU. o 14 años en España). Si el usuario es menor de esa edad, la cuenta debe ser creada o autorizada por un padre o tutor legal. Si descubrimos que hemos recopilado datos de un menor sin el consentimiento verificable de sus tutores, procederemos a eliminarlos.
            </p>
          </div>

          <div className="privacy-section">
            <h2>7. Tus derechos y retención de datos</h2>
            <p>Conservamos tus datos mientras tu cuenta esté activa. En cualquier momento tienes derecho a:</p>
            <ul>
              <li>Acceder a los datos personales que tenemos sobre ti.</li>
              <li>Corregir información inexacta.</li>
              <li>Solicitar la eliminación completa y definitiva de tu cuenta y todos sus datos desde los ajustes de la aplicación.</li>
              <li>Retirar tu consentimiento para recibir notificaciones.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>8. Cambios en esta política</h2>
            <p>
              Nos reservamos el derecho a actualizar esta Política de Privacidad en cualquier momento. Te notificaremos sobre cambios significativos a través de la app o por correo electrónico. El uso continuado de Blek tras dichos cambios implica tu aceptación.
            </p>
          </div>

          <div className="privacy-section">
            <h2>9. Contacto</h2>
            <p>
              Si tienes dudas sobre esta política o el tratamiento de tus datos, puedes escribirnos a: <a href="mailto:soporte@blekapp.com">soporte@blekapp.com</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
