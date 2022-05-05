const BASE_URL = "http://localhost:3000/api";

const HTTP_METHOD = {
	POST(data) {
		return {
			method: "POST",
			headers: {
        "Content-Type": "application/json",
			},
			body: JSON.stringify({ name }),
		}
	}
}

const request = (url, option) => {
	const response = await fetch(url, option);
	if(!response.ok) {
		alert("에러가 발생했습니다.");
		console.error(e);
	}
}

const MenuApi = {
  async getAllMenuCateory(category) {
		return request(`${BASE_URL}/category/${category}/menu`);
  },

  async createMenu(name, category) {
    const response = await fetch(`${BASE_URL}/category/${category}/menu`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    if (!response.ok) {
      alert("에러가 발생했습니다.");
      console.error("createMenu Error");
    }
  },

  async updateMenu(name, category, id) {
    const response = await fetch(
      `${BASE_URL}/category/${category}/menu/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, name, isSoldOut: false }),
      }
    );
    if (!response.ok) {
      console.error("updateMenu Error");
    }
  },

  async toggleSoldOutMenu(category, id) {
    const response = await fetch(
      `${BASE_URL}/category/${category}/menu/${id}/soldout`,
      {
        method: "PUT",
      }
    );
    if (!response.ok) {
      console.error("soldOutMenu Error");
    }
  },

  async deleteMenu(category, id) {
    const response = await fetch(
      `${BASE_URL}/category/${category}/menu/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      console.error("deletMenu Error");
    }
  },
};

export default MenuApi;
