const frutas: Set<string> = new Set<string>();

frutas.add("Caqui");
frutas.add("Manga");
frutas.add("Caqui");

console.table(frutas);

console.table(`A frita caqui existe? ${frutas.has("Caqui")}`);

frutas.delete("Caqui");

console.table(frutas);