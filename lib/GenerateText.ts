export function gdatetext(mf: string): string {

  const mnames = ["Adam","Nils","Johan","Mikael","Peter"]
  const fnames = ["Anna","Pia","Linda","Maria","Lena"]
  const want1 = ["en rik","en fattig","någon smart","någon dum","någon snäll","någon elak"]
  const iam = ["snygg","ful","sportig","lat","intelligent","korkad","snäll","elak","beräknande","kaotisk"]
  const promise = ["lycka","elände","erotik","klass","ordning","kaos"]

  let name: string

  if (mf === "men") {
    name = mnames[Math.floor(Math.random() * mnames.length)]
  } else {
    name = fnames[Math.floor(Math.random() * fnames.length)]
  }

  const text =
    "Jag heter " + name +
    " och jag är " + (Math.floor(Math.random() * 60) + 18) + " år gammal.\n" +
    "Jag söker " + want1[Math.floor(Math.random() * want1.length)] + " och någon som är " + iam[Math.floor(Math.random() * iam.length)] +".\n" + 
    "Jag är " + iam[Math.floor(Math.random() * iam.length)] +
    " och kan ge dig " + promise[Math.floor(Math.random() * promise.length)] + "."

  return text
}
