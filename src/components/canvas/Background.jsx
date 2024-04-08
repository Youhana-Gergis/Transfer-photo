import React from 'react';
import { Canvas , useThree } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';

const Cubetexture = () => {
    const { scene } = useThree();
    const Loader = new CubeTextureLoader();

    const envMap = Loader.load([
        "./public/mountain/px.png",
        "./public/mountain/nx.png",
        "./public/mountain/py.png",
        "./public/mountain/ny.png",
        "./public/mountain/pz.png",
        "./public/mountain/nz.png",
    ]);
    scene.background = envMap;
}

const Background = () => {
  return (
    <div>
      <Canvas style={{height:"100vh", cursor:"move"}}>
        <OrbitControls />
        <Cubetexture />
      </Canvas>
    </div>
  )
}

export default Background
