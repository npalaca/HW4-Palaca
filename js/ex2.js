const fahrenheit1 = prompt("Enter a temperature in Fahrenheit to convert in Celsius.");


function FahrenheitConverter(fahrenheit) {
  return (Math.round((fahrenheit - 32) * (5 / 9)))
}

console.log(fahrenheit1 + ' degree Fahrenheit = ' + FahrenheitConverter(fahrenheit1) + ' degrees Celsius')
