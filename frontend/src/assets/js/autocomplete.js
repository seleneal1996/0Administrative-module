var availableList = [
    "Práctica 7",
    "Reclamo Examen Parcial 2",
    "Promedio de Laboratorios",
    "Prueba Semanal",
    "Práctica 2",
];
// use JS array
accessibleAutocomplete({
    // container element
    element: document.querySelector('#autocomplete-example-container'),
    // input id
    id: 'autocomplete-example',
    // data source
    source: availableList
  });
  accessibleAutocomplete({
    // container element
    element: document.querySelector('#autocomplete-example-container2'),
    // input id
    id: 'autocomplete-example2 ',
    // data source
    source: availableList
  });
  
  // use select box
//   accessibleAutocomplete.enhanceSelectElement({
//     selectElement: document.querySelector('#list')
//   })