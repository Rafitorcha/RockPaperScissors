const template = document.querySelector('.armas')
const formulario = document.querySelector('.formulario')
const pintar = document.getElementById('templar')
const fragment = document.createDocumentFragment()
let parra = document.querySelector('.uno')
let win = 0
let loose = 0
const regExpLiteral = /^\d+$/gi;

function maquina(a,b){
	return Math.floor(Math.random() * (a - b + 1) + b)}

	const validar = () => {

				document.addEventListener('click', (e) => {
					const sombraRoca = document.querySelector('.roc')
				const sombraTijera = document.querySelector('.scs')
			const sombraPapel = document.querySelector('.pa')
		if(e.target.matches('#templar .roc')){
			valor = 1
		sombraRoca.classList.add('sombra1')
		sombraPapel.classList.remove('sombra1')
		sombraTijera.classList.remove('sombra1')
			}

		if(e.target.matches('#templar .pa')){
			valor = 2
			sombraRoca.classList.remove('sombra1')
		sombraPapel.classList.add('sombra1')
		sombraTijera.classList.remove('sombra1')
			}

		if(e.target.matches('#templar .scs')){
			valor = 3
			sombraRoca.classList.remove('sombra1')
		sombraPapel.classList.remove('sombra1')
		sombraTijera.classList.add('sombra1')
			}
			mostrar()
		})
	}
validar()


const change = () => {

	formulario.addEventListener('submit', (e) => {
			e.preventDefault()

			let llamar = document.getElementById('num')
					
			if(regExpLiteral.test(llamar.value)) {
					llamar.classList.add('is-valid')
				}

		if (llamar.value == 2){
			document.querySelector('.roc').src="handR.png"
				document.querySelector('.pa').src="handP.png"
					document.querySelector('.scs').src="handS.png"
													} else {
					document.querySelector('.roc').src="rock.png"
				document.querySelector('.pa').src="paper.png"
			document.querySelector('.scs').src="scissor.png"
			}
		})}
change()

let msg = {
	eql: 'de nuevo',
	gdr: 'ganador',
	lss: 'perdedor',}

	const mostrar = () => {
	cpu = maquina(3,1)
		if (valor === cpu){
		parra.textContent = msg.eql
			} else if(valor === 1 && cpu === 3){
			parra.textContent = msg.gdr
				} else if(valor === 2 && cpu === 1){
				parra.textContent = msg.gdr
					} else if(valor === 3 && cpu === 2){
						parra.textContent = msg.gdr
							} else {
								parra.textContent = msg.lss
									}
								operatio()
							} 
						const operatio = () => {
					if(parra.textContent == msg.gdr){
				win = win + 1
			} else if (parra.textContent == msg.lss){
		loose = loose + 1
	}
	puntos()}

let puntos = () => {
	let player = document.getElementById('p1')
		let computador = document.getElementById('c1')
						player.textContent = win
				computador.textContent = loose}

const aparece = () => {
	const clone = template.content.cloneNode(true)
fragment.appendChild(clone)
pintar.appendChild(fragment)
}
aparece()
