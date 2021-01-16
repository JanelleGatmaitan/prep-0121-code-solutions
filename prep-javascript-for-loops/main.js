var i = 0;
for (var i = 0; i < 10; i++) {
  console.log(i);
}

for (var i = 0; i < 50; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

for (var i = 0; i < 20; i += 2) {
  console.log(i);
}

for (var i = 100; i > -1; i -= 1) {
  console.log('Time till explosion: ' + i);
}
