import React from 'react'
import { Canvas , useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { CubeTextureLoader } from 'three';
import '../../styles/Transfer.css';

const Transphoto = () => {
    const {scene} = useThree();
    const loader = new CubeTextureLoader();
    const transtexture = loader.load([
        "./public/background/px.png",
        "./public/background/nx.png",
        "./public/background/py.png",
        "./public/background/ny.png",
        "./public/background/pz.png",
        "./public/background/nz.png",
    ]);
    scene.background = transtexture;
} 

const Transfer = () => {
  return (
    <>
      <div className='hdr'>
            <div className='btn'>
              <button className='button'>3D view</button>
            </div>
            <div className='middle'>
                <Canvas className='rounded'>
                    <OrbitControls />
                    <Transphoto />
                </Canvas>
            </div>
            <div className='bottom'>
              <div className="upload">
                <button className='btn-file'>
                  Add Hdr
                  <input type="file" name='Add Hdr' />
                </button>
              </div>
              <div className="save">
                <button>save</button>
              </div>
            </div>
        </div>
    </>
  )
}

export default Transfer
