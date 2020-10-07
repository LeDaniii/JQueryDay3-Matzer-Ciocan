$(document).ready(function () {
  //   $("#moveme").on("click", function () {
  //     $(this).on("mousemove", function () {
  //       console.log($(this).position());
  //       console.log($().position());
  //       $(this).css("top", $(this).position());
  //     });
  //   });
  //   $(document).on("mousemove", (e) => {
  //     currentMousePosX = e.clientX;
  //     currentMousePosY = e.clientY;
  //     console.log(currentMousePosX, currentMousePosY);
  //     $("#moveme").css({
  //       left: currentMousePosX,
  //       top: currentMousePosY,
  //     });
  //   });
  $("#moveme").on("click", () => {
    $(document).on("mousemove", (e) => {
      currentMousePosX = e.clientX;
      currentMousePosY = e.clientY;
      console.log(currentMousePosX, currentMousePosY);
      $("#moveme").css({
        left: currentMousePosX - 110,
        top: currentMousePosY - 110,
        position: "absolute",
      });
    });
  });
});
