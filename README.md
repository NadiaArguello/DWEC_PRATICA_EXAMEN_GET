🧪 1️⃣ ENUNCIADO DEFINITIVO DE EXAMEN (EL MÁS REALISTA POSIBLE)
Este sí cubre todas las casuísticas importantes sin salirse de un examen de 2 h.
Es el que yo apostaría que más se parece al real.
________________________________________
📄 EXAMEN DWEC – DESARROLLO WEB EN ENTORNO CLIENTE
Duración: 2 horas
Ejercicio único
Material permitido: Internet (una sola pestaña)
Tecnología obligatoria: Angular
________________________________________
EJERCICIO ÚNICO (10 puntos)
Se pide desarrollar una aplicación frontend utilizando Angular, aplicando los conceptos vistos durante el curso.
La aplicación permitirá consultar y visualizar información de personajes obtenida desde una API REST.
________________________________________
1. Creación y estructura del proyecto (1 punto)
•	Crear un proyecto Angular correctamente estructurado.
•	Organizar el código en componentes y servicios.
•	El acceso a datos deberá realizarse desde un servicio independiente.
________________________________________
2. Servicio y consulta HTTP (2 puntos)
•	Crear un servicio Angular que realice una petición HTTP GET a la API:
•	https://rickandmortyapi.com/api/character
•	Procesar la respuesta en formato JSON.
•	Gestionar posibles errores en la petición HTTP.
________________________________________
3. Visualización dinámica en la vista principal (2 puntos)
•	Mostrar un listado de personajes.
•	De cada personaje se mostrará:
o	Nombre
o	Imagen
o	Estado (alive, dead, unknown)
•	Utilizar la directiva ngFor.
________________________________________
4. Uso de directivas estructurales (2 puntos)
•	Mostrar un mensaje de “Cargando datos…” mientras se realiza la petición HTTP (ngIf).
•	En función del estado del personaje, mostrar un texto distinto:
o	Alive → “Personaje vivo”
o	Dead → “Personaje fallecido”
o	Unknown → “Estado desconocido”
•	Utilizar ngSwitch para esta funcionalidad.
________________________________________
5. Gestión de eventos y filtrado (1 punto)
•	Añadir un campo de texto para filtrar personajes por nombre.
•	El filtrado se realizará mediante el evento keyup.
•	Utilizar Two-Way Data Binding.
________________________________________
6. Routing y vista detalle (1 punto)
•	Configurar el sistema de rutas de Angular.
•	Crear una vista detalle del personaje.
•	Pasar el identificador del personaje mediante la URL.
•	Mostrar información detallada del personaje seleccionado.
________________________________________
7. Entrega y despliegue (1 punto)
•	Subir el proyecto a un repositorio público de GitHub.
•	Desplegar la aplicación.
•	Entregar:
o	Enlace al repositorio
o	Enlace a la aplicación desplegada
________________________________________
Se valorará:
•	Correcto uso de Angular.
•	Gestión adecuada del DOM y de los eventos.
•	Uso correcto de servicios y routing.
•	Código claro, organizado y funcional.
________________________________________
👉 Este enunciado sí fuerza:
•	ngFor
•	ngIf
•	ngSwitch
•	eventos
•	HTTP
•	arquitectura
•	routing
•	JSON
•	deploy
Y sigue siendo realista para 2 horas.
________________________________________
🧠 2️⃣ QUÉ NO ESTUDIAR (AHORRA TIEMPO Y ESTRÉS)
Esto es clave. Apúntalo.
❌ Puedes IGNORAR tranquilamente:
•	jQuery (no entra si el examen es Angular)
•	AJAX con $.ajax() o $.get()
•	Cookies
•	BOM avanzado
•	Formularios reactivos complejos
•	ngTemplate / ngTemplateOutlet (muy improbable)
•	Pipes personalizados
•	Guards, resolvers, interceptors
•	Tests (Jasmine, Karma)
👉 Todo eso no entra en un examen de 2 h de FP.
________________________________________
✅ 3️⃣ LO QUE SÍ DEBES DOMINAR AL 100%
Si esto te sale sin pensar, apruebas.
Angular imprescindible
•	Componentes
•	Servicios
•	Routing
•	HttpClient
Plantilla (memorizable)
<div *ngIf="cargando">Cargando...</div>

<div *ngFor="let item of items">
  {{ item.name }}
</div>
Directivas
•	*ngFor
•	*ngIf
•	[ngSwitch]
Eventos
<input (keyup)="filtrar()" />
<button (click)="verDetalle(id)">
Binding
<input [(ngModel)]="busqueda" />
________________________________________
🛠️ 4️⃣ PLANTILLA ANGULAR “EMPEZAR Y CORRER” (EXAMEN)
Guárdate esto mentalmente. Es oro.
Estructura mínima
src/
 ├── app/
 │   ├── services/
 │   │    └── api.service.ts
 │   ├── components/
 │   │    ├── list/
 │   │    └── detail/
 │   ├── app-routing.module.ts
 │   └── app.module.ts
________________________________________
Servicio base
@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get<any>('URL_API');
  }

  getItem(id: number) {
    return this.http.get<any>(`URL_API/${id}`);
  }
}
________________________________________
Routing base
const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'detalle/:id', component: DetailComponent }
];
________________________________________
Detalle (ActivatedRoute)
const id = this.route.snapshot.paramMap.get('id');
________________________________________
🎯 5️⃣ CONCLUSIÓN FINAL (MUY HONESTA)
✔️ Sí, los exámenes se parecen
✔️ Sí, es intencionado
✔️ Sí, el modelo es casi único
✔️ No, no te van a sorprender
👉 El examen NO evalúa creatividad, evalúa:
“¿Sabes hacer una app Angular funcional?”
Si dominas el enunciado definitivo, apruebas.
________________________________________
🔥 Mi recomendación final
Haz esto:
1.	Practica solo el enunciado definitivo
2.	Cronométrate (2 h)
3.	Hazlo 2 veces
Si quieres, en el siguiente mensaje puedo:
•	Simular contigo el examen paso a paso
•	Hacer de “profesor” y corregirte
•	Decirte cómo repartir el tiempo minuto a minuto
Tú decides.
