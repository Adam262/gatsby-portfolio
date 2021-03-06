import React from "react";
import * as THREE from "three";
import { colors, breakPoints } from "Styles/main";
import { parsePx } from "Root/utils";

class Scene extends React.Component {
    constructor(props) {
        super(props);

        this.state = { renderer: null };
    }

    shouldComponentUpdate() {
        return false;
    }

    setCamera() {
        const camera = new THREE.PerspectiveCamera( 75, (window.innerWidth / window.innerHeight), 0.1, 1000 );

        if (window.innerWidth > parsePx(breakPoints.tablet)) {
            camera.position.set( 25, -25, 100 );
        } else {
            camera.position.set( 25, -75, 200 );
        }

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
        const renderer = new THREE.WebGLRenderer();

        if (window.innerWidth > parsePx(breakPoints.tablet)) {
            renderer.setSize( window.innerWidth - 350, window.innerHeight );
        } else {
            renderer.setSize( window.innerWidth, window.innerHeight );
        }

        this.setState({ renderer });
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
                style = {{ 
                    width: '100%', 
                    height: '100%', 
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'center',
                    display: 'flex' 
                }} 
            />
        )
    }

    componentWillUnmount() {
        this.threeCanvas.removeChild(this.state.renderer.domElement);
    }
};

export default Scene;
