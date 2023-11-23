// Menu Data Side Bar
export const menuSidebar = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

// Top Deals Users Data
export const topDealUsers = [
  {
    id: 1,
    img: "https://preview.redd.it/l7h95bch6yy81.jpg?width=640&crop=smart&auto=webp&s=7a352c7ff91177164e86ad38a8df4b090f238bfe",
    username: "Lee Jihoon",
    email: "Jihoon@gmail.com",
    amount: "4.668",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/736x/37/f6/ae/37f6aebb8b1836390f870e867981db17.jpg",
    username: "Daniel Park",
    email: "daniel@gmail.com",
    amount: "1.456",
  },
  {
    id: 3,
    img: "https://static.wikia.nocookie.net/dd924a19-2400-4ef3-a565-72242780f39d/scale-to-width/755",
    username: "Eli Jang",
    email: "eliJang@gmail.com",
    amount: "3.578",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/736x/ef/84/12/ef8412826d16ae1fd7ae8670275c1131.jpg",
    username: "Mira Kim",
    email: "kimira@gmail.com",
    amount: "5.121",
  },
  {
    id: 5,
    img: "https://yt3.googleusercontent.com/ytc/APkrFKZYkX7YxUBB-AGbJ3DNOMejpbEXJc_rUbP9PcWI=s900-c-k-c0x00ffffff-no-rj",
    username: "Zack Lee",
    email: "ZckLee@gmail.com",
    amount: "1.234",
  },
  {
    id: 6,
    img: "https://i.pinimg.com/736x/71/24/8a/71248ac0aed6955fb96b3fcd266e0e05.jpg",
    username: "Mary Kim",
    email: "myKim@gmail.com",
    amount: "3.291",
  },
  {
    id: 7,
    img: "https://pm1.aminoapps.com/6676/9d45d5ce03da9c2b1aa0dbc388353fc0688f0364_hq.jpg",
    username: "Crystal Choi",
    email: "crystal@gmail.com",
    amount: "1.560",
  },
];

// Total Visit Data / ChartBox Data
export const chartBoxUser = {
  color: "#83A2FF",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "21.891",
  dataKey: "users",
  percentage: 37,
  chartData: [
    { name: "Sun", users: 100 },
    { name: "Mon", users: 200 },
    { name: "Tue", users: 850 },
    { name: "Wed", users: 400 },
    { name: "Thu", users: 600 },
    { name: "Fri", users: 200 },
    { name: "Sat", users: 350 },
  ],
};

export const chartBoxProduct = {
  color: "#39A7FF",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "210",
  dataKey: "products",
  percentage: 70,
  chartData: [
    { name: "Sun", products: 250 },
    { name: "Mon", products: 470 },
    { name: "Tue", products: 190 },
    { name: "Wed", products: 330 },
    { name: "Thu", products: 490 },
    { name: "Fri", products: 510 },
    { name: "Sat", products: 700 },
  ],
};
export const chartBoxRevenue = {
  color: "#9AD0C2",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$82.421",
  dataKey: "revenue",
  percentage: 62,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 580 },
    { name: "Tue", revenue: 612 },
    { name: "Wed", revenue: 783 },
    { name: "Thu", revenue: 690 },
    { name: "Fri", revenue: 750 },
    { name: "Sat", revenue: 942 },
  ],
};
export const chartBoxConversion = {
  color: "#F05941",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "7.6",
  dataKey: "ratio",
  percentage: 48,
  chartData: [
    { name: "Sun", ratio: 380 },
    { name: "Mon", ratio: 420 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 400 },
    { name: "Thu", ratio: 700 },
    { name: "Fri", ratio: 380 },
    { name: "Sat", ratio: 750 },
  ],
};

