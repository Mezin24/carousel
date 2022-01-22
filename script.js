const carouselItems = document.querySelectorAll('img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dots = document.querySelectorAll('.dot');

let current = 0;
const maxValue = carouselItems.length - 1;
showImgs();
selectDot();

nextBtn.addEventListener('click', () => {
  if (current === maxValue) {
    current = 0;
  } else {
    current++;
  }
  showImgs(current);
  selectDot(current);
});

prevBtn.addEventListener('click', () => {
  if (current === 0) {
    current = maxValue;
  } else {
    current--;
  }
  showImgs(current);
  selectDot(current);
});

document.querySelector('.dots').addEventListener('click', function (e) {
  const target = e.target;

  if (!target.classList.contains('dot')) return;

  const targetValue = target.getAttribute('data-target');
  showImgs(targetValue);
  selectDot(targetValue);
});

function showImgs(position = 0) {
  carouselItems.forEach(
    (item, i) => (item.style.transform = `translateX(${(i - position) * 100}%)`)
  );
}

function selectDot(num = 0) {
  dots.forEach((dot) => dot.classList.remove('active'));

  dots[num].classList.add('active');
}
