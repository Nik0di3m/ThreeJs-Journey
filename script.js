
const sceen = new THREE.Scene()

// Red Cube 

const geometry = new THREE.BoxGeometry(1, 1, 1)

// Mesh materiał siatki do budowy powłoki obiektu

// const material = new THREE.MeshBasicMaterial({ color: '#ff0000' })
// const material = new THREE.MeshBasicMaterial({ color: 'red' })
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

//Mesh siatka do wyświetlania obiektu
const mesh = new THREE.Mesh(geometry, material)

// Dodanie mesh do sceny
sceen.add(mesh)

// Wymiary kamery
const sizes = {
    width: 800,
    height: 600,
}
// Kamera 
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// Oddalenie kamery Z positon

camera.position.z = 3


// Dodanie kamery do sceny
sceen.add(camera)




// Render
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(sceen, camera)