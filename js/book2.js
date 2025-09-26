async function fetchBooks(query) {
    const REST_API_KEY = "effe8759732b4bce8583899a92550ee0"
    const params = new URLSearchParams({
        target: "title",
        query,
        size:50
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

// 랭킹
async function bookData0() {
    try {
        const querys = ["유튜브",'인스타','일론머스크','골드만삭스','인공지능','생성형','빅데이터','실리콘벨리','스포츠','피','소문','결핍','긴키','개정판','1','드래곤','세상','서유기'];

        for (let i =0 ; i<querys.length;i++) {
            const data = await fetchBooks(querys[i]);
            console.log(data);

            // .box 요소 전체 선택
            const boxElements = document.querySelectorAll(".ranking .slide");
            console.log(boxElements)

            // documents 데이터를 각 box에 대응하여 렌더링
            const doc = data.documents[0];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            boxElements[i].appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h4");
            h3.textContent = doc.title;
            boxElements[i].appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("p");
            h6.textContent = doc.authors;
            boxElements[i].appendChild(h6);
          
        }

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData0();
async function bookData1() {
    try {
        const querys = ["어린왕자",'아이','워런 버핏','그림','종교','전쟁','몬스터','살인','눈물','나는','영혼','상식','빛','한국의미래','예술','지식','부자'];

        for (let i =0 ; i<querys.length;i++) {
            const data = await fetchBooks(querys[i]);
            console.log(data);

            // .box 요소 전체 선택
            const boxElements = document.querySelectorAll(".best .slide");
            console.log(boxElements)

            // documents 데이터를 각 box에 대응하여 렌더링
            const doc = data.documents[0];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            boxElements[i].appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h4");
            h3.textContent = doc.title;
            boxElements[i].appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("p");
            h6.textContent = doc.authors;
            boxElements[i].appendChild(h6);
          
        }

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData1();
// new
async function booksData() {
    try {
        const querys = ["3",'돈의속성','부의 비밀','돈의 진리','돈의 감각','부의 속성','존리','돈의법칙','경영'];

        for (let i =0 ; i<querys.length;i++) {
            const data = await fetchBooks(querys[i]);
            console.log(data);

            // .box 요소 전체 선택
            const boxElements = document.querySelectorAll(".newSwiper .swiper-slide");

            // documents 데이터를 각 box에 대응하여 렌더링
            const doc = data.documents[0];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            boxElements[i].appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h4");
            h3.textContent = doc.title;
            boxElements[i].appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("p");
            h6.textContent = doc.authors;
            boxElements[i].appendChild(h6);
          
        }

    } catch (error) {
        console.log('에러발생', error);
    }
}

booksData();

// newone
async function bookData2() {
    try {
        const querys = ["자바스크립트",'강아지','파리','경제','Ai','사랑','고양이','한강','게임'];

        for (let i =0 ; i<querys.length;i++) {
            const data = await fetchBooks(querys[i]);
            console.log(data);

            // .box 요소 전체 선택
            const boxElements = document.querySelectorAll(".newoneSwiper .swiper-slide");

            // documents 데이터를 각 box에 대응하여 렌더링
            const doc = data.documents[0];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            boxElements[i].appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h4");
            h3.textContent = doc.title;
            boxElements[i].appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("p");
            h6.textContent = doc.authors;
            boxElements[i].appendChild(h6);
          
        }

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData2();

async function bookData3() {
    try {
        const querys = ["어둠",'페스트','미래','낙원','나관중','유일한','바이오','운수','시집'];

        for (let i =0 ; i<querys.length;i++) {
            const data = await fetchBooks(querys[i]);
            console.log(data);

            // .box 요소 전체 선택
            const boxElements = document.querySelectorAll(".newtwoSwiper .swiper-slide");

            // documents 데이터를 각 box에 대응하여 렌더링
            const doc = data.documents[0];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            boxElements[i].appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h4");
            h3.textContent = doc.title;
            boxElements[i].appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("p");
            h6.textContent = doc.authors;
            boxElements[i].appendChild(h6);
          
        }

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData3();
async function bookData4() {
    try {
        const querys = ["동물",'부동산','과학','역사','오바마','신','정치','개발','코드'];

        for (let i =0 ; i<querys.length;i++) {
            const data = await fetchBooks(querys[i]);
            console.log(data);

            // .box 요소 전체 선택
            const boxElements = document.querySelectorAll(".newthreeSwiper .swiper-slide");

            // documents 데이터를 각 box에 대응하여 렌더링
            const doc = data.documents[0];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            boxElements[i].appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h4");
            h3.textContent = doc.title;
            boxElements[i].appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("p");
            h6.textContent = doc.authors;
            boxElements[i].appendChild(h6);
          
        }

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData4();
async function bookData5() {
    try {
        const querys = ["도둑",'판타지','국내','동양','구병모','프로그래밍','노인','밀수꾼','우주'];

        for (let i =0 ; i<querys.length;i++) {
            const data = await fetchBooks(querys[i]);
            console.log(data);

            // .box 요소 전체 선택
            const boxElements = document.querySelectorAll(".newnineSwiper .swiper-slide");

            // documents 데이터를 각 box에 대응하여 렌더링
            const doc = data.documents[0];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            boxElements[i].appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h4");
            h3.textContent = doc.title;
            boxElements[i].appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("p");
            h6.textContent = doc.authors;
            boxElements[i].appendChild(h6);
          
        }

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData5();
async function bookData6() {
    try {
        const querys = ["이별",'밀실','피넛','초콜릿','과자','우리','지도','사회','혁신'];

        for (let i =0 ; i<querys.length;i++) {
            const data = await fetchBooks(querys[i]);
            console.log(data);

            // .box 요소 전체 선택
            const boxElements = document.querySelectorAll(".newfourSwiper .swiper-slide");

            // documents 데이터를 각 box에 대응하여 렌더링
            const doc = data.documents[0];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            boxElements[i].appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h4");
            h3.textContent = doc.title;
            boxElements[i].appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("p");
            h6.textContent = doc.authors;
            boxElements[i].appendChild(h6);
          
        }

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData6();
async function bookData7() {
    try {
        const querys = ["보수",'노동','금리','기업','반도체','채식','분배','자유','중국'];

        for (let i =0 ; i<querys.length;i++) {
            const data = await fetchBooks(querys[i]);
            console.log(data);

            // .box 요소 전체 선택
            const boxElements = document.querySelectorAll(".newfiveSwiper .swiper-slide");

            // documents 데이터를 각 box에 대응하여 렌더링
            const doc = data.documents[0];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            boxElements[i].appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h4");
            h3.textContent = doc.title;
            boxElements[i].appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("p");
            h6.textContent = doc.authors;
            boxElements[i].appendChild(h6);
          
        }

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData7();
async function bookData8() {
    try {
        const querys = ["자바",'강','시한부','회계','지리','숫자','총','불','사피엔스'];

        for (let i =0 ; i<querys.length;i++) {
            const data = await fetchBooks(querys[i]);
            console.log(data);

            // .box 요소 전체 선택
            const boxElements = document.querySelectorAll(".newsixSwiper .swiper-slide");

            // documents 데이터를 각 box에 대응하여 렌더링
            const doc = data.documents[0];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            boxElements[i].appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h4");
            h3.textContent = doc.title;
            boxElements[i].appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("p");
            h6.textContent = doc.authors;
            boxElements[i].appendChild(h6);
          
        }

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData8();
async function bookData9() {
    try {
        const querys = ["사피엔스",'진보','일본','차가운','자본주의','미국','유전자','삼국지','문명'];

        for (let i =0 ; i<querys.length;i++) {
            const data = await fetchBooks(querys[i]);
            console.log(data);

            // .box 요소 전체 선택
            const boxElements = document.querySelectorAll(".newsevenSwiper .swiper-slide");

            // documents 데이터를 각 box에 대응하여 렌더링
            const doc = data.documents[0];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            boxElements[i].appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h4");
            h3.textContent = doc.title;
            boxElements[i].appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("p");
            h6.textContent = doc.authors;
            boxElements[i].appendChild(h6);
          
        }

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData9();
async function bookData10() {
    try {
        const querys = ["날씨",'산','해리포터','반지','돈키호테','이상한','장화','공주','코스모스'];

        for (let i =0 ; i<querys.length;i++) {
            const data = await fetchBooks(querys[i]);
            console.log(data);

            // .box 요소 전체 선택
            const boxElements = document.querySelectorAll(".neweightSwiper .swiper-slide");

            // documents 데이터를 각 box에 대응하여 렌더링
            const doc = data.documents[0];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            boxElements[i].appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h4");
            h3.textContent = doc.title;
            boxElements[i].appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("p");
            h6.textContent = doc.authors;
            boxElements[i].appendChild(h6);
          
        }

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData10();
async function bookData11() {
    try {
        const querys = ['여름','봄','가을'];

        for (let i =0 ; i<querys.length;i++) {
            const data = await fetchBooks(querys[i]);
            console.log(data);

            // .box 요소 전체 선택
            const boxElements = document.querySelectorAll(".eventshow");

            // documents 데이터를 각 box에 대응하여 렌더링
            const doc = data.documents[0];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            boxElements[i].appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h4");
            h3.textContent = doc.title;
            boxElements[i].appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("p");
            h6.textContent = doc.authors;
            boxElements[i].appendChild(h6);
          
        }

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData11();

