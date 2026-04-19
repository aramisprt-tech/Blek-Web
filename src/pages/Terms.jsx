import React, { useEffect } from 'react';
import './Terms.css';

export function Terms() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page">
      <div className="terms-container">
        <header className="terms-header">
          <h1 className="terms-title">Términos y Condiciones</h1>
          <p className="terms-updated">Última actualización: Mayo 2025</p>
        </header>

        <section className="terms-content">
          <div className="terms-section">
            <h2>1. Aceptación de los términos</h2>
            <p>
              Al descargar, instalar o utilizar Blek, aceptas quedar vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguno de ellos, no debes usar la aplicación.
            </p>
          </div>

          <div className="terms-section">
            <h2>2. Descripción del servicio</h2>
            <p>
              Blek es una aplicación de seguimiento de lectura personal que te permite organizar tu biblioteca, registrar tu progreso, establecer metas de lectura y descubrir nuevos libros. El servicio se ofrece de forma gratuita, con posibilidad de funcionalidades adicionales en el futuro.
            </p>
          </div>

          <div className="terms-section">
            <h2>3. Registro y cuenta</h2>
            <ul>
              <li>Debes proporcionar información veraz y completa al crear tu cuenta.</li>
              <li>Eres responsable de mantener la confidencialidad de tus credenciales de acceso.</li>
              <li>Debes notificarnos de inmediato cualquier uso no autorizado de tu cuenta.</li>
              <li>Solo puedes tener una cuenta por persona.</li>
              <li>Debes tener al menos 13 años para usar Blek.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>4. Uso aceptable</h2>
            <p>Al usar Blek, te comprometes a no:</p>
            <ul>
              <li>Utilizar la app con fines ilegales o fraudulentos.</li>
              <li>Publicar contenido ofensivo, difamatorio, obsceno o que infrinja derechos de terceros.</li>
              <li>Intentar acceder sin autorización a sistemas o datos de otros usuarios.</li>
              <li>Automatizar el uso de la app sin permiso expreso (bots, scrapers, etc.).</li>
              <li>Interferir con el funcionamiento normal de la aplicación o sus servidores.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>5. Contenido del usuario</h2>
            <p>
              Las valoraciones, reseñas y comentarios que publiques en Blek son de tu responsabilidad. Al publicar contenido, nos otorgas una licencia no exclusiva para mostrarlo dentro de la app. Nos reservamos el derecho de eliminar contenido que infrinja estos términos.
            </p>
          </div>

          <div className="terms-section">
            <h2>6. Propiedad intelectual</h2>
            <p>
              Todos los derechos sobre la aplicación Blek, incluyendo su diseño, código fuente, logotipos y marca, son propiedad exclusiva de sus desarrolladores. Queda prohibida la reproducción, distribución o modificación sin autorización expresa.
            </p>
            <p>
              La información sobre libros (portadas, descripciones, metadatos) proviene de fuentes públicas y se usa con fines informativos dentro de la app.
            </p>
          </div>

          <div className="terms-section">
            <h2>7. Limitación de responsabilidad</h2>
            <p>
              Blek se proporciona "tal cual". No garantizamos disponibilidad continua ni ausencia de errores. En la máxima medida permitida por la ley, no seremos responsables de daños indirectos, incidentales o consecuentes derivados del uso de la app.
            </p>
          </div>

          <div className="terms-section">
            <h2>8. Suspensión y cancelación</h2>
            <p>
              Podemos suspender o cancelar tu acceso si incumples estos términos, sin previo aviso y sin responsabilidad. Puedes cancelar tu cuenta en cualquier momento desde los ajustes de la aplicación.
            </p>
          </div>

          <div className="terms-section">
            <h2>9. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios significativos se comunicarán mediante notificación en la app. El uso continuado implica la aceptación de los nuevos términos.
            </p>
          </div>

          <div className="terms-section">
            <h2>10. Legislación aplicable</h2>
            <p>
              Estos Términos se rigen por la legislación española. Cualquier disputa se someterá a los juzgados y tribunales competentes de España.
            </p>
          </div>

          <div className="terms-section">
            <h2>11. Contacto</h2>
            <p>
              Para cualquier consulta sobre estos términos, contáctanos en: <a href="mailto:soporte@blekapp.com">soporte@blekapp.com</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
