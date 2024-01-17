
  const paragraphs = document.querySelectorAll('.sojemok span');
  let currentIndex = 0;

  function showNextParagraph() {
    if (currentIndex < paragraphs.length) {
      paragraphs[currentIndex].style.opacity = '1'; // 현재 문단을 나타내기 위해 opacity를 1로 설정
      paragraphs[currentIndex].style.transform = 'translateY(0)'; // 현재 문단을 원래 위치로 이동시키기 위해 transform을 초기화
      currentIndex++; // 인덱스를 증가하여 다음 문단으로 이동
    }
  }

  function handleScroll() {
    const triggerTop = window.innerHeight * 0.8; // 스크롤 효과가 시작할 위치를 조정할 수 있습니다.

    paragraphs.forEach((paragraph) => {
      const paragraphTop = paragraph.getBoundingClientRect().top; // 현재 문단의 상대적인 위치를 가져옴

      if (paragraphTop < triggerTop) {
        showNextParagraph(); // 현재 문단의 위치가 triggerTop보다 작으면 다음 문단을 나타냄
      }
    });
  }

  paragraphs.forEach((paragraph, index) => {
    paragraph.style.opacity = '0'; // 모든 문단을 초기에는 숨김 처리
    paragraph.style.transform = 'translateY(20px)'; // 모든 문단을 위로 20px 이동하여 숨김 처리
    paragraph.style.transition = `opacity 0.5s ease ${(index + 1) * 0.2}s, transform 0.5s ease ${(index + 1) * 0.2}s`; // 애니메이션 효과를 적용하기 위한 transition 설정, 문단마다 0.2초씩 딜레이
  });

  window.addEventListener('scroll', handleScroll); // 스크롤 이벤트를 감지하여 handleScroll 함수 호출

  function showAsideElements() {
    const aside = document.querySelector('.aside');
    const h3 = document.querySelector('.aside_h3');
    const h6 = document.querySelector('.aside_h6');
    
    const h3Top = h3.getBoundingClientRect().top;
    const h6Top = h6.getBoundingClientRect().top;
    
    const triggerTop = window.innerHeight * 0.6;
    
    if (h3Top < triggerTop) {
      aside.classList.add('show');
    }
    
    if (h6Top < triggerTop) {
      h3.classList.add('show');
      h6.classList.add('show');
    }
  }
  
  window.addEventListener('scroll', showAsideElements);
  
  