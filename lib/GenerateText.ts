export function gdatetext(mf: string): [string[], string[]] {

  const mnames = ["Adam","Nils","Johan","Mikael","Peter","Viktor"]
  const fnames = ["Anna","Pia","Linda","Maria","Lena","Nina"]
  const want1 = ["någon rik","någon fattig","någon smart","någon dum","någon snäll","någon elak"]
  const iam = ["snygg","ful","sportig","lat","intelligent","korkad","snäll","elak","beräknande","kaotisk"]
  const promise = ["lycka","elände","erotik","avhållsamhet","rikedom","fattigdom","ordning","kaos"]

  let name: string
  const presentation: string[] = []
  const attributes: string[] = []

  if (mf === "men") {
    name = mnames[Math.floor(Math.random() * mnames.length)]
  } else {
    name = fnames[Math.floor(Math.random() * fnames.length)]
  }

  presentation.push("Jag heter " + name)
  presentation.push(" och jag är " + (Math.floor(Math.random() * 40) + 18) + " år gammal")
  presentation.push("Jag är " + iam[Math.floor(Math.random() * iam.length)]) 
  presentation.push("Jag söker " + want1[Math.floor(Math.random() * want1.length)]) 
  presentation.push("jag vill att du är " + iam[Math.floor(Math.random() * iam.length)])
  presentation.push("och jag kommer ge dig " + promise[Math.floor(Math.random() * promise.length)]) 
  attributes.push(iam)
  attributes.push(want1)
  attributes.push(promise)

  return [presentation,attributes]
}
