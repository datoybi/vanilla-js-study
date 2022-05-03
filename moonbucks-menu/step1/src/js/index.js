// 첫번째 미션 - 문벅스 카페의 에스프레소 메뉴판 만들기

// 얻은 인사이트
// 1. 이벤트 위임의 실제 사용법을 알게 되어서 좋았다.
// 2. 요구 사항을 전략적으로 세세하게 나누는게 중요하다는 걸 알게 됐다.
// 3. DOM 요소를 가져올 때 $표시를 써서 변수처럼 사용할 수 있는게 좋았다.
// 4. 새롭게 알게 된 메서드 : Element.insertAdjacentHTML()

// step1 요구사항 구현을 위한 전략
// TODO 메뉴 추가
// - [x] 메뉴의 이름을 입력 받고 엔터키를 누르면 메뉴가 추가된다.
// - [x] 메뉴의 이름을 입력받고 확인 버튼을 클릭하면 메뉴를 추가한다.
// - [x] 추가되는 메뉴의 아래 마크업은 <ul id="espresso-menu-list" class="mt-3 pl-0"></ul> 안에 삽입해야 한다.
// - [x] 총 메뉴 개수를 count하여 상단에 보여준다.
// - [x] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
// - [x] 사용자 입력값이 빈 값이라면 추가되지 않는다.

// TODO 메뉴 수정
// - [x] 메뉴의 수정에 클릭이벤트를 받으면 prompt 인터페이스를 호출한다.
// - [x] prompt창에 수정할 메뉴 명을 입력한 뒤, 확인 버튼을 누르면 메뉴가 수정된다.

// TODO 메뉴 삭제
// - [x] 메뉴 삭제 버튼 클릭 이벤트를 받으면, confirm 창을 호출한다.
// - [x] 확인 버튼을 누르면 메뉴가 삭제된다.

const $ = (selector) => document.querySelector(selector);

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
