// 세번째 미션 - 서버와의 통신을 통해 메뉴 관리하기
//https://github.com/blackcoffee-study/moonbucks-menu

// 회고
// 리펙토링이 굉장히 인상깊었다.
// async await 싱글 스레드에 대한 이해

// 피드백 루프
// 다른사람의 코드 읽기
// 코드 리뷰 - 10분간 코드 복귀후 리팩토링 가능한지 

// TODO: 서버 요청 부분
// [x] 로컬에서 웹 서버를 실행시킨다.
// [x] 서버에 새로운 메뉴가 추가될 수 있도록 요청한다.
// [x] 서버에 카테고리별 메뉴리스트 불러올 수 있도록 요청한다.
// [x] 서버에 메뉴 이름을 수정할 수 있도록 요청한다.
// [x] 서버에 메뉴의 품절 상태를 토글될 수 있도록 요청한다.
// [x] 서버에 메뉴가 삭제되도록 요청한다.

// TODO: 리팩터링 부분
// [x] localStorage에 저장하는 로직은 지운다.
// [x] fetch 비동기 api를 사용하는 부분을 async await을 사용하여 구현한다.

// TODO: 사용자 경험
// [x] API 통신이 실패하는 경우에 대해 사용자가 알 수 있게 alert으로 예외처리를 진행한다.
// [x] 중복되는 메뉴는 추가할 수 없다.

import { $ } from "./utils/dom.js";
import MenuApi from "./api/index.js";

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

  this.init = async () => {
    this.menu[this.currentCategory] = await MenuApi.getAllMenuCateory(
      this.currentCategory
    );
    render();
    initEventListeners();
  };

  const render = async () => {
    this.menu[this.currentCategory] = await MenuApi.getAllMenuCateory(
      this.currentCategory
    );
    const template = this.menu[this.currentCategory]
      .map((menuItem) => {
        return `
			<li data-menu-id="${menuItem.id}" class="${
          menuItem.isSoldOut ? "sold-out" : ""
        } menu-list-item d-flex items-center py-2">
			<span class="w-100 pl-2 menu-name">${menuItem.name}</span>
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
    const manuCount = this.menu[this.currentCategory].length;
    $(".menu-count").innerHTML = `총 ${manuCount} 개`;
  };

  const addMenuName = async () => {
    if ($("#menu-name").value === "") {
      alert("값을 입력해 주세요");
      return;
    }
    const menuName = $("#menu-name").value;
    const duplicatedItem = this.menu[this.currentCategory].find(
      (menuItem) => menuItem.name === menuName
    );

    if (duplicatedItem) {
      alert("이미 등록된 메뉴입니다. 다시 입력해 주세요.");
      $("#menu-name").value = "";
      return;
    }

    await MenuApi.createMenu(menuName, this.currentCategory);
    render();
    $("#menu-name").value = "";
  };

  const updateMenuName = async (e) => {
    const menuId = e.target.closest("li").dataset.menuId;
    const $menuName = e.target.closest("li").querySelector(".menu-name");
    const updatedMenuName = prompt("메뉴명을 수정하세요", $menuName.innerHTML);

    await MenuApi.updateMenu(updatedMenuName, this.currentCategory, menuId);
    render();
  };

  const removeMenuName = async (e) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      const menuId = e.target.closest("li").dataset.menuId;
      await MenuApi.deleteMenu(this.currentCategory, menuId);
      render();
    }
  };

  const soldOutMenu = async (e) => {
    const menuId = e.target.closest("li").dataset.menuId;
    await MenuApi.toggleSoldOutMenu(this.currentCategory, menuId);
    render();
  };

  const changeCategory = (e) => {
    const isCategoryButton = e.target.classList.contains("cafe-category-name");
    if (isCategoryButton) {
      const categoryName = e.target.dataset.categoryName;
      this.currentCategory = categoryName;
      $("#categoryTitle").innerText = `${e.target.innerHTML.trim()} 메뉴 관리`;
      render();
    }
  };

  const initEventListeners = () => {
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
        return;
      }
      if (e.target.classList.contains("menu-remove-button")) {
        removeMenuName(e);
        return;
      }
      if (e.target.classList.contains("menu-soldout-button")) {
        soldOutMenu(e);
        return;
      }
    });

    $("nav").addEventListener("click", changeCategory);
  };
}

const app = new App();
app.init();
