const New = () => {
  const counters = document.querySelectorAll(".counter");
  // console.log(counters);
  const speed = 200;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const counts = +counter.innerText;

      const inc = target / speed;

      if (counts < target) {
        counter.innerText = counts + inc;
        setTimeout(updateCount, 1);
      } else {
        counts.innerText = target;
      }
    };
    updateCount();
  });
};

export default New;