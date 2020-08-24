    //DIVS to toggle
    var loginForm = document.querySelector(".login-wrapper").querySelector(".form-wrapper");
    var loginCollapsed = document.querySelector(".login-wrapper").querySelector(".collapsed-section");
    var signupForm = document.querySelector(".signup-wrapper").querySelector(".form-wrapper");
    var signupCollapsed = document.querySelector(".signup-wrapper").querySelector(".collapsed-section");
    var loginHide = loginCollapsed.querySelector(".hide-section");
    var signupHide = signupCollapsed.querySelector(".hide-section");

    var loginOpen = true;
    var animationDuration = 1000;
    function toggleOpen() {
      loginOpen = !loginOpen;

      //Animation
      if (window.matchMedia("(max-width: 799px)").matches) {
        //MOBILE
        if (!loginOpen) {
          signupCollapsed.style.animation = `moveCollapsedUp ${animationDuration}ms ease-in-out 0s`;
          signupHide.style.animation = `fade ${animationDuration}ms ease-in-out 0s`;
          loginForm.style.animation = `moveFormDown ${animationDuration}ms ease-in-out 0s, fade ${animationDuration}ms ease-in-out 0s`;
        }
        else {
          loginCollapsed.style.animation = `moveCollapsedDown ${animationDuration}ms ease-in-out 0s`;
          loginHide.style.animation = `fade ${animationDuration}ms ease-in-out 0s`;
          signupForm.style.animation = `moveFormUp ${animationDuration}ms ease-in-out 0s, fade ${animationDuration}ms ease-in-out 0s`;
        }
      }
      else {
        //DESKTOP
        if (!loginOpen) {
          signupCollapsed.style.animation = `moveLeft ${animationDuration}ms ease-in-out 0s`;
          signupHide.style.animation = `fade ${animationDuration}ms ease-in-out 0s`;
          loginForm.style.animation = `moveRight ${animationDuration}ms ease-in-out 0s, fade ${animationDuration}ms ease-in-out 0s`;
        }
        else {
          loginCollapsed.style.animation = `moveRight ${animationDuration}ms ease-in-out 0s`;
          loginHide.style.animation = `fade ${animationDuration}ms ease-in-out 0s`;
          signupForm.style.animation = `moveLeft ${animationDuration}ms ease-in-out 0s, fade ${animationDuration}ms ease-in-out 0s`;
        }
      }

      setTimeout(makeChanges, animationDuration);

    }

    function makeChanges() {
      //CHANGE VISIBILITY OF ALL ELEMENTS
      loginForm.classList.toggle("hidden");
      loginCollapsed.classList.toggle("hidden");
      signupForm.classList.toggle("hidden");
      signupCollapsed.classList.toggle("hidden");
      changeOrientation();

      //Remove Aniamtions
      signupCollapsed.style.animation = "none";
      signupForm.style.animation = "none";
      signupHide.style.animation = "none";
      loginCollapsed.style.animation = "none";
      loginHide.style.animation = "none";
      loginForm.style.animation = "none";
    }

    function changeOrientation() {
      if (window.matchMedia("(max-width: 799px)").matches) {
        if (loginOpen) {
          document.querySelector(".login-wrapper").style.height = "70%";
          document.querySelector(".signup-wrapper").style.height = "30%";
        }
        else {
          document.querySelector(".login-wrapper").style.height = "30%";
          document.querySelector(".signup-wrapper").style.height = "70%";
        }
      }
      else {
          document.querySelector(".login-wrapper").style.height = "100%";
          document.querySelector(".signup-wrapper").style.height = "100%";
      }
    }

    window.addEventListener("resize", changeOrientation);
    changeOrientation();
