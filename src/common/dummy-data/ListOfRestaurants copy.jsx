//preferencesList = ["Healthy", "Greasy", "Cheesy", "Vegetarian", "Vegan", "Meat lover", "Gourmand", "Gourmet", "Gluten free"];

const restaurant = [
  {
    id: "1",
    name: "Restaurant Name 1",
    imageSource: "https://randompicturegenerator.com/img/car-generator/g9616fc8cd93b5012465c80487bca207748ff921a9a499a227fd3daf03b47e558b1ed2c44aa0de649f489e73485010229_640.jpg",
    preferences: "Healthy",
    // preferences: ["Healthy", "Greasy", "Gourmand"],
  },
  {
    id: "2",
    name: "Restaurant Name 2",
    imageSource: "https://randompicturegenerator.com/img/car-generator/g30ca8483cddcc8536f093ca5a80e4e17d7e49eab202dd29bfecab6fb6bc37e92e1b27cd4f6ea693ba94a2de8fc455426_640.jpg",
    preferences: "Greasy",
    // preferences: ["Healthy", "Cheesy"],
  },
  {
    id: "3",
    name: "Restaurant Name 3",
    imageSource: "https://randompicturegenerator.com/img/car-generator/g478676389277ddfc8c501112a4d680ca41a3169e3513c9b6ee548b51faaa2c111c02b99d35520dc5237baccec7f67be8_640.png",
    preferences: "Cheesy",
    // preferences: ["Healthy", "Vegetarian"],
  },
  {
    id: "4",
    name: "Restaurant Name 4",
    imageSource: "https://randompicturegenerator.com/img/car-generator/g06d7c4c9278029ba49885e97e8be06ea5da7488f521d67ea0ecb388d504e73378af016489c49ddea86a1bde5b5c4dbe8_640.jpg",
    preferences: "Vegetarian",
  },
  {
    id: "5",
    name: "Restaurant Name 5",
    imageSource: "https://randompicturegenerator.com/img/car-generator/g3390161cfd4f0ef83b36447cfc716c0cd62a919f2f22a7ad6af5b697494c804c48312f297bc6d9dd81b5789c6110fbfa_640.jpg",
    preferences: "Vegan",
  },
  {
    id: "6",
    name: "Restaurant Name 6",
    imageSource: "https://randompicturegenerator.com/img/car-generator/gd4bacbd6972d21d93a99ef3e16e8a577bb49f3ad917acf3eefa98ee44b6acb90a055cf53d852f38005d878209ecb23d8_640.jpg",
    preferences: "Meat lover",
  },
  {
    id: "7",
    name: "Restaurant Name 7",
    imageSource: "https://randompicturegenerator.com/img/car-generator/g4d1c879a6da5a78caef9f1c01a14286fe8178ed6d469708ffae2c064be5942e977145da83019076285ae398124796792_640.jpg",
    preferences: "Gourmand",
  },
  {
    id: "8",
    name: "Restaurant Name 8",
    imageSource: "https://randompicturegenerator.com/img/car-generator/g629bb1dc881ba4d6fe895d6432d456be55f92fe063cfc843b3a82b07bf29302fd63dbfc1df5ccc98669f5ae4eb833549_640.jpg",
    preferences: "Gourmet",
  },
  {
    id: "9",
    name: "Restaurant Name 9",
    imageSource: "https://randompicturegenerator.com/img/car-generator/g3f3c8f4af303d1723f5d5e2f3050e53373d2708f67a2db6ae4e920d6e88c8242790303c2abea53e744b1b690e79613e5_640.jpg",
    preferences: "Gluten free",
  },
  {
    id: "10",
    name: "Restaurant Name 10",
    imageSource: "https://randompicturegenerator.com/img/car-generator/g2289421c8d591f28a08f9b41571711c66bdaf09502db05659a87cb977f6cf48ea3bd5a24df823fcc3e0623c8974690ba_640.jpg",
    preferences: "Meat lover",
  },
  {
    id: "11",
    name: "Restaurant Name 11",
    imageSource: "https://randompicturegenerator.com/img/car-generator/g15d63ac8ce9e4b4b2656725963ea8fa8d264ace5d6281b5793554d081fffafce948137e3b1293670a9ab2d931bff194d_640.png",
    preferences: "Gourmand",
  },
  {
    id: "12",
    name: "Restaurant Name 12",
    imageSource: "https://randompicturegenerator.com/img/car-generator/g60484024736433d51b312f5756e1d8a2a6138c9a1389b828dd78b4dd231af3e9420f4974587763c4312a7fced92821de_640.png",
    preferences: "Vegetarian",
  },
  {
    id: "13",
    name: "Restaurant Name 13",
    imageSource: "https://randompicturegenerator.com/img/car-generator/g99890926c288de5fb5645689abb43ac824db90a0b87237624a8a42359df21c9ac87c7f0cdb3311eab1132f3cec6cdaaf_640.jpg",
    preferences: "Greasy",
  },
  {
    id: "14",
    name: "Restaurant Name 14",
    imageSource: "https://randompicturegenerator.com/img/car-generator/g74a520657acb7a40078320fb19437ad30a1ac140c000aed89839d1ae25563d38f8f4770e0c5916b678b863ce27403144_640.png",
    preferences: "Gourmand",
  },
  {
    id: "15",
    name: "Restaurant Name 15",
    imageSource: "https://randompicturegenerator.com/img/car-generator/g312a1db9dd11930ce7698981e6f1353258fa24ff7faae68e148ffdd4b16d18e958e78de6751cd7df595657572cb372c9_640.jpg",
    preferences: "Vegetarian",
  },
  {
    id: "16",
    name: "Restaurant Name 16",
    imageSource: "https://randompicturegenerator.com/img/car-generator/g9bb86129888f745636e5fbecad664a4876b527558d4ce0f9597fe74f9c5bcadff217f28765325333a0101074ec31d64f_640.jpg",
    preferences: "Greasy",
  },
  {
    id: "17",
    name: "Restaurant Name 17",
    imageSource: "https://randompicturegenerator.com/img/car-generator/g7fc3a09598639f740c4f4439cecc4c8552915c8dacd5dd819b51bb48d16e135212ebf723e097507e90233544ddc1f9ab_640.jpg",
    preferences: "Meat lover",
  },
  {
    id: "18",
    name: "Restaurant Name 18",
    imageSource: "https://randompicturegenerator.com/img/car-generator/gb3083ca3738f70532f10fe2b0b454a02e8bf975e9bdf3094163e0ec8fd210b47fda787eb6844712c77535d93e9f0f6e9_640.png",
    preferences: "Gourmand",
  },
  {
    id: "19",
    name: "Restaurant Name 19",
    imageSource: "https://randompicturegenerator.com/img/car-generator/g23b99b85b43dd8b48b36b4e0ff699fc14eac7196cf36343bfccf8c928ede993e180cf070794c73a9f051606603f1a216_640.jpg",
    preferences: "Greasy",
  },
  {
    id: "20",
    name: "Restaurant Name 20",
    imageSource: "https://randompicturegenerator.com/img/car-generator/gb3083ca3738f70532f10fe2b0b454a02e8bf975e9bdf3094163e0ec8fd210b47fda787eb6844712c77535d93e9f0f6e9_640.png",
    preferences: "Meat lover",
  },
];

export default restaurant;
