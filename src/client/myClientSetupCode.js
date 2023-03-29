export default async function mySetupFunction() {
  let count = 1;
  setInterval(
    () => console.log(`You have been online for ${count++} hours.`),
    1000 * 60 * 60
  );
}
