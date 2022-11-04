document.write("<br> BREAK <br>");
for (let i = 0; i <= 10; i++) {
  document.write(`Break ${i} <br>`);
  if (i == 5) {
    break;
  }
}

document.write("<br> CONTINUE <br>");
for (let j = 0; j <= 10; j++) {
  if (j <= 7) {
    continue;
  }
  document.write(`Continue ${j} <br>`);
}
