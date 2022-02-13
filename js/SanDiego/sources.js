export default [
  // ENV
  // {
  //   name: 'skyEnv',
  //   type: 'RGBEenv',
  //   path: 'textures/env/driving_school.hdr',
  // },
  {
    name: 'environmentMapTexture',
    type: 'cubeTexture',
    path: [
      'textures/environmentMap/px.jpg',
      'textures/environmentMap/nx.jpg',
      'textures/environmentMap/py.jpg',
      'textures/environmentMap/ny.jpg',
      'textures/environmentMap/pz.jpg',
      'textures/environmentMap/nz.jpg',
    ],
  },
  // {
  //   name: 'grassColorTexture',
  //   type: 'texture',
  //   path: 'textures/dirt/color.jpg',
  // },
  // {
  //   name: 'grassNormalTexture',
  //   type: 'texture',
  //   path: 'textures/dirt/normal.jpg',
  // },
  // {
  //   name: 'foxModel',
  //   type: 'gltfModel',
  //   path: 'models/Fox/glTF/Fox.gltf',
  // },
  // Plane
  {
    name: 'planeModel',
    type: 'gltfModel',
    path: 'models/Plane/Plane.glb',
  },
  // Clouds
  {
    name: 'cloudModel_1',
    type: 'fbxModel',
    path: 'models/Clouds/Cloud_1.fbx',
  },
  {
    name: 'cloudModel_2',
    type: 'fbxModel',
    path: 'models/Clouds/Cloud_2.fbx',
  },
  {
    name: 'cloudModel_3',
    type: 'fbxModel',
    path: 'models/Clouds/Cloud_3.fbx',
  },
  {
    name: 'cloudModel_4',
    type: 'fbxModel',
    path: 'models/Clouds/Cloud_4.fbx',
  },
  // GO Dubai
  {
    name: 'geekOutDubaiModel',
    type: 'gltfModel',
    path: 'models/GODubai/GODubai.glb',
  },
  // GO LA
  {
    name: 'geekOutLAModel',
    type: 'gltfModel',
    path: 'models/GOLA/LA.glb',
  },
  // City
  {
    name: 'builds',
    type: 'gltfModel',
    path: 'models/City/builds.glb',
  },
]
