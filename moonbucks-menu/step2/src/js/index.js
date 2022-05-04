// 두번째 미션 - 문벅스 카페의 메뉴판 여러개 만들기

// TODO localStorage Read/Write
// - [x] localStorage에 데이터를 저장한다.
// - [x] 메뉴를 추가할 때 저장
// - [x] 메뉴를 수정할 때 저장
// - [x] 메뉴를 삭제할 때 저장
// - [x] localStorage에 데이터를 읽어온다.

// TODO 카테고리별 메뉴판 관리
// - [x] 에스프레소 메뉴판을 관리를 만든다.
// - [x] 프라푸치노 메뉴판을 관리를 만든다.
// - [x] 블랜디드 메뉴판을 관리를 만든다.
// - [x] 티바나 메뉴판을 관리를 만든다.
// - [x] 디저트 메뉴판을 관리를 만든다.

// TODO 페이지 접근시 최초 데이터 Read & Rendering
// - [x] 페이지에 최초로 접근할 때 localStorage의 에스프레소 메뉴를 읽어온다.

// TODO 품절 상태 관리
// - [] 품절 버튼을 추가한다.
// - [] 품절 버튼에 클릭 이벤트를 주어 sold-out class를 추가한다.
// - [] 변경사항이 반영되도록 랜더링 해준다.

/**
 *
 * 문제상황이 뭐였 냐면 this.menu를 썼었는데 자꾸 undefined된것이다
 * 근데 보니까 new 연산자를 사용하지 않아서 인것 같은데 this 공부 다시 해봐야겠다.
 */

const $ = (selector) => document.querySelector(selector);

const store = {
  setLocalStorage(menu) {
    localStorage.setItem("menu", JSON.stringify(menu));
  },
  getLocalStorage() {
    return JSON.parse(localStorage.getItem("menu"));
  },
};

function App() {
  // 상태는 변하는 데이터, 이 앱에서 변하는 것이 무엇인가 - 메뉴명
  this.menu = {
    espresso: [],
    frappuccino: [],
    blended: [],
    teavana: [],
    desert: [],
  };

  this.currentCategory = "espresso";
  this.init = () => {
    if (store.getLocalStorage()) {
      this.menu = store.getLocalStorage();
      render();
    }
  };

  const render = () => {
    const template = this.menu[this.currentCategory]
      .map((item, index) => {
        return `
			<li data-menu-id="${index}" class="menu-list-item d-flex items-center py-2">
			<span class="w-100 pl-2 menu-name">${item.name}</span>
			<button
				type="button"
				class="bg-gray-50 text-gray-500 text-sm menu-soldout-button"
			>
				품절
			</button>
			<button
			type="button"
					class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
				>
				수정
				</button>
				<button
					type="button"
					class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
				>
					삭제
				</button>
			</li>
		`;
      })
      .join("");
    $("#menu-list").innerHTML = template;
    updateMenuCount();
  };

  const updateMenuCount = () => {
    const manuCount =
      $("#menu-list").querySelectorAll(".menu-list-item").length;
    $(".menu-count").innerHTML = `총 ${manuCount} 개`;
  };

  const addMenuName = () => {
    if ($("#menu-name").value === "") {
      alert("값을 입력해 주세요");
      return;
    }
    const menuName = $("#menu-name").value;
    this.menu[this.currentCategory].push({ name: menuName });
    store.setLocalStorage(this.menu);
    render();
    $("#menu-name").value = "";
  };

  const updateMenuName = (e) => {
    const menuId = e.target.closest("li").dataset.menuId;
    const $menuName = e.target.closest("li").querySelector(".menu-name");
    const updatedMenuName = prompt("메뉴명을 수정하세요", $menuName.innerHTML);
    this.menu[this.currentCategory][menuId].name = updatedMenuName;
    store.setLocalStorage(this.menu);
    $menuName.innerHTML = updatedMenuName;
  };

  const removeMenuName = (e) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      const menuId = e.target.closest("li").dataset.menuId;
      this.menu[this.currentCategory].splice(menuId, 1);
      store.setLocalStorage(this.menu);
      e.target.closest("li").remove();
    }
    updateMenuCount();
  };

  const soldOutMenu = (e) => {
    console.log(e.target);
  };

  $("#menu-submit-button").addEventListener("click", addMenuName);

  $("#menu-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  $("#menu-name").addEventListener("keypress", (e) => {
    if (e.key !== "Enter") return;
    addMenuName();
  });

  $("#menu-list").addEventListener("click", (e) => {
    // 이벤트 위임 사용
    if (e.target.classList.contains("menu-edit-button")) {
      updateMenuName(e);
    }
    if (e.target.classList.contains("menu-remove-button")) {
      removeMenuName(e);
    }
    if (e.target.classList.contains("menu-soldout-button")) {
      soldOutMenu(e);
    }
  });

  $("nav").addEventListener("click", (e) => {
    const isCategoryButton = e.target.classList.contains("cafe-category-name");
    if (isCategoryButton) {
      const categoryName = e.target.dataset.categoryName;
      this.currentCategory = categoryName;
      $("#categoryTitle").innerText = `${e.target.innerHTML.trim()} 메뉴 관리`;

      render();
    }
  });
}

const app = new App();
app.init();
