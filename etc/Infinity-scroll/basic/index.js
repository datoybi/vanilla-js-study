(() => {
  const $ul = document.querySelector("ul");
  let $li = document.querySelector("li:last-child");
  let count = $ul.children.length;

  const io = new IntersectionObserver(
    (entry, observer) => {
      console.log(entry[0].target); // 3. 마지막 target 출력
      const ioTarget = entry[0].target; // <li>3</li>

      if (entry[0].isIntersecting) {
        // 만약 교차하면
        console.log("현재 보이는 타켓", ioTarget);
        io.unobserve($li); // 현재 보이는 target 감시 취소

        $li = $ul.appendChild(document.createElement("li")); // 6. 새로운 li 추가
        $li.textContent = ++count; // 7. 새로 추가된 li 감시

        io.observe($li);
      }
    },
    {
      threshold: 0.8,
    }
  );

  io.observe($li); // 감시하기
})();
