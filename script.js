let dof = 0
let age = 0

document.getElementById('b2').addEventListener('click', click)
document.getElementById('b1').addEventListener('click', click1)

function click () {
  dof = document.getElementById('dayofweek').value
  if (dof === 'Monday' || dof === 'Tuesday' || dof === 'Wednesday' || dof === 'Thursday' || dof === 'Friday') {
    alert('Time for school!')
  } else if (dof === 'Saturday' || dof === 'Sunday') {
    alert('weekend')
  }
}

function click1 () {
  age = document.getElementById('age').value
  age = parseInt(age)
  if (age >= 18) {
    alert('Time to go to work!')
  } else if (age <= 18) {
    alert('Time for school!')
  }
}
