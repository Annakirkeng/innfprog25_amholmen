// actions.js
// Henter datastrukturen fra register.js
import { employees, positions } from "./register.js";

/**
 * 1. Generere HTML-struktur for informasjon om en enkelt ansatt
 */
export function createEmployeeHTML(employee) {
  const positionName = positions[employee.positionIndex] || "Ukjent stilling";

  const coursesHTML =
    employee.courses && employee.courses.length > 0
      ? `<ul>${employee.courses.map((c) => `<li>${c}</li>`).join("")}</ul>`
      : "<p>Ingen kursansvar</p>";

  return `
    <article class="employee">
      <h2>${employee.name}</h2>
      <p><strong>Stilling:</strong> ${positionName}</p>
      <p><strong>Kontor:</strong> ${employee.office}</p>
      <p><strong>E-post:</strong> <a href="mailto:${employee.email}">${employee.email}</a></p>
      <section class="courses">
        <h3>Kursansvar</h3>
        ${coursesHTML}
      </section>
    </article>
  `;
}

/**
 * 2. Liste ut alle ansatte som én stor HTML-streng
 *    (bruker createEmployeeHTML til å formatere hver ansatt)
 */
export function listAllEmployeesHTML() {
  return employees.map((emp) => createEmployeeHTML(emp)).join("\n");
}

/**
 * 3. Filtrere ansatte etter stilling (for eksempel "Professor" eller "Lektor")
 *    Returnerer en liste med ansatte-objekter.
 */
export function filterEmployeesByPosition(positionName) {
  const index = positions.indexOf(positionName);
  if (index === -1) {
    // Stillingen finnes ikke
    return [];
  }
  return employees.filter((emp) => emp.positionIndex === index);
}

/**
 * 4. Finne alle kurs som tilbys på høyskolen (unik liste)
 */
export function getAllCourses() {
  const courseSet = new Set();

  employees.forEach((emp) => {
    (emp.courses || []).forEach((course) => {
      courseSet.add(course);
    });
  });

  return Array.from(courseSet); // gjør om Set -> vanlig array
}

/**
 * 5a. Filtrere ut undervisere (professorer og lektorer)
 */
export function getTeachers() {
  // I register.js: 2 = Professor, 3 = Lektor
  return employees.filter(
    (emp) => emp.positionIndex === 2 || emp.positionIndex === 3
  );
}

/**
 * 5b. Filtrere ut administrative ansatte (alle som ikke er undervisere)
 */
export function getAdministrativeStaff() {
  return employees.filter(
    (emp) => !(emp.positionIndex === 2 || emp.positionIndex === 3)
  );
}

/**
 * 6. Legge til en ny underviser i registeret
 *    Forventer et objekt med name, office, email, positionName ("Professor" / "Lektor") og courses (array).
 *    Returnerer den nye underviseren.
 */
export function addTeacher({ name, office, email, positionName, courses }) {
  const posIndex = positions.indexOf(positionName);

  // Sjekk at stillingen finnes
  if (posIndex === -1) {
    throw new Error("Ugyldig stilling: " + positionName);
  }

  // Sjekk at det faktisk er en underviser-stilling
  if (!(posIndex === 2 || posIndex === 3)) {
    throw new Error("Underviser må være 'Professor' eller 'Lektor'.");
  }

  // Finn neste ledige id
  const maxId = employees.reduce(
    (max, emp) => (emp.id > max ? emp.id : max),
    0
  );

  const newTeacher = {
    id: maxId + 1,
    name,
    office,
    email,
    positionIndex: posIndex,
    courses: courses && courses.length ? courses : []
  };

  employees.push(newTeacher);
  return newTeacher;
}

/**
 * 7. Slette en ansatt fra registeret (ved id)
 *    Returnerer true hvis noen ble slettet, ellers false.
 */
export function removeEmployeeById(id) {
  const index = employees.findIndex((emp) => emp.id === id);

  if (index === -1) {
    // Fant ingen med den id-en
    return false;
  }

  employees.splice(index, 1); // fjerner én ansatt fra arrayet
  return true;
}

/**
 * 8. Ekstra funksjon: finne alle ansatte som har ansvar for et gitt kurs
 *    (nyttig når man skal vise hvem som underviser i et kurs)
 */
export function getEmployeesByCourse(courseCode) {
  return employees.filter(
    (emp) => emp.courses && emp.courses.includes(courseCode)
  );
}
