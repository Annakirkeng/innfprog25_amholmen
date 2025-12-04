// register.js

// Liste over stillinger.
// Indeksen i denne listen brukes i employee.positionIndex
export const positions = [
  "Rektor",      // 0
  "Dekan",       // 1
  "Professor",   // 2
  "Lektor",      // 3
  "Vaktmester"   // 4
]

/**
 * Register over alle ansatte på høyskolen.
 * Undervisere (Professor + Lektor) har alltid minst ett kurs i courses-listen.
 */
export const employees = [
  // 1 rektor
  {
    id: 1,
    name: "Eva Lund",
    positionIndex: 0, // Rektor
    office: "A101",
    email: "eva.lund@hiof.no",
    courses: []
  },

  // 2 dekaner
  {
    id: 2,
    name: "Tore Sørensen",
    positionIndex: 1, // Dekan
    office: "B203",
    email: "tore.sorensen@hiof.no",
    courses: []
  },
  {
    id: 3,
    name: "Mai Nguyen",
    positionIndex: 1, // Dekan
    office: "B204",
    email: "mai.nguyen@hiof.no",
    courses: []
  },

  // 3 vaktmestere
  {
    id: 4,
    name: "Per Johansen",
    positionIndex: 4, // Vaktmester
    office: "V001",
    email: "per.johansen@hiof.no",
    courses: []
  },
  {
    id: 5,
    name: "Khalid Ali",
    positionIndex: 4, // Vaktmester
    office: "V002",
    email: "khalid.ali@hiof.no",
    courses: []
  },
  {
    id: 6,
    name: "Siri Hansen",
    positionIndex: 4, // Vaktmester
    office: "V003",
    email: "siri.hansen@hiof.no",
    courses: []
  },

  // 5 professorer (undervisere)
  // Minst tre av dem har ansvar for to kurs
  {
    id: 7,
    name: "Ola Berg",
    positionIndex: 2, // Professor
    office: "C310",
    email: "ola.berg@hiof.no",
    courses: ["Programmering 1", "Webutvikling"] // 2 kurs
  },
  {
    id: 8,
    name: "Lina Eriksen",
    positionIndex: 2, // Professor
    office: "C312",
    email: "lina.eriksen@hiof.no",
    courses: ["Algoritmer og datastrukturer"] // 1 kurs
  },
  {
    id: 9,
    name: "Jonas Müller",
    positionIndex: 2, // Professor
    office: "C313",
    email: "jonas.muller@hiof.no",
    courses: ["Kunstig intelligens", "Maskinlæring"] // 2 kurs
  },
  {
    id: 10,
    name: "Ingrid Pettersen",
    positionIndex: 2, // Professor
    office: "C314",
    email: "ingrid.pettersen@hiof.no",
    courses: ["Databaser", "Webutvikling"] // 2 kurs
  },
  {
    id: 11,
    name: "Sara Ahmed",
    positionIndex: 2, // Professor
    office: "C315",
    email: "sara.ahmed@hiof.no",
    courses: ["Operativsystemer"] // 1 kurs
  },

  // 10 lektorer (undervisere)
  {
    id: 12,
    name: "Henrik Nilsen",
    positionIndex: 3, // Lektor
    office: "D401",
    email: "henrik.nilsen@hiof.no",
    courses: ["Webdesign", "Responsiv utvikling"]
  },
  {
    id: 13,
    name: "Anne Solberg",
    positionIndex: 3, // Lektor
    office: "D402",
    email: "anne.solberg@hiof.no",
    courses: ["Grunnleggende JavaScript"]
  },
  {
    id: 14,
    name: "Trond Bakken",
    positionIndex: 3, // Lektor
    office: "D403",
    email: "trond.bakken@hiof.no",
    courses: ["UX-design"]
  },
  {
    id: 15,
    name: "Kari Holm",
    positionIndex: 3, // Lektor
    office: "D404",
    email: "kari.holm@hiof.no",
    courses: ["Frontend-utvikling", "CSS og design"]
  },
  {
    id: 16,
    name: "Eirik Larsen",
    positionIndex: 3, // Lektor
    office: "D405",
    email: "eirik.larsen@hiof.no",
    courses: ["Python for web"]
  },
  {
    id: 17,
    name: "Ida Martinsen",
    positionIndex: 3, // Lektor
    office: "D406",
    email: "ida.martinsen@hiof.no",
    courses: ["Systemutvikling"]
  },
  {
    id: 18,
    name: "Rune Karlsen",
    positionIndex: 3, // Lektor
    office: "D407",
    email: "rune.karlsen@hiof.no",
    courses: ["Objektorientert programmering"]
  },
  {
    id: 19,
    name: "Mona Strøm",
    positionIndex: 3, // Lektor
    office: "D408",
    email: "mona.strom@hiof.no",
    courses: ["Datakommunikasjon"]
  },
  {
    id: 20,
    name: "Tom Rasmussen",
    positionIndex: 3, // Lektor
    office: "D409",
    email: "tom.rasmussen@hiof.no",
    courses: ["Datasikkerhet"]
  },
  {
    id: 21,
    name: "Julie Olsen",
    positionIndex: 3, // Lektor
    office: "D410",
    email: "julie.olsen@hiof.no",
    courses: ["Prosjektledelse"]
  }
]
