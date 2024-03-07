// bangun[0] adalah bangun datar
// bangun[1] adalah bangun ruang

export default [

    // ------------------------------------
    // Bangun Datar

    [
        {
          id: 1,
          source: require("./assets/triangle.png"),
          name: "Segitiga",
        },
        {
          id: 2,
          source: require("./assets/circle.png"),
          name: "Lingkaran",
        },
        {
          id: 3,
          source: require("./assets/rectangle.png"),
          name: "Persegi Panjang",
        },
        {
          id: 4,
          source: require("./assets/rhombus.png"),
          name: "Jajar Genjang",
        },
        {
          id: 5,
          source: require("./assets/square.png"),
          name: "Persegi",
        },
        {
          id: 6,
          source: require("./assets/trapesium.png"),
          name: "Trapesium",
        },
    ],

    
    // ------------------------------------
    // Bangun Ruang

    [
      {
        id: 1,
        source: require("./assets/cube.png"),
        name: "Kubus",
      },
      {
        id: 2,
        source: require("./assets/cuboid.png"),
        name: "Balok",
      },
      {
        id: 3,
        source: require("./assets/Ball.png"),
        name: "Bola",
      },
      {
        id: 4,
        source: require("./assets/Pyramid.png"),
        name: "Piramida",
      },
      {
        id: 5,
        source: require("./assets/Tube.png"),
        name: "Tabung",
      }
    ]
];