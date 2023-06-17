AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" }
  },
  init: function () {
    this.handleClickEvents();
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },
  handleClickEvents: function () {
    //Cursor 'click' Events
    this.el.addEventListener("click", evt => {
      const comicsContainer = document.querySelector("#comics-container");
      const { state } = comicsContainer.getAttribute("comic");

      if (state === "comics-list") {
        const id = this.el.getAttribute("id");
        const comicsId = [
          "avengers",
          "avengers2",
          "iron-man",
          "spider-man"
        ];
        if (comicsId.includes(id)) {
          comicsContainer.setAttribute("comic", {
            state: "view",
            selectedCard: id
          });
        }
      }
    });
  },
  handleComicsListState: function () {
    const id = this.el.getAttribute("id");
    const comicsId = ["avengers", "avengers2", "iron-man", "spider-man"];
    if (comicsId.includes(id)) {
      const comicsContainer = document.querySelector("#comics-container");
      comicsContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "yellow",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    //Cursor 'mouseenter' Events
    this.el.addEventListener("mouseenter", () => {
      this.handleComicsListState();
    });
  },
  handleMouseLeaveEvents: function () {
    //Cursor 'mouseleave' Events
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", {
            color: "black",
            opacity: 1,
          });
        }
      }
    });
  },

});