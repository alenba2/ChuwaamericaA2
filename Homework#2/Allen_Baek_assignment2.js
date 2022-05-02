const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
]

function double_array() {
  const newItemObject = {}

  for (let i = 0; i < itemsObject.length; i++) {
    let dummy = {
      quantity: itemsObject[i].quantity * 2,
      price: itemsObject[i].price * 2,
    }
    newItemObject[i] = dummy
  }

  document.getElementById('output1').innerHTML =
    'Quantity: ' +
    newItemObject[0].quantity +
    ' Price: ' +
    newItemObject[0].price +
    '\n'

  document.getElementById('output2').innerHTML =
    'Quantity: ' +
    newItemObject[1].quantity +
    ' Price: ' +
    newItemObject[1].price +
    '\n'

  document.getElementById('output3').innerHTML =
    'Quantity: ' +
    newItemObject[2].quantity +
    ' Price: ' +
    newItemObject[2].price +
    '\n'
}

function keep_item() {
  const newItemObject = {}
  let counter = 0

  for (let i = 0; i < itemsObject.length; i++) {
    if (itemsObject[i].quantity > 2 && itemsObject[i].price > 300) {
      let dummy = {
        quantity: itemsObject[i].quantity,
        price: itemsObject[i].price,
      }
      newItemObject[counter] = dummy

      counter = counter + 1
    }
  }

  document.getElementById('output1').innerHTML =
    'Quantity: ' +
    newItemObject[0].quantity +
    ' Price: ' +
    newItemObject[0].price +
    '\n'

  document.getElementById('output2').innerHTML =
    'Quantity: ' +
    newItemObject[1].quantity +
    ' Price: ' +
    newItemObject[1].price +
    '\n'

  if (newItemObject[3] == null) {
    document.getElementById('output3').innerHTML = ''
  } else {
    document.getElementById('output3').innerHTML =
      'Quantity: ' +
      newItemObject[2].quantity +
      ' Price: ' +
      newItemObject[2].price +
      '\n'
  }
}

function print_total() {
  let total = 0

  for (let i = 0; i < itemsObject.length; i++) {
    total = total + itemsObject[i].price
  }

  document.getElementById('output1').innerHTML = 'Total: ' + total

  document.getElementById('output2').innerHTML = ''
  document.getElementById('output3').innerHTML = ''
}

function remove_string() {
  const string =
    ' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  '
  let modString = string

  modString = modString.toLowerCase()
  modString = modString.split(' ').join('')
  modString = modString.split('-').join('')

  document.getElementById('output1').innerHTML = 'String given: ' + string
  document.getElementById('output2').innerHTML = 'Modified String: ' + modString
  document.getElementById('output3').innerHTML = ''
}
