(function () {
  new fullpage("#fullpage", {
    navigation: true,
    responsiveWidth: 700,
    anchors: ["home", "test"],
    menu: "#menu",
    continuousVertical: true,
    onLeave: function (origin, destination, direction) {
      console.log("Leaving section" + origin.index);
    },
  });
})();
