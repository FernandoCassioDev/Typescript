try {
  const resultado = converte(123);

  console.log(resultado);
} catch (error: any) {
  if (error instanceof TypeError)
    console.error(
      "\nVocê digitou um tipo errado. Digite o tipo de dado correto e tente novamente!"
    );
  else console.log("Erro inesperado! contate o adminitrador do sistema.");
}finally{
    console.log("\nFim do código!")
}

export function converte(conteudo: any): string {
  return conteudo.toUpperCase();
}
