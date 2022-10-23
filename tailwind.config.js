module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require('daisyui')],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  // theme: {
  //   screens: {
  //     // 'phone' : '320px',

  //     'laptop': '640px',
  //     // => @media (min-width: 640px) { ... }
  //   },
  // }

   
};
