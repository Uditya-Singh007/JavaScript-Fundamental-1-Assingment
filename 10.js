let a= [1,2,-3,5,-9,-8,-7,7];

for (let i=0;i<a.length;i++){
  if (a[i] <0) {
    continue;
  }
  console.log(a[i]);
}