// *---------ВАРИАНТ 1--------//
function slugify(title) {
    title = title.toLowerCase();
    return title.toLowerCase().replace(/\s+/g, '-');
}
console.log(slugify("Arrays for begginers"));
// * ---------ВАРИАНТ 2--------//
// function slugify(title) {
//     title = title.toLowerCase();
//     const slug = title.split(' ').join('-');
//     return slug;
// }



console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
