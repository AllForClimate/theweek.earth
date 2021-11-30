module.exports = {
  images: {
    domains: [
      "lh1.googleusercontent.com",
      "lh2.googleusercontent.com",
      "lh3.googleusercontent.com",
      "lh4.googleusercontent.com",
      "lh5.googleusercontent.com",
      "lh6.googleusercontent.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "drive.theweek.earth",
          },
        ],
        permanent: false,
        destination:
          "https://drive.google.com/drive/folders/1COt1coCs0LDPvo9lVM8DI3xplCJ9-9PO?usp=sharing",
      },
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "discord.theweek.earth",
          },
        ],
        permanent: false,
        destination: "https://discord.gg/MFXg3cCMe7",
      },
    ];
  },
};
