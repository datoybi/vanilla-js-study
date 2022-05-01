// 두번째 미션 - 문벅스 카페의 메뉴판 여러개 만들기

// TODO localStorage Read/Write
// - [] localStorage에 데이터를 저장한다.
// - [] localStorage에 데이터를 읽어온다.

// TODO 카테고리별 메뉴판 관리
// - [] 에스프레소 메뉴판을 관리를 만든다.
// - [] 프라푸치노 메뉴판을 관리를 만든다.
// - [] 블랜디드 메뉴판을 관리를 만든다.
// - [] 티바나 메뉴판을 관리를 만든다.
// - [] 디저트 메뉴판을 관리를 만든다.

// TODO 페이지 접근시 최초 데이터 Read & Rendering
// - [] 페이지에 최초로 접근할 때 localStorage의 에스프레소 메뉴를 읽어온다.

// TODO 품절 상태 관리
// - [] 품절 버튼을 추가한다.
// - [] 품절 버튼에 클릭 이벤트를 주어 sold-out class를 추가한다.
// - [] 변경사항이 반영되도록 랜더링 해준다.

const $ = (selector) => document.querySelector(selector);

const store = {
  setLocalStorage(menu) {
    localStorage.setItem("menu", JSON.stringify(menu));
  },
  setLocalStorage() {
    localStorage.getItem("menu");
  },
};

function App() {
  // form 태그가 자동으로 전송되는 걸 막아준다.
  $("#espresso-menu-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const updateMenuCount = () => {
    const manuCount = $("#espresso-menu-list").querySelectorAll(
      ".menu-list-item"
    ).length;
    $(".menu-count").innerHTML = `총 ${manuCount} 개`;
  };

  const addMenuName = () => {
    if ($("#espresso-menu-name").value === "") {
      alert("값을 입력해 주세요");
      return;
    }
    const espressoMenuName = $("#espresso-menu-name").value;
    const menuItemTemplate = (espressoMenuName) => {
      return `
				<li class="menu-list-item d-flex items-center py-2">
					<span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
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
    };
    $("#espresso-menu-list").insertAdjacentHTML(
      "beforeend",
      menuItemTemplate(espressoMenuName)
    );
    updateMenuCount();
    $("#espresso-menu-name").value = "";
  };

  const updateMenuName = (e) => {
    const $menuName = e.target.closest("li").querySelector(".menu-name");
    const updatedMenuName = prompt("메뉴명을 수정하세요", $menuName.innerHTML);
    $menuName.innerHTML = updatedMenuName;
  };

  const removeMenuName = (e) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      e.target.closest("li").remove();
    }
    updateMenuCount();
  };

  $("#espresso-menu-submit-button").addEventListener("click", addMenuName);

  $("#espresso-menu-name").addEventListener("keypress", (e) => {
    if (e.key !== "Enter") return;
    addMenuName();
  });

  $("#espresso-menu-list").addEventListener("click", (e) => {
    // 이벤트 위임 사용
    if (e.target.classList.contains("menu-edit-button")) {
      updateMenuName(e);
    }
    if (e.target.classList.contains("menu-remove-button")) {
      removeMenuName(e);
    }
  });
}

App();
