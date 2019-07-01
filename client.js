// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const mySurface = new Surface(4680, 600, Surface.SurfaceShape.Cylinder)

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('travelVR', { /* initial props */ }),
	mySurface
  );

// const myFlatSurface = new Surface(600, 400, Surface.SurfaceShape.Flat);
// myFlatSurface.setAngle(Math.PI/4, 0);
//     // Render your app content to the custom flat surface
// 	r360.renderToSurface(
// 		r360.createRoot('Flag', {
// 			image: 'italy.png'
// 		}),
// 		myFlatSurface
// 	  );

// const myNewLocation = new Location([3, 0, -1]);

// 	r360.renderToLocation(
// 		r360.createRoot('Earth'),
// 		myNewLocation
// 	);
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
