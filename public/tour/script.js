(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "class": "PanoramaAudio",
 "audio": "this.audioresource_D88FACF6_D618_3D28_41E2_1A8A5E3DC9ED",
 "autoplay": true,
 "id": "audio_D97D2413_D608_6CE8_41EA_A9EB533CFA19",
 "data": {
  "label": "MUSICA EPICA (Sin Copyright Gratis)  #7"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 31.94,
  "pitch": 0
 },
 "id": "camera_D93700F2_D7C8_F817_41E2_5EF8ED5A1233",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "to": "left",
 "class": "SlideOutEffect",
 "duration": 400,
 "id": "effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E",
 "easing": "quad_in"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DE0CA779_D507_9773_41E9_174AFEE68631_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_DE0CA779_D507_9773_41E9_174AFEE68631",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF90478F_D507_9790_41C5_D65E03AD097A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_DF90478F_D507_9790_41C5_D65E03AD097A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF983E11_D507_98B3_41D9_683BEF65F096_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_DF983E11_D507_98B3_41D9_683BEF65F096",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF979467_D507_A890_41CC_283B48811F39_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_DF979467_D507_A890_41CC_283B48811F39",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_DF96AB07_D507_F890_41E1_905909CE0370_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
   "media": "this.panorama_DF96AB07_D507_F890_41E1_905909CE0370",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaPlayer",
 "buttonMoveRight": "this.IconButton_CAEC0142_DAD9_4DC7_41D1_F5C5F0DB8E6A",
 "displayPlaybackBar": true,
 "buttonZoomOut": "this.IconButton_6472655A_4740_34AA_414B_F1B1CFA8539C",
 "buttonPause": "this.IconButton_6473F55A_4740_34AA_41B8_5E197E222F9C",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonPlayRight": "this.IconButton_D5D08771_DACB_35C4_41D8_AF90FE183771",
 "viewerArea": "this.MainViewer",
 "buttonPlayLeft": "this.IconButton_6472455A_4740_34AA_4193_FD32C43760D8",
 "buttonZoomIn": "this.IconButton_D52FCDC1_DAC9_34C5_41CE_0B04B53DD8E9",
 "touchControlMode": "drag_rotation",
 "buttonMoveUp": "this.IconButton_6472055A_4740_34AA_41CB_6DC26C61B1C9",
 "buttonMoveDown": "this.IconButton_6473E55A_4740_34AA_41C8_05D576721597",
 "buttonMoveLeft": "this.IconButton_6472355A_4740_34AA_41CD_DC51399BA6EF",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PanoramaAudio",
 "audio": "this.audioresource_DBC2231F_D618_2B17_41BE_D457BB689C10",
 "autoplay": true,
 "id": "audio_D8A5EBDA_D608_3B19_41E4_DBDD26882B29",
 "data": {
  "label": "Naturaleza y Sonidos de Pajaros"
 }
},
{
 "class": "PanoramaAudio",
 "audio": "this.audioresource_DBC2231F_D618_2B17_41BE_D457BB689C10",
 "autoplay": true,
 "id": "audio_D8A7E215_D608_64E8_41DD_F92D8B959D32",
 "data": {
  "label": "Naturaleza y Sonidos de Pajaros"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -147.22,
  "pitch": 0
 },
 "id": "camera_DAE4C159_D7C8_F815_41DD_66E08A245E14",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DF979467_D507_A890_41CC_283B48811F39_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -148.06,
   "backwardYaw": 32.78,
   "distance": 1,
   "panorama": "this.panorama_DE0CA779_D507_9773_41E9_174AFEE68631"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 2.68,
   "backwardYaw": -165.69,
   "distance": 1,
   "panorama": "this.panorama_DF90478F_D507_9790_41C5_D65E03AD097A"
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_D97D2413_D608_6CE8_41EA_A9EB533CFA19"
 ],
 "hfov": 360,
 "label": "02 Fachada",
 "id": "panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_t.jpg",
 "overlays": [
  "this.overlay_C679540E_D502_6890_41D6_615D075E3E40",
  "this.overlay_F451B76A_D505_A891_41D3_B042149836A4"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -23.8,
  "pitch": 0
 },
 "id": "camera_D8F7B115_D7C8_F81D_41D3_D9CBE107A3FB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -165.69,
   "backwardYaw": 2.68,
   "distance": 1,
   "panorama": "this.panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 62.11,
   "backwardYaw": -133.42,
   "distance": 1,
   "panorama": "this.panorama_DF983E11_D507_98B3_41D9_683BEF65F096"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 28.48,
   "backwardYaw": -168.58,
   "distance": 1,
   "panorama": "this.panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771"
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_D8A7E215_D608_64E8_41DD_F92D8B959D32"
 ],
 "hfov": 360,
 "label": "03 Jardin 1",
 "id": "panorama_DF90478F_D507_9790_41C5_D65E03AD097A",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_t.jpg",
 "overlays": [
  "this.overlay_CD9FC815_D5FF_98B0_41D1_C2E4AE2D3D05",
  "this.overlay_DB194B5C_D5DF_004A_41E1_D1F27D7840E6",
  "this.overlay_DB1D625F_D5DF_0045_41C8_00A000356ACA"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.78,
  "pitch": 0
 },
 "id": "camera_DAF9114B_D7C8_F875_41A9_684C0EC99129",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "to": "left",
 "class": "SlideOutEffect",
 "duration": 400,
 "id": "effect_4DD0850A_570D_5AC6_41BA_D356800A651E",
 "easing": "quad_in"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DE0CA779_D507_9773_41E9_174AFEE68631_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 32.78,
   "backwardYaw": -148.06,
   "distance": 1,
   "panorama": "this.panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2"
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_D8E4CF42_D618_1B68_41DC_CD4AE12D4832"
 ],
 "hfov": 360,
 "label": "01 Calle",
 "id": "panorama_DE0CA779_D507_9773_41E9_174AFEE68631",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_t.jpg",
 "overlays": [
  "this.overlay_C6672F53_D57D_98B7_41DC_AE627D277E5D"
 ]
},
{
 "class": "SlideInEffect",
 "duration": 400,
 "id": "effect_4D25D616_570D_66CE_41A8_E15436E28685",
 "easing": "quad_in",
 "from": "left"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -117.89,
  "pitch": 0
 },
 "id": "camera_D92DE100_D7C8_F9F3_41D0_D14AACFB2904",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.31,
  "pitch": 0
 },
 "id": "camera_DAEFE160_D7C8_F833_41DE_EC5245017BDB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaAudio",
 "audio": "this.audioresource_C66209CF_D608_2778_41E0_F116D2962192",
 "autoplay": true,
 "id": "audio_D99AAC19_D608_7D18_41DF_481148C5AC75",
 "data": {
  "label": "Jazz Suave Ambiental Sin Copyright para Videos"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 148.66,
  "pitch": 0
 },
 "id": "camera_D9190107_D7C8_F9FD_41E3_6D95CE321CBD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaAudio",
 "audio": "this.audioresource_DBC2231F_D618_2B17_41BE_D457BB689C10",
 "autoplay": true,
 "id": "audio_D9E0F826_D638_2528_41C8_DD1690157D22",
 "data": {
  "label": "Naturaleza y Sonidos de Pajaros"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -55.51,
  "pitch": 0
 },
 "id": "camera_DAF2C144_D7C8_F873_41E3_21B2A07B8F31",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -68.61,
   "backwardYaw": 119.16,
   "distance": 1,
   "panorama": "this.panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -133.42,
   "backwardYaw": 62.11,
   "distance": 1,
   "panorama": "this.panorama_DF90478F_D507_9790_41C5_D65E03AD097A"
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_D8A5EBDA_D608_3B19_41E4_DBDD26882B29"
 ],
 "hfov": 360,
 "label": "04 Jardin 2",
 "id": "panorama_DF983E11_D507_98B3_41D9_683BEF65F096",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_t.jpg",
 "overlays": [
  "this.overlay_CF7346A2_D502_E991_41E4_E3D2EFFCAF36",
  "this.overlay_DAD8A15F_D5D9_0045_41D7_DFD1B4DCB555",
  "this.overlay_DAF26BA0_D5E7_00FB_41D6_9E06FDB9A3EA"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 52.1,
  "pitch": 0
 },
 "id": "camera_D94DD0EB_D7C8_F835_41E5_500DB8D77EB4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.32,
  "pitch": 0
 },
 "id": "camera_DA976192_D7C8_F816_41E6_70DD356DB2C3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -60.84,
  "pitch": 0
 },
 "id": "camera_D93E30F9_D7C8_F815_41EA_0BBB74D278E5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaAudio",
 "audio": "this.audioresource_C66209CF_D608_2778_41E0_F116D2962192",
 "autoplay": true,
 "id": "audio_C66229CF_D608_2778_41E2_53180D67E06D",
 "data": {
  "label": "Jazz Suave Ambiental Sin Copyright para Videos"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -127.9,
   "backwardYaw": 93.88,
   "distance": 1,
   "panorama": "this.panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 29.52,
   "backwardYaw": 124.49,
   "distance": 1,
   "panorama": "this.panorama_DF96AB07_D507_F890_41E1_905909CE0370"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 121.16,
   "backwardYaw": -10.22,
   "distance": 1,
   "panorama": "this.panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 156.2,
   "backwardYaw": 156.47,
   "distance": 1,
   "panorama": "this.panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF"
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_C64EB775_D608_2B28_41D3_F4328979AC0F"
 ],
 "hfov": 360,
 "label": "07 Comedor",
 "id": "panorama_DF979467_D507_A890_41CC_283B48811F39",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_t.jpg",
 "overlays": [
  "this.overlay_CB58A21C_D502_A8B1_41EA_15ADC3C4905D",
  "this.overlay_CB06A36A_D506_A891_41DF_F0B4C7F4C55C",
  "this.overlay_CA80A946_D507_B891_41D1_DF55B9D8F0E9",
  "this.overlay_DAF075AE_D5E9_00C7_41E6_9A7066DBC8AF"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 11.42,
  "pitch": 0
 },
 "id": "camera_DA8D81A0_D7C8_F832_41D5_8CA605758D77",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -86.12,
  "pitch": 0
 },
 "id": "camera_DB0FF13C_D7C8_F813_41D7_89DABDCFE6BF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -31.34,
   "backwardYaw": -147.94,
   "distance": 1,
   "panorama": "this.panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF"
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_C6F13521_D608_6F28_41E3_2011BED1C19E"
 ],
 "hfov": 360,
 "label": "09 Escalera",
 "id": "panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_t.jpg",
 "overlays": [
  "this.overlay_CA01239B_D502_AFB0_41DA_FC10DCE952F2"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 32.06,
  "pitch": 0
 },
 "id": "camera_DAD64167_D7C8_F83D_41CD_E9A8F6610DD1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -58.84,
  "pitch": 0
 },
 "id": "camera_DACDC175_D7C8_F81D_41E1_D430429E679F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 111.39,
  "pitch": 0
 },
 "id": "camera_DAB6D17B_D7C8_F815_41E4_FE02A54EC460",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DF96AB07_D507_F890_41E1_905909CE0370_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaAudio",
 "audio": "this.audioresource_C66209CF_D608_2778_41E0_F116D2962192",
 "autoplay": true,
 "id": "audio_C64EB775_D608_2B28_41D3_F4328979AC0F",
 "data": {
  "label": "Jazz Suave Ambiental Sin Copyright para Videos"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -10.22,
   "backwardYaw": 121.16,
   "distance": 1,
   "panorama": "this.panorama_DF979467_D507_A890_41CC_283B48811F39"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 119.16,
   "backwardYaw": -68.61,
   "distance": 1,
   "panorama": "this.panorama_DF983E11_D507_98B3_41D9_683BEF65F096"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -44.31,
   "backwardYaw": -96.42,
   "distance": 1,
   "panorama": "this.panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -168.58,
   "backwardYaw": 28.48,
   "distance": 1,
   "panorama": "this.panorama_DF90478F_D507_9790_41C5_D65E03AD097A"
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_D99AAC19_D608_7D18_41DF_481148C5AC75"
 ],
 "hfov": 360,
 "label": "05 Lobby",
 "id": "panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_t.jpg",
 "overlays": [
  "this.overlay_C8D407FA_D507_9771_41DD_28FDBA3A9271",
  "this.overlay_C8C044E6_D505_E991_41A3_747E7E1C0984",
  "this.overlay_DAD3F434_D5E9_07DB_41AF_8488F01C3E82",
  "this.overlay_DACD1EA2_D5EB_00FF_419A_B855487FEB0E"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -151.52,
  "pitch": 0
 },
 "id": "camera_DAAAB18B_D7C8_F8F6_41D1_92B18E45AF57",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "to": "left",
 "class": "SlideOutEffect",
 "duration": 400,
 "id": "effect_49353574_570C_A542_41D0_43B05AC58F9B",
 "easing": "quad_in"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DE0CA779_D507_9773_41E9_174AFEE68631_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_63BE62A5_4740_4D99_41A7_5900AB983916_playlist, 0, 1)",
   "media": "this.panorama_DE0CA779_D507_9773_41E9_174AFEE68631",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_63BE62A5_4740_4D99_41A7_5900AB983916_playlist, 1, 2)",
   "media": "this.panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF90478F_D507_9790_41C5_D65E03AD097A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_63BE62A5_4740_4D99_41A7_5900AB983916_playlist, 2, 3)",
   "media": "this.panorama_DF90478F_D507_9790_41C5_D65E03AD097A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF983E11_D507_98B3_41D9_683BEF65F096_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_63BE62A5_4740_4D99_41A7_5900AB983916_playlist, 3, 4)",
   "media": "this.panorama_DF983E11_D507_98B3_41D9_683BEF65F096",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_63BE62A5_4740_4D99_41A7_5900AB983916_playlist, 4, 5)",
   "media": "this.panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_63BE62A5_4740_4D99_41A7_5900AB983916_playlist, 5, 6)",
   "media": "this.panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF979467_D507_A890_41CC_283B48811F39_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_63BE62A5_4740_4D99_41A7_5900AB983916_playlist, 6, 7)",
   "media": "this.panorama_DF979467_D507_A890_41CC_283B48811F39",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_63BE62A5_4740_4D99_41A7_5900AB983916_playlist, 7, 8)",
   "media": "this.panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_63BE62A5_4740_4D99_41A7_5900AB983916_playlist, 8, 9)",
   "media": "this.panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF96AB07_D507_F890_41E1_905909CE0370_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_63BE62A5_4740_4D99_41A7_5900AB983916_playlist, 9, 0)",
   "media": "this.panorama_DF96AB07_D507_F890_41E1_905909CE0370",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_63BE62A5_4740_4D99_41A7_5900AB983916_playlist"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DF90478F_D507_9790_41C5_D65E03AD097A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaAudio",
 "audio": "this.audioresource_C66209CF_D608_2778_41E0_F116D2962192",
 "autoplay": true,
 "id": "audio_C6F13521_D608_6F28_41E3_2011BED1C19E",
 "data": {
  "label": "Jazz Suave Ambiental Sin Copyright para Videos"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -23.53,
  "pitch": 0
 },
 "id": "camera_DAFC5152_D7C8_F817_41E5_DC74121192E6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -150.48,
  "pitch": 0
 },
 "id": "camera_DAC3416E_D7C8_F80F_41BE_3C946205F69A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 93.88,
   "backwardYaw": -127.9,
   "distance": 1,
   "panorama": "this.panorama_DF979467_D507_A890_41CC_283B48811F39"
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_D98FB0CC_D608_6579_41E9_9A868E5193B3"
 ],
 "hfov": 360,
 "label": "08 Cocina",
 "id": "panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_t.jpg",
 "overlays": [
  "this.overlay_CAD13296_D502_E9B1_41D0_1CE37A3DF88F"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 83.58,
  "pitch": 0
 },
 "id": "camera_DAA14183_D7C8_F8F5_41C0_E450B75AE997",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DF983E11_D507_98B3_41D9_683BEF65F096_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -147.94,
   "backwardYaw": -31.34,
   "distance": 1,
   "panorama": "this.panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -96.42,
   "backwardYaw": -44.31,
   "distance": 1,
   "panorama": "this.panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 156.47,
   "backwardYaw": 156.2,
   "distance": 1,
   "panorama": "this.panorama_DF979467_D507_A890_41CC_283B48811F39"
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_C66229CF_D608_2778_41E2_53180D67E06D"
 ],
 "hfov": 360,
 "label": "06 Sala",
 "id": "panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_t.jpg",
 "overlays": [
  "this.overlay_CB91C504_D50D_A891_41B7_A882549A0732",
  "this.overlay_CBA587E9_D50F_9793_41C7_485A9DF35C6B",
  "this.overlay_CB9D7D7A_D50E_9B70_41E2_40230123CD12"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 46.58,
  "pitch": 0
 },
 "id": "camera_DA81F199_D7C8_F812_41DF_55C728AA621D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "SlideInEffect",
 "duration": 400,
 "id": "effect_4DDFE816_570D_AAC1_41BE_ED754EBAE851",
 "easing": "quad_in",
 "from": "left"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 124.49,
   "backwardYaw": 29.52,
   "distance": 1,
   "panorama": "this.panorama_DF979467_D507_A890_41CC_283B48811F39"
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_D9E0F826_D638_2528_41C8_DD1690157D22"
 ],
 "hfov": 360,
 "label": "10 Patio trasero",
 "id": "panorama_DF96AB07_D507_F890_41E1_905909CE0370",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_t.jpg",
 "overlays": [
  "this.overlay_DA60D886_D5EF_00C7_41C5_1A1B97E45FFE"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 135.69,
  "pitch": 0
 },
 "id": "camera_D909810E_D7C8_F80F_4185_470667B2612F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaAudio",
 "audio": "this.audioresource_C66209CF_D608_2778_41E0_F116D2962192",
 "autoplay": true,
 "id": "audio_D98FB0CC_D608_6579_41E9_9A868E5193B3",
 "data": {
  "label": "Jazz Suave Ambiental Sin Copyright para Videos"
 }
},
{
 "class": "PanoramaAudio",
 "audio": "this.audioresource_D88FACF6_D618_3D28_41E2_1A8A5E3DC9ED",
 "autoplay": true,
 "id": "audio_D8E4CF42_D618_1B68_41DC_CD4AE12D4832",
 "data": {
  "label": "MUSICA EPICA (Sin Copyright Gratis)  #7"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#FFFFFF",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": "12px",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#FFFFFF",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "maxHeight": 821,
 "maxWidth": 1460,
 "id": "Image_536342B5_44C1_CDF9_41CD_308159182021",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "width": "12.383%",
 "borderSize": 0,
 "url": "skin/Image_536342B5_44C1_CDF9_41CD_308159182021.png",
 "minHeight": 1,
 "horizontalAlign": "right",
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": "15.959%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image27904"
 }
},
{
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "children": [
  "this.Container_525BE8A5_44C1_DD9E_41D1_10FE48A78BA5",
  "this.Container_6242BACE_4740_3DAB_41BB_783BE5E876D0"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_5259F8A7_44C1_DD9A_41CC_A5D0A6BA6B92",
 "scrollBarVisible": "rollOver",
 "width": 163.3,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "paddingLeft": 0,
 "data": {
  "name": "Button settings VR"
 },
 "id": "Button_6482BB97_4740_53B9_41B8_962CDF7339CF",
 "fontSize": 12,
 "right": "0.17%",
 "width": 55.9,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#666600",
 "iconURL": "skin/Button_6482BB97_4740_53B9_41B8_962CDF7339CF.png",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "shadowColor": "#000000",
 "bottom": "7.05%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 53.4,
 "backgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "pressedIconURL": "skin/Button_6482BB97_4740_53B9_41B8_962CDF7339CF_pressed.png",
 "shadowSpread": 1,
 "iconBeforeLabel": true,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 1
},
{
 "data": {
  "name": "Container53059"
 },
 "children": [
  "this.IconButton_6472655A_4740_34AA_414B_F1B1CFA8539C",
  "this.IconButton_6472455A_4740_34AA_4193_FD32C43760D8",
  "this.IconButton_6472355A_4740_34AA_41CD_DC51399BA6EF",
  "this.Container_6472255A_4740_34AA_41CB_644173C21D96",
  "this.IconButton_6473D55A_4740_34AB_41C5_F5B0CCD483D9",
  "this.IconButton_6473C55B_4740_34AA_41CB_6A1EB4F00C21",
  "this.IconButton_6473A55B_4740_34AA_41C3_CEE86A6B96BD"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_6473955B_4740_34AA_41BD_B70FDE129416",
 "scrollBarVisible": "rollOver",
 "right": "3.27%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 20,
 "horizontalAlign": "center",
 "width": "84.795%",
 "bottom": "0.02%",
 "contentOpaque": false,
 "minWidth": 20,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "height": "18.667%",
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 4,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "hidden"
},
{
 "cursor": "hand",
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "paddingLeft": 0,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "id": "Button_64824B97_4740_53B9_41C5_0D5189018246",
 "fontSize": 12,
 "right": "0.05%",
 "width": 60,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_64824B97_4740_53B9_41C5_0D5189018246.png",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "shadowColor": "#000000",
 "bottom": "0.98%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "pressedIconHeight": 30,
 "backgroundColor": [
  "#F7931E"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "pressedIconWidth": 30,
 "pressedIconURL": "skin/Button_64824B97_4740_53B9_41C5_0D5189018246_pressed.png",
 "shadowSpread": 1,
 "iconBeforeLabel": true,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 1
},
{
 "data": {
  "name": "--- LEFT PANEL 3"
 },
 "children": [
  "this.Container_64B824FD_4740_D569_41B3_4A7FEB8AD0F2",
  "this.Container_64B864FD_4740_D569_41BC_4862FAE091E3"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_64A624FD_4740_D569_41B9_6DAAC7F6FFED",
 "scrollBarVisible": "rollOver",
 "right": "21%",
 "width": 102.46,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "paddingLeft": 0,
 "data": {
  "name": "Button Settings Mute"
 },
 "id": "Button_DA717B4F_D69E_3C2F_41E1_32390807EB9C",
 "fontSize": 12,
 "right": "0.04%",
 "width": 60,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_DA717B4F_D69E_3C2F_41E1_32390807EB9C.png",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "shadowColor": "#000000",
 "bottom": "12.67%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "pressedIconHeight": 30,
 "backgroundColor": [
  "#F7931E"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "pressedIconWidth": 30,
 "pressedIconURL": "skin/Button_DA717B4F_D69E_3C2F_41E1_32390807EB9C_pressed.png",
 "shadowSpread": 1,
 "iconBeforeLabel": true,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 1
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "borderSize": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0.55,
 "class": "UIComponent",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "UIComponent2109"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "borderSize": 0,
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [],
 "top": 0,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "ZoomImage",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage2110"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton2111"
 },
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "fontStyle": "normal",
 "paddingLeft": 5,
 "paddingRight": 5,
 "fontSize": "1.29vmin",
 "right": 10,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "fontColor": "#FFFFFF",
 "iconColor": "#000000",
 "borderSize": 0,
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "top": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "verticalAlign": "middle",
 "minWidth": 0,
 "iconLineWidth": 5,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "label": "",
 "layout": "horizontal",
 "iconHeight": 20,
 "shadowBlurRadius": 6,
 "paddingTop": 5,
 "pressedIconColor": "#888888",
 "backgroundOpacity": 0.3,
 "class": "CloseButton",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 5,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "visible": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 20
},
{
 "class": "AudioResource",
 "id": "audioresource_D88FACF6_D618_3D28_41E2_1A8A5E3DC9ED",
 "oggUrl": "media/audio_D8E4CF42_D618_1B68_41DC_CD4AE12D4832.ogg"
},
{
 "left": 628,
 "paddingLeft": 0,
 "id": "IconButton_CAEC0142_DAD9_4DC7_41D1_F5C5F0DB8E6A",
 "transparencyActive": false,
 "width": 32,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "iconURL": "skin/Button_7EFF8DAD_7A6C_7A33_41D3_006BA5F40DD5.png",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "top": 57,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_7EFF8DAD_7A6C_7A33_41D3_006BA5F40DD5_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/Button_7EFF8DAD_7A6C_7A33_41D3_006BA5F40DD5_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button27670"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_6472655A_4740_34AA_414B_F1B1CFA8539C",
 "transparencyActive": true,
 "width": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_6472655A_4740_34AA_414B_F1B1CFA8539C.png",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6472655A_4740_34AA_414B_F1B1CFA8539C_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_6472655A_4740_34AA_414B_F1B1CFA8539C_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53060"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_6473F55A_4740_34AA_41B8_5E197E222F9C",
 "transparencyActive": true,
 "width": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_6473F55A_4740_34AA_41B8_5E197E222F9C.png",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "toggle",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_6473F55A_4740_34AA_41B8_5E197E222F9C_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53066"
 }
},
{
 "left": 282,
 "paddingLeft": 0,
 "id": "IconButton_D5D08771_DACB_35C4_41D8_AF90FE183771",
 "transparencyActive": false,
 "width": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "iconURL": "skin/Button_7EBF3FF0_7A6C_F610_4199_D1684E73D760.png",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "top": 53,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_7EBF3FF0_7A6C_F610_4199_D1684E73D760_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/Button_7EBF3FF0_7A6C_F610_4199_D1684E73D760_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button27671"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_6472455A_4740_34AA_4193_FD32C43760D8",
 "transparencyActive": true,
 "width": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_6472455A_4740_34AA_4193_FD32C43760D8.png",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6472455A_4740_34AA_4193_FD32C43760D8_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_6472455A_4740_34AA_4193_FD32C43760D8_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53062"
 }
},
{
 "left": 330,
 "paddingLeft": 0,
 "id": "IconButton_D52FCDC1_DAC9_34C5_41CE_0B04B53DD8E9",
 "transparencyActive": true,
 "width": 32,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "iconURL": "skin/IconButton_0127D384_1263_AA08_41AD_E08F8A97A094.png",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "top": 57,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_0127D384_1263_AA08_41AD_E08F8A97A094_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_0127D384_1263_AA08_41AD_E08F8A97A094_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button31995"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_6472055A_4740_34AA_41CB_6DC26C61B1C9",
 "transparencyActive": true,
 "width": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_6472055A_4740_34AA_41CB_6DC26C61B1C9.png",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6472055A_4740_34AA_41CB_6DC26C61B1C9_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_6472055A_4740_34AA_41CB_6DC26C61B1C9_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53065"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_6473E55A_4740_34AA_41C8_05D576721597",
 "transparencyActive": true,
 "width": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_6473E55A_4740_34AA_41C8_05D576721597.png",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6473E55A_4740_34AA_41C8_05D576721597_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_6473E55A_4740_34AA_41C8_05D576721597_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53067"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_6472355A_4740_34AA_41CD_DC51399BA6EF",
 "transparencyActive": true,
 "width": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_6472355A_4740_34AA_41CD_DC51399BA6EF.png",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6472355A_4740_34AA_41CD_DC51399BA6EF_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_6472355A_4740_34AA_41CD_DC51399BA6EF_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53063"
 }
},
{
 "class": "AudioResource",
 "id": "audioresource_DBC2231F_D618_2B17_41BE_D457BB689C10",
 "oggUrl": "media/audio_D8A7E215_D608_64E8_41DD_F92D8B959D32.ogg"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DE0CA779_D507_9773_41E9_174AFEE68631, this.camera_DAE4C159_D7C8_F815_41DD_66E08A245E14); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.39,
   "image": "this.AnimatedImageResource_C254D8AA_D57D_F991_41E6_B7C2A75C40C0",
   "pitch": -30.83,
   "yaw": -148.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C679540E_D502_6890_41D6_615D075E3E40",
 "maps": [
  {
   "hfov": 9.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -30.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF90478F_D507_9790_41C5_D65E03AD097A, this.camera_DAEFE160_D7C8_F833_41DE_EC5245017BDB); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.15,
   "image": "this.AnimatedImageResource_DB9A4D09_D608_1CFB_41DB_A997AABD7730",
   "pitch": -9.06,
   "yaw": 2.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F451B76A_D505_A891_41D3_B042149836A4",
 "maps": [
  {
   "hfov": 6.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF983E11_D507_98B3_41D9_683BEF65F096, this.camera_DA81F199_D7C8_F812_41DF_55C728AA621D); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.81,
   "image": "this.AnimatedImageResource_C9861C66_D5FE_7891_41B8_FCD8247729FC",
   "pitch": -19.43,
   "yaw": 62.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CD9FC815_D5FF_98B0_41D1_C2E4AE2D3D05",
 "maps": [
  {
   "hfov": 9.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -19.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771, this.camera_DA8D81A0_D7C8_F832_41D5_8CA605758D77); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.64,
   "image": "this.AnimatedImageResource_DB9BFD09_D608_1CFB_41E8_3293DA0E3F30",
   "pitch": -13.19,
   "yaw": 28.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DB194B5C_D5DF_004A_41E1_D1F27D7840E6",
 "maps": [
  {
   "hfov": 10.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -13.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2, this.camera_DA976192_D7C8_F816_41E6_70DD356DB2C3); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.58,
   "image": "this.AnimatedImageResource_DB9B3D09_D608_1CFB_41E3_1B8F94A6641A",
   "pitch": -8.87,
   "yaw": -165.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DB1D625F_D5DF_0045_41C8_00A000356ACA",
 "maps": [
  {
   "hfov": 11.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2, this.camera_D93700F2_D7C8_F817_41E2_5EF8ED5A1233); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.59,
   "image": "this.AnimatedImageResource_C03182DB_D506_E9B0_41E9_4B49E4912D6F",
   "pitch": -16.19,
   "yaw": 32.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C6672F53_D57D_98B7_41DC_AE627D277E5D",
 "maps": [
  {
   "hfov": 8.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -16.19
  }
 ]
},
{
 "class": "AudioResource",
 "id": "audioresource_C66209CF_D608_2778_41E0_F116D2962192",
 "oggUrl": "media/audio_D99AAC19_D608_7D18_41DF_481148C5AC75.ogg"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF90478F_D507_9790_41C5_D65E03AD097A, this.camera_D92DE100_D7C8_F9F3_41D0_D14AACFB2904); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.43,
   "image": "this.AnimatedImageResource_F6A6FD05_D50D_9893_41A5_51D793C9067D",
   "pitch": -21.85,
   "yaw": -133.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CF7346A2_D502_E991_41E4_E3D2EFFCAF36",
 "maps": [
  {
   "hfov": 8.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -133.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -21.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771, this.camera_D93E30F9_D7C8_F815_41EA_0BBB74D278E5); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.29,
   "image": "this.AnimatedImageResource_DB98AD09_D608_1CFB_41DC_9A2F3BFB1A06",
   "pitch": -14.62,
   "yaw": -68.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DAD8A15F_D5D9_0045_41D7_DFD1B4DCB555",
 "maps": [
  {
   "hfov": 9.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -14.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.92,
   "image": "this.AnimatedImageResource_DB980D09_D608_1CFB_41E0_CA68D5D75145",
   "pitch": -6.7,
   "yaw": -154.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DAF26BA0_D5E7_00FB_41D6_9E06FDB9A3EA",
 "maps": [
  {
   "hfov": 6.92,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF, this.camera_DAFC5152_D7C8_F817_41E5_DC74121192E6); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.54,
   "image": "this.AnimatedImageResource_F61657F1_D51D_9773_41E6_6F2AF786BC85",
   "pitch": -13.38,
   "yaw": 156.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CB58A21C_D502_A8B1_41EA_15ADC3C4905D",
 "maps": [
  {
   "hfov": 7.54,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -13.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771, this.camera_DAF9114B_D7C8_F875_41A9_684C0EC99129); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.51,
   "image": "this.AnimatedImageResource_F61197F1_D51D_9773_41D1_450E5BECF60E",
   "pitch": -14.19,
   "yaw": 121.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CB06A36A_D506_A891_41DF_F0B4C7F4C55C",
 "maps": [
  {
   "hfov": 7.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 121.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -14.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46, this.camera_DB0FF13C_D7C8_F813_41D7_89DABDCFE6BF); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.56,
   "image": "this.AnimatedImageResource_F611C7F1_D51D_9773_41C6_9A0358204149",
   "pitch": -12.57,
   "yaw": -127.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA80A946_D507_B891_41D1_DF55B9D8F0E9",
 "maps": [
  {
   "hfov": 15.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -12.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF96AB07_D507_F890_41E1_905909CE0370, this.camera_DAF2C144_D7C8_F873_41E3_21B2A07B8F31); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.45,
   "image": "this.AnimatedImageResource_DB9FED0A_D608_1CF9_41DF_17BC4955FB1E",
   "pitch": -12.27,
   "yaw": 29.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DAF075AE_D5E9_00C7_41E6_9A7066DBC8AF",
 "maps": [
  {
   "hfov": 11.45,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -12.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF, this.camera_DAD64167_D7C8_F83D_41CD_E9A8F6610DD1); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.49,
   "image": "this.AnimatedImageResource_F74D98BD_D502_79F3_41E9_FB01FE5E4FFA",
   "pitch": -16.01,
   "yaw": -31.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA01239B_D502_AFB0_41DA_FC10DCE952F2",
 "maps": [
  {
   "hfov": 9.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -31.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -16.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF, this.camera_DAA14183_D7C8_F8F5_41C0_E450B75AE997); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.91,
   "image": "this.AnimatedImageResource_F6A65D05_D50D_9893_41E8_45B56F36F252",
   "pitch": -24.99,
   "yaw": -44.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C8D407FA_D507_9771_41DD_28FDBA3A9271",
 "maps": [
  {
   "hfov": 9.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -24.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF979467_D507_A890_41CC_283B48811F39, this.camera_DACDC175_D7C8_F81D_41E1_D430429E679F); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.45,
   "image": "this.AnimatedImageResource_F6A61D05_D50D_9893_41E4_9569CA23F014",
   "pitch": -16.44,
   "yaw": -10.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C8C044E6_D505_E991_41A3_747E7E1C0984",
 "maps": [
  {
   "hfov": 8.45,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -16.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF90478F_D507_9790_41C5_D65E03AD097A, this.camera_DAAAB18B_D7C8_F8F6_41D1_92B18E45AF57); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.28,
   "image": "this.AnimatedImageResource_DB99ED09_D608_1CFB_41CC_92489C7FD3D1",
   "pitch": -26.85,
   "yaw": -168.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DAD3F434_D5E9_07DB_41AF_8488F01C3E82",
 "maps": [
  {
   "hfov": 9.28,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -26.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF983E11_D507_98B3_41D9_683BEF65F096, this.camera_DAB6D17B_D7C8_F815_41E4_FE02A54EC460); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.88,
   "image": "this.AnimatedImageResource_DB992D0A_D608_1CF9_41E0_BBEC35BD4F39",
   "pitch": -38.69,
   "yaw": 119.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DACD1EA2_D5EB_00FF_419A_B855487FEB0E",
 "maps": [
  {
   "hfov": 6.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -38.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF979467_D507_A890_41CC_283B48811F39, this.camera_D94DD0EB_D7C8_F835_41E5_500DB8D77EB4); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.7,
   "image": "this.AnimatedImageResource_F61087F1_D51D_9773_41C7_87C668C7C57A",
   "pitch": -16.06,
   "yaw": 93.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CAD13296_D502_E9B1_41D0_1CE37A3DF88F",
 "maps": [
  {
   "hfov": 7.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 93.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -16.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF979467_D507_A890_41CC_283B48811F39, this.camera_D8F7B115_D7C8_F81D_41D3_D9CBE107A3FB); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.17,
   "image": "this.AnimatedImageResource_F6A50D06_D50D_9891_41E0_0C4712AC060B",
   "pitch": -17.22,
   "yaw": 156.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CB91C504_D50D_A891_41B7_A882549A0732",
 "maps": [
  {
   "hfov": 9.17,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -17.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771, this.camera_D909810E_D7C8_F80F_4185_470667B2612F); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.85,
   "image": "this.AnimatedImageResource_F6A4DD06_D50D_9891_41E6_0963D2A6DB38",
   "pitch": -41.05,
   "yaw": -96.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CBA587E9_D50F_9793_41C7_485A9DF35C6B",
 "maps": [
  {
   "hfov": 6.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -41.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288, this.camera_D9190107_D7C8_F9FD_41E3_6D95CE321CBD); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.96,
   "image": "this.AnimatedImageResource_F6A46D06_D50D_9891_41DA_64A0DA644436",
   "pitch": 0.94,
   "yaw": -147.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CB9D7D7A_D50E_9B70_41E2_40230123CD12",
 "maps": [
  {
   "hfov": 6.96,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -147.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": 0.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF979467_D507_A890_41CC_283B48811F39, this.camera_DAC3416E_D7C8_F80F_41BE_3C946205F69A); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.26,
   "image": "this.AnimatedImageResource_DB9CED0A_D608_1CF9_41EA_C3B63132A2F5",
   "pitch": -12.85,
   "yaw": 124.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DA60D886_D5EF_00C7_41C5_1A1B97E45FFE",
 "maps": [
  {
   "hfov": 14.26,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 124.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -12.85
  }
 ]
},
{
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_525BF8A5_44C1_DD9E_41C3_A7FDFE927B6C",
  "this.IconButton_525A08A6_44C1_DD9A_4183_3A76CC1B4656"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_525BE8A5_44C1_DD9E_41D1_10FE48A78BA5",
 "scrollBarVisible": "rollOver",
 "width": 66,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "--- LEFT PANEL 3"
 },
 "children": [
  "this.Container_62409ACD_4740_3DA9_41C5_8DAA1BE8AE95",
  "this.Container_62406ACD_4740_3DA9_41B8_D015BFFB0032"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_6242BACE_4740_3DAB_41BB_783BE5E876D0",
 "scrollBarVisible": "rollOver",
 "right": "0.18%",
 "width": 162.45,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "Container53064"
 },
 "children": [
  "this.IconButton_6472055A_4740_34AA_41CB_6DC26C61B1C9",
  "this.IconButton_6473F55A_4740_34AA_41B8_5E197E222F9C",
  "this.IconButton_6473E55A_4740_34AA_41C8_05D576721597"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_6472255A_4740_34AA_41CB_644173C21D96",
 "scrollBarVisible": "rollOver",
 "width": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 20,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "verticalAlign": "middle",
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 4,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "hidden"
},
{
 "paddingLeft": 0,
 "id": "IconButton_6473D55A_4740_34AB_41C5_F5B0CCD483D9",
 "transparencyActive": true,
 "width": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_6473D55A_4740_34AB_41C5_F5B0CCD483D9.png",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6473D55A_4740_34AB_41C5_F5B0CCD483D9_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_6473D55A_4740_34AB_41C5_F5B0CCD483D9_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53068"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_6473C55B_4740_34AA_41CB_6A1EB4F00C21",
 "transparencyActive": true,
 "width": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_6473C55B_4740_34AA_41CB_6A1EB4F00C21.png",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6473C55B_4740_34AA_41CB_6A1EB4F00C21_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_6473C55B_4740_34AA_41CB_6A1EB4F00C21_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53069"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_6473A55B_4740_34AA_41C3_CEE86A6B96BD",
 "transparencyActive": true,
 "width": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_6473A55B_4740_34AA_41C3_CEE86A6B96BD.png",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6473A55B_4740_34AA_41C3_CEE86A6B96BD_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_6473A55B_4740_34AA_41C3_CEE86A6B96BD_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53071"
 }
},
{
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_64B834FD_4740_D569_41BD_1763C742A189",
  "this.IconButton_64B804FD_4740_D569_41D1_857DAE4BB585"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_64B824FD_4740_D569_41B3_4A7FEB8AD0F2",
 "scrollBarVisible": "rollOver",
 "width": 66,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Container_6295ED8B_4740_77A9_41C7_D356DCBBEF59"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_64B864FD_4740_D569_41BC_4862FAE091E3",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "14.05%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_C254D8AA_D57D_F991_41E6_B7C2A75C40C0",
 "levels": [
  {
   "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_DB9A4D09_D608_1CFB_41DB_A997AABD7730",
 "levels": [
  {
   "url": "media/panorama_DF9B912B_D507_A897_41CF_7DB432BAE9E2_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_C9861C66_D5FE_7891_41B8_FCD8247729FC",
 "levels": [
  {
   "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_DB9BFD09_D608_1CFB_41E8_3293DA0E3F30",
 "levels": [
  {
   "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_DB9B3D09_D608_1CFB_41E3_1B8F94A6641A",
 "levels": [
  {
   "url": "media/panorama_DF90478F_D507_9790_41C5_D65E03AD097A_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_C03182DB_D506_E9B0_41E9_4B49E4912D6F",
 "levels": [
  {
   "url": "media/panorama_DE0CA779_D507_9773_41E9_174AFEE68631_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_F6A6FD05_D50D_9893_41A5_51D793C9067D",
 "levels": [
  {
   "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_DB98AD09_D608_1CFB_41DC_9A2F3BFB1A06",
 "levels": [
  {
   "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_DB980D09_D608_1CFB_41E0_CA68D5D75145",
 "levels": [
  {
   "url": "media/panorama_DF983E11_D507_98B3_41D9_683BEF65F096_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_F61657F1_D51D_9773_41E6_6F2AF786BC85",
 "levels": [
  {
   "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_F61197F1_D51D_9773_41D1_450E5BECF60E",
 "levels": [
  {
   "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_F611C7F1_D51D_9773_41C6_9A0358204149",
 "levels": [
  {
   "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_DB9FED0A_D608_1CF9_41DF_17BC4955FB1E",
 "levels": [
  {
   "url": "media/panorama_DF979467_D507_A890_41CC_283B48811F39_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_F74D98BD_D502_79F3_41E9_FB01FE5E4FFA",
 "levels": [
  {
   "url": "media/panorama_DF94BAC3_D507_B997_41BC_6502C3A6A288_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_F6A65D05_D50D_9893_41E8_45B56F36F252",
 "levels": [
  {
   "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_F6A61D05_D50D_9893_41E4_9569CA23F014",
 "levels": [
  {
   "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_DB99ED09_D608_1CFB_41CC_92489C7FD3D1",
 "levels": [
  {
   "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_DB992D0A_D608_1CF9_41E0_BBEC35BD4F39",
 "levels": [
  {
   "url": "media/panorama_DF9CC4A5_D507_E993_41E0_B8E14A37E771_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_F61087F1_D51D_9773_41C7_87C668C7C57A",
 "levels": [
  {
   "url": "media/panorama_DF97BDFB_D507_9B77_41D0_E756C525DE46_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_F6A50D06_D50D_9891_41E0_0C4712AC060B",
 "levels": [
  {
   "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_F6A4DD06_D50D_9891_41E6_0963D2A6DB38",
 "levels": [
  {
   "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_F6A46D06_D50D_9891_41DA_64A0DA644436",
 "levels": [
  {
   "url": "media/panorama_DF98C16B_D507_E897_41B1_8F9E81D8F7CF_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_DB9CED0A_D608_1CF9_41EA_C3B63132A2F5",
 "levels": [
  {
   "url": "media/panorama_DF96AB07_D507_F890_41E1_905909CE0370_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "id": "Container_525BF8A5_44C1_DD9E_41C3_A7FDFE927B6C",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 36,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.4,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_525A08A6_44C1_DD9A_4183_3A76CC1B4656",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "width": 50,
 "borderSize": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_525A08A6_44C1_DD9A_4183_3A76CC1B4656.png",
 "horizontalAlign": "center",
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_525BE8A5_44C1_DD9E_41D1_10FE48A78BA5, false, 0, this.effect_49353574_570C_A542_41D0_43B05AC58F9B, 'hideEffect', false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_525A08A6_44C1_DD9A_4183_3A76CC1B4656_rollover.png",
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_62408ACD_4740_3DA9_41CA_81B4F934E58F",
  "this.IconButton_62407ACD_4740_3DA9_41C2_7021B50252C9"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_62409ACD_4740_3DA9_41C5_8DAA1BE8AE95",
 "scrollBarVisible": "rollOver",
 "width": 66,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.ThumbnailList_63BE62A5_4740_4D99_41A7_5900AB983916",
  "this.IconButton_6242CACE_4740_3DAB_41D1_1C1CFB0EE470"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_62406ACD_4740_3DA9_41B8_D015BFFB0032",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "id": "Container_64B834FD_4740_D569_41BD_1763C742A189",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 36,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.4,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_64B804FD_4740_D569_41D1_857DAE4BB585",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_64B804FD_4740_D569_41D1_857DAE4BB585.png",
 "horizontalAlign": "center",
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_64B864FD_4740_D569_41BC_4862FAE091E3, true, 0, this.effect_4D25D616_570D_66CE_41A8_E15436E28685, 'showEffect', false); this.setComponentVisibility(this.Container_64B824FD_4740_D569_41B3_4A7FEB8AD0F2, false, 0, this.effect_4DD0850A_570D_5AC6_41BA_D356800A651E, 'hideEffect', false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_64B804FD_4740_D569_41D1_857DAE4BB585_rollover.png",
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "data": {
  "name": "--- LEFT PANEL 3"
 },
 "children": [
  "this.Container_629BED8B_4740_77A9_41CD_AD4074C4E5EB",
  "this.Container_629BBD8B_4740_77A9_41D0_185974EB8945"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_6295ED8B_4740_77A9_41C7_D356DCBBEF59",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": 67.95,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "id": "Container_62408ACD_4740_3DA9_41CA_81B4F934E58F",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 36,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.4,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_62407ACD_4740_3DA9_41C2_7021B50252C9",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_62407ACD_4740_3DA9_41C2_7021B50252C9.png",
 "horizontalAlign": "center",
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_62406ACD_4740_3DA9_41B8_D015BFFB0032, true, 0, this.effect_4D25D616_570D_66CE_41A8_E15436E28685, 'showEffect', false); this.setComponentVisibility(this.Container_62409ACD_4740_3DA9_41C5_8DAA1BE8AE95, false, 0, this.effect_4DD0850A_570D_5AC6_41BA_D356800A651E, 'hideEffect', false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_62407ACD_4740_3DA9_41C2_7021B50252C9_rollover.png",
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "itemThumbnailShadowColor": "#000000",
 "horizontalAlign": "left",
 "left": "0%",
 "paddingLeft": 20,
 "scrollBarColor": "#FFFFFF",
 "id": "ThumbnailList_63BE62A5_4740_4D99_41A7_5900AB983916",
 "itemLabelFontStyle": "normal",
 "scrollBarVisible": "rollOver",
 "width": 162,
 "itemLabelHorizontalAlign": "center",
 "itemThumbnailOpacity": 1,
 "scrollBarOpacity": 0.5,
 "itemLabelFontFamily": "Arial",
 "itemMode": "normal",
 "minHeight": 20,
 "itemThumbnailShadowOpacity": 0.27,
 "verticalAlign": "top",
 "minWidth": 20,
 "itemPaddingRight": 3,
 "itemBorderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingLeft": 3,
 "itemHorizontalAlign": "center",
 "height": "99.968%",
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#FFCC00",
 "itemLabelPosition": "bottom",
 "itemThumbnailShadowSpread": 1,
 "backgroundOpacity": 0.33,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemThumbnailShadowVerticalLength": 3,
 "class": "ThumbnailList",
 "shadow": false,
 "itemThumbnailBorderRadius": 5,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "bold",
 "paddingRight": 20,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "playList": "this.ThumbnailList_63BE62A5_4740_4D99_41A7_5900AB983916_playlist",
 "itemThumbnailShadowBlurRadius": 8,
 "bottom": "-0.03%",
 "itemLabelFontSize": 14,
 "itemVerticalAlign": "middle",
 "scrollBarMargin": 2,
 "itemLabelFontColor": "#FFFFFF",
 "itemThumbnailScaleMode": "fit_outside",
 "layout": "vertical",
 "itemThumbnailHeight": 75,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "gap": 13,
 "paddingBottom": 10,
 "itemLabelGap": 8,
 "itemThumbnailShadow": true,
 "itemThumbnailWidth": 75,
 "itemPaddingBottom": 3,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "ThumbnailList35762"
 },
 "scrollBarWidth": 10
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_6242CACE_4740_3DAB_41D1_1C1CFB0EE470",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "right": 5.8,
 "width": 42,
 "borderSize": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_6242CACE_4740_3DAB_41D1_1C1CFB0EE470.png",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 42,
 "top": "45.69%",
 "click": "this.setComponentVisibility(this.Container_62406ACD_4740_3DA9_41B8_D015BFFB0032, false, 0, this.effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E, 'hideEffect', false); this.setComponentVisibility(this.Container_62409ACD_4740_3DA9_41C5_8DAA1BE8AE95, true, 0, this.effect_4DDFE816_570D_AAC1_41BE_ED754EBAE851, 'showEffect', false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6242CACE_4740_3DAB_41D1_1C1CFB0EE470_rollover.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_629B9D8B_4740_77A9_41B3_6C9F365A3A0D",
  "this.IconButton_629B8D8B_4740_77A9_41C1_322EE61062A7"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_629BED8B_4740_77A9_41CD_AD4074C4E5EB",
 "scrollBarVisible": "rollOver",
 "width": 66,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "- EXPANDED"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_629BBD8B_4740_77A9_41D0_185974EB8945",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "26.383%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "id": "Container_629B9D8B_4740_77A9_41B3_6C9F365A3A0D",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 36,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.4,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_629B8D8B_4740_77A9_41C1_322EE61062A7",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_629B8D8B_4740_77A9_41C1_322EE61062A7.png",
 "horizontalAlign": "center",
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_629BBD8B_4740_77A9_41D0_185974EB8945, true, 0, this.effect_4D25D616_570D_66CE_41A8_E15436E28685, 'showEffect', false); this.setComponentVisibility(this.Container_629BED8B_4740_77A9_41CD_AD4074C4E5EB, false, 0, this.effect_4DD0850A_570D_5AC6_41BA_D356800A651E, 'hideEffect', false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_629B8D8B_4740_77A9_41C1_322EE61062A7_rollover.png",
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 }
}],
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_63BE62A5_4740_4D99_41A7_5900AB983916_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_6482BB97_4740_53B9_41B8_962CDF7339CF,this.Button_64824B97_4740_53B9_41C5_0D5189018246].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player3875"
 },
 "children": [
  "this.MainViewer",
  "this.Image_536342B5_44C1_CDF9_41CD_308159182021",
  "this.Container_5259F8A7_44C1_DD9A_41CC_A5D0A6BA6B92",
  "this.Button_6482BB97_4740_53B9_41B8_962CDF7339CF",
  "this.Container_6473955B_4740_34AA_41BD_B70FDE129416",
  "this.Button_64824B97_4740_53B9_41C5_0D5189018246",
  "this.Container_64A624FD_4740_D569_41B9_6DAAC7F6FFED",
  "this.Button_DA717B4F_D69E_3C2F_41E1_32390807EB9C",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "borderSize": 0,
 "buttonToggleFullscreen": [
  "this.Button_6482BB97_4740_53B9_41B8_962CDF7339CF",
  "this.Button_64824B97_4740_53B9_41C5_0D5189018246"
 ],
 "scripts": {
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){  delete window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "buttonToggleMute": "this.Button_DA717B4F_D69E_3C2F_41E1_32390807EB9C",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
