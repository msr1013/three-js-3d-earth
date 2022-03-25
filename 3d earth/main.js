import * as THREE from 'three'
import vertexShader from './shaders/vertex.glsl'
import  fragmentShader from './shaders/fragment.glsl'


const scene = new THREE.Scene()
const camera = new THREE.
  PerspectiveCamera(
    75,
    innerWidth/innerHeight,
    0.1,
    1000
  )

  const renderer = new THREE.WebGLRenderer({
    antialias:true
  }
  )
  renderer.setSize(innerWidth,innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  document.body.appendChild(renderer.domElement)



  //create a sphere
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(5,50,50),
    new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms:{
        globeTexture:{
          value: new THREE.TextureLoader().load('./img/globe.jpeg')
        }
      }
    })
  )

   scene.add(sphere)

  // create atmosphere
  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(5,50,50),
    new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
    })
  )

  atmosphere.scale.set(1.1,1.1,1.1)

   scene.add(atmosphere)

   camera.position.z = 15

  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
  }
  animate()