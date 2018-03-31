import React from "react";
import * as THREE from "three";
import { colors } from "Styles/main";

class Scene extends React.Component {
    static aspectRatio = window.innerWidth / window.innerHeight;

    constructor(props) {
        super(props);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        
        this.state = { renderer };
    }

    shouldComponentUpdate() {
        return false;
    }

    setCamera() {
        const camera = new THREE.PerspectiveCamera( 75, Scene.aspectRatio, 0.1, 1000 );
        camera.position.set( 25, -25, 100 );
        
        return camera;
    }

    transformSceneWithLight(scene) {
        const ambientLight = new THREE.AmbientLight(0x555555);
        const directionalLight = new THREE.DirectionalLight(0xffffff);

        directionalLight.position.set(1, 1, 1).normalize();
        
        scene.add(ambientLight);
        scene.add(directionalLight);

        return scene;
    }

    componentDidMount() {
        const renderer = this.state.renderer;
        this.threeCanvas.appendChild(renderer.domElement);
        
        const camera = this.setCamera();
        const scene = this.transformSceneWithLight(
            new THREE.Scene()
        );

        const geometry = new THREE.TorusKnotGeometry(25, 5, 200, 20, 2, 3);
        const material = new THREE.MeshPhongMaterial({ color: colors.turquoise, flatShading: true, opacity: 0.5 });
        const torus = new THREE.Mesh( geometry, material );
        scene.add(torus);
        
        const animate = (renderer) => {
            requestAnimationFrame( () => animate(renderer) );

            torus.rotation.x += .015;
            torus.rotation.y += .015;

            !!renderer && renderer.render(scene, camera);
        };

        animate(renderer);
    }

    render() {
        return (
            <div 
                ref={node => this.threeCanvas = node} 
                style = {{ width: '100%', height: '100%' }} 
            />
        )
    }

    componentWillUnmount() {
        this.threeCanvas.removeChild(this.state.renderer.domElement);
    }
};

export default Scene;
