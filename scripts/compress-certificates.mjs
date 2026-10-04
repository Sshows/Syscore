import sharp from "sharp";
import { readdir } from "node:fs/promises";
for (const name of await readdir("tmp/certificates")) {
 if (!name.endsWith(".png")) continue;
 const rotations = {"investigation.png":90,"communication.png":-90,"ord.png":90,"digital-learning.png":90};
 // Mechanical preview optimization only: page orientation and empty outer margins.
 // The byte-identical PDF remains available as the authoritative original.
 await sharp(`tmp/certificates/${name}`).rotate(rotations[name] || 0).trim({threshold:12}).resize({width:1800,height:1400,fit:"inside",withoutEnlargement:true}).webp({quality:86}).toFile(`public/certificates/${name.replace(".png",".webp")}`);
}
