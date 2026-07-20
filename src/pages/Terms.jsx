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
          <p className="terms-updated">Última actualización: julio 2026</p>
        </header>

        <section className="terms-content">
          <div className="terms-section">
            <h2>1. Aceptación de los términos</h2>
            <p>
              Al descargar, instalar, registrarte o utilizar la aplicación Blek, aceptas quedar legalmente vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguno de los puntos descritos, no debes utilizar la aplicación.
            </p>
          </div>

          <div className="terms-section">
            <h2>2. Descripción del servicio</h2>
            <p>
              Blek es una plataforma digital diseñada para el seguimiento de hábitos de lectura. Permite a los usuarios organizar su biblioteca, usar un timer de lectura, mantener rachas, establecer metas, unirse a clubes de lectura e interactuar con la comunidad. La app evoluciona constantemente, por lo que las funciones pueden cambiar, añadirse o eliminarse sin previo aviso.
            </p>
          </div>

          <div className="terms-section">
            <h2>3. Registro, cuenta y edad</h2>
            <p>
              Blek es una aplicación apta para todos los públicos (clasificación 3+/4+ en las tiendas de apps). No obstante, para registrar una cuenta debes cumplir con la edad legal mínima para otorgar consentimiento sobre el tratamiento de datos en tu jurisdicción (generalmente 13 o 14 años). Si eres menor de esa edad, debes contar con la supervisión y autorización expresa de un padre o tutor legal para usar la plataforma. 
            </p>
            <p>
              Eres responsable de mantener la confidencialidad de tus credenciales y de toda la actividad que ocurra bajo tu cuenta.
            </p>
          </div>

          <div className="terms-section">
            <h2>4. Proveedores externos y exactitud de los datos</h2>
            <p>
              <strong>Cláusula de exención de responsabilidad sobre terceros:</strong> Blek se integra con APIs y proveedores externos (como bases de datos de libros globales) para obtener portadas, sinopsis, autores y otros metadatos. <strong>Blek no garantiza la exactitud, disponibilidad, actualidad ni veracidad de esta información.</strong>
            </p>
            <p>
              No nos hacemos responsables si un libro no aparece, si la información es incorrecta, o si los servicios de estos proveedores externos sufren caídas, lentitud o errores. El funcionamiento de gran parte de la aplicación depende de servicios de terceros que escapan a nuestro control.
            </p>
          </div>

          <div className="terms-section">
            <h2>5. Disponibilidad del servicio, rachas y pérdida de datos</h2>
            <p>
              Hacemos todo lo posible para que Blek funcione de forma continua y sin interrupciones. Sin embargo, la aplicación se proporciona "tal cual" (as is). <strong>No garantizamos que el servicio esté libre de errores o interrupciones.</strong>
            </p>
            <p>
              En ningún caso Blek, ni sus desarrolladores, serán responsables por la pérdida accidental de datos, pérdida de "rachas" de lectura, fallos en la sincronización, o el reinicio de las estadísticas de progreso debido a errores técnicos, caídas de servidores (propios o de terceros) o actualizaciones de la aplicación.
            </p>
          </div>

          <div className="terms-section">
            <h2>6. Uso aceptable y clubes de lectura</h2>
            <p>Blek incluye funciones sociales como los clubes de lectura y las valoraciones. Al interactuar en la app, te comprometes a:</p>
            <ul>
              <li>No publicar contenido ofensivo, discriminatorio, difamatorio, ilegal o que infrinja los derechos de autor de terceros.</li>
              <li>No hacer spam ni utilizar la plataforma con fines comerciales no autorizados.</li>
              <li>Tratar con respeto a otros usuarios de la comunidad.</li>
            </ul>
            <p>
              Nos reservamos el derecho de eliminar cualquier contenido que viole estas normas y de suspender o cancelar cuentas infractoras sin previo aviso.
            </p>
          </div>

          <div className="terms-section">
            <h2>7. Propiedad intelectual</h2>
            <p>
              El código, diseño, marca, logotipos y todo el contenido original de la aplicación Blek son propiedad exclusiva de sus desarrolladores. No está permitida la reproducción, distribución, ingeniería inversa o modificación de la app sin nuestro consentimiento expreso. Los metadatos y portadas de los libros mostrados en la app pertenecen a sus respectivos autores, editoriales o bases de datos de origen y se muestran únicamente con fines informativos.
            </p>
          </div>

          <div className="terms-section">
            <h2>8. Limitación de responsabilidad general</h2>
            <p>
              En la máxima medida permitida por la ley aplicable, Blek y sus creadores no serán responsables de ningún daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de uso de la aplicación, incluyendo, pero no limitado a, la dependencia en cualquier información obtenida a través del servicio.
            </p>
          </div>

          <div className="terms-section">
            <h2>9. Modificaciones a los Términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Si realizamos cambios materiales, intentaremos notificarte a través de la aplicación. Continuar usando Blek después de que los cambios entren en vigor constituye tu aceptación de los nuevos términos.
            </p>
          </div>

          <div className="terms-section">
            <h2>10. Legislación aplicable</h2>
            <p>
              Estos términos se regirán e interpretarán de acuerdo con la legislación vigente. Cualquier disputa legal que surja en relación con el uso de Blek se someterá a la jurisdicción de los tribunales competentes de nuestra sede operativa.
            </p>
          </div>

          <div className="terms-section">
            <h2>11. Contacto</h2>
            <p>
              Para dudas, sugerencias o soporte relacionado con estos términos, puedes ponerte en contacto con nosotros en: <a href="mailto:soporte@blekapp.com"><strong>soporte@blekapp.com</strong></a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
