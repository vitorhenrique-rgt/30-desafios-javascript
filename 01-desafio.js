//CALCULADORA DE MEDIA

function average(grades) {
	const arrayGrades = grades.split(","); // .split() - Divide a string em um array, separando por vírgula
	const sumGrades = arrayGrades.reduce((acc, cur) => { // .reduce() - Soma todos os números do array
		acc + Number(cur)
	, 0}) // Number() - Converte o valor para numero
	const average = Math.floor(sumGrades / arrayGrades.length); // Math.flor() - Arredonda para baixo
	return average; 
}

console.log(average("3,5,8"))