// PROMISE
const mojaPupaJson = fetch().then((pupa123) => {
  return pupa123.json()
});
//const mojaPupaJson = fetch().then((pupa123) => pupa123.json());
mojaPupaJson.then((data) => console.log(data)) //ta linia bedzie działać z 
// DWOMA LINIJKAMI NA SAMEJ GÓRZE i z tą 
// która znajduje się bezpośrednio nad nią 

fetch()
.then((pupa123) => pupa123.json())
.then((data) => console.log(data));


// asynk i await
// to samo co te trzy linjiki wyżej 
async function MojaAsynchronicznaFunkcja(){
  const pupa123 = await fetch(); 
  const data = await pupa123.json();//json zwraca promise
  console.log(data);
}
//pupa123 jest tu odpowiedzią 
// async sprawia że ta funkcja zawsze zwraca promise