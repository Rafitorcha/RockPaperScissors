addition to the 0.3, has object msg (the object replace the strings in the if conditional) receives the cpu variable for random numbers without refreshing the page

code removed:
- e.target.id

code added:
- exist a form (mayybeeee will be changed with a selector) that uses the button with the type submit
- Bootstrap is-valid and is-invalid in the form, complemented with regExp for only numbers
- input required
- ul list (help to visualize the number of sprites added), furthermore, ol list (help to get idea about rules)
- box-shadow as a feedback when the user clicks a image
- function operatio:
  - if the user wins, he receives a point
  - if the user looses, the cpu receives a point
  - calls function puntos
- resources are stored in template
- document fragment stored in variable fragment
- function aparece:
  - const clone, useful avoiding reflowing, that clone appears using appendChild for the fragment
  - variable pintar prints the content in fragment
- function puntos:
  - variable player get the element by id of his marker
  - variable computer get the element by id of his marker
  - player changes his textContent to the point adquired in the function operatio
  - computer changes his textContent to the point adquired in the function operatio
- function validar:
  - stored the document event listener click
  - has if conditionals with matches that add or remove a class for the box-shadow feedback
  - each matches in accordance to the img class, take a value for the comparative in function mostrar 
  - calls the function mostrar
- function change:
  - addEventListener linked with the form class
  - if equals 2, you can see new sprites for the rock, paper and scissors
