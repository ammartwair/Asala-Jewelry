const apisEndPoint = "https://asala-jewelry-1.onrender.com/api";

async function get(url, params = {}, token = "") {
	try {
		// بناء المعاملات في العنوان (URL)
		const queryString = new URLSearchParams(params).toString();
		const fullUrl = apisEndPoint + url + (queryString ? `?${queryString}` : "");

		const response = await fetch(fullUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				...(token && { "Authorization": "Bearer " + token }) // إضافة التوكن إذا كان موجودًا
			}
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
}

async function getCategories() {
	try {
		// استدعاء API للحصول على الكاتيجوريات
		const data = await get("/categories");
		return data.categories;
	} catch (error) {
		console.error("Error fetching categories:", error);
		throw error;
	}
}

// مثال على كيفية استخدام getCategories()
(async () => {
	try {
		const categories = await getCategories();
		console.log("Categories:", categories);
	} catch (error) {
		console.error("Failed to fetch categories:", error);
	}
})();
