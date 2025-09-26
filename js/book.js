async function fetchBooks(query) {
    const REST_API_KEY = "effe8759732b4bce8583899a92550ee0"
    const params = new URLSearchParams({
        target: "title",
        query,
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`
        }
    });

    // if (!response.ok) {
    //     throw new Error(`HTTP 오류: ${response.status}`);
    // }

    return response.json();
}

async function bookData() {
    try {
        const querys = ["자바스크립트"];

        for (const q of querys) {
            const data = await fetchBooks(q);
            console.log(data);

            // .box 요소 전체 선택
            const boxElements = document.querySelectorAll(".newSwiper .swiper-slide");

            // documents 데이터를 각 box에 대응하여 렌더링
            boxElements.forEach((box, i) => {
                const doc = data.documents[i];

                if (!doc) return; // 데이터가 부족할 경우 생략

                // <img>
                const img = document.createElement("img");
                img.src = doc.thumbnail;
                box.appendChild(img);

                // <h3> 제목
                const h3 = document.createElement("h4");
                h3.textContent = doc.title;
                box.appendChild(h3);

                // <h6> 저자
                const h6 = document.createElement("p");
                h6.textContent = doc.authors;
                box.appendChild(h6);
            });
        }

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();