// Bar Chart Box Data
export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#83A2FF",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 7700,
    },
    {
      name: "Mon",
      profit: 3200,
    },
    {
      name: "Tue",
      profit: 4500,
    },
    {
      name: "Wed",
      profit: 3420,
    },
    {
      name: "Thu",
      profit: 5210,
    },
    {
      name: "Fri",
      profit: 4200,
    },
    {
      name: "Sat",
      profit: 6320,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#9AD0C2",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 6210,
    },
    {
      name: "Mon",
      visit: 3410,
    },
    {
      name: "Tue",
      visit: 4100,
    },
    {
      name: "Wed",
      visit: 3780,
    },
    {
      name: "Thu",
      visit: 4290,
    },
    {
      name: "Fri",
      visit: 5090,
    },
    {
      name: "Sat",
      visit: 7090,
    },
  ],
};

// User Data Rows
export const userRows = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/4f/77/e5/4f77e564087cc6480d5469be060e56ea.jpg",
    lastName: "Junggo",
    firstName: "Kim",
    email: "junggo@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/142/2023/09/07/LOOKISM-Chapter-465-Bahasa-Indonesia-Gimyung-Punya-Adik-2173289443.jpg",
    lastName: "Gimyung",
    firstName: "Kim",
    email: "gimyung@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://preview.redd.it/how-strong-do-you-think-daniel-park-is-now-v0-9vqomljmq7v91.png?width=385&format=png&auto=webp&s=be5bfec64c929cd696d5d8ada47ab04589472795",
    lastName: "Park",
    firstName: "Daniel",
    email: "parkDaniel@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6INTUi1FyhBGj9HlEs15On-geSX0onOOO4Q&usqp=CAU",
    lastName: "Lee",
    firstName: "Euntae",
    email: "vasco@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://preview.redd.it/l7h95bch6yy81.jpg?width=640&crop=smart&auto=webp&s=7a352c7ff91177164e86ad38a8df4b090f238bfe",
    lastName: "Jihoon",
    firstName: "Lee",
    email: "jihoonLee@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 6,
    img: "https://i.pinimg.com/736x/37/f6/ae/37f6aebb8b1836390f870e867981db17.jpg",
    lastName: "Park",
    firstName: "Daniel",
    email: "daniel@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://static.wikia.nocookie.net/dd924a19-2400-4ef3-a565-72242780f39d/scale-to-width/755",
    lastName: "Jang",
    firstName: "Eli",
    email: "elijang@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 8,
    img: "https://i.pinimg.com/736x/ef/84/12/ef8412826d16ae1fd7ae8670275c1131.jpg",
    lastName: "Kim",
    firstName: "Mira",
    email: "kimira@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://yt3.googleusercontent.com/ytc/APkrFKZYkX7YxUBB-AGbJ3DNOMejpbEXJc_rUbP9PcWI=s900-c-k-c0x00ffffff-no-rj",
    lastName: "Lee",
    firstName: "Zack",
    email: "ZckLee@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 10,
    img: "https://i.pinimg.com/736x/71/24/8a/71248ac0aed6955fb96b3fcd266e0e05.jpg",
    lastName: "Kim",
    firstName: "Mary",
    email: "mykim@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://pm1.aminoapps.com/6676/9d45d5ce03da9c2b1aa0dbc388353fc0688f0364_hq.jpg",
    lastName: "Choi",
    firstName: "Crystal",
    email: "crystal@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
];

// Data Products
export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

export const singleUser = {
  id: 1,
  title: "Daniel Park",
  img: "https://i.pinimg.com/736x/37/f6/ae/37f6aebb8b1836390f870e867981db17.jpg",
  info: {
    username: "DanielPark99",
    fullname: "Daniel Park",
    email: "daniel@gmail.com",
    phone: "123891928",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#39A7FF" },
      { name: "clicks", color: "#F05941" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Daniel Park purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Daniel Park added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Daniel Park purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "Daniel Park reviewed a product",
      time: "1 month ago",
    },
    {
      text: "Daniel Park added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Daniel Park reviewed a product",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#83A2FF" },
      { name: "orders", color: "#F05941" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Daniel Park purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Zack Lee added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Miru Kim purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Eli Jang reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Lee Jihoon added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Crystal Choi reviewed the product",
      time: "2 months ago",
    },
  ],
};
