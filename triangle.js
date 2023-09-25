/* a,b,c sonlari berilgan . Shu sonlar uchburchakning tomonlari ekanligini aniqlang.
Agar kelgan sonlar uchburchakning tomonlari bo'lsa ,true  konsolga  chiqaring,  bo'lmasa false konsolga chiqaring. */

const a = 120;
const b = 10;
const c = 20;

if (a < b + c && b < a + c && c < a + b) {
  console.log(true);
} else {
    console.log(false);
}
