"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { useDetalhesProduto } from "@/app/hooks/useDetalhesProduto";
import { Foto } from "@/app/types/produto";

export default function Produto() {
  const { produto } = useParams();

  const { data, isPending, isError } = useDetalhesProduto(produto as string);

  if (isPending) return <h5>Carregando...</h5>;
  if (isError) return <h5>Ocorreu um erro ao carregar o produto!!!</h5>;

  return (
    <main>
      <div className="container p-5">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title mb-4 fw-light">Detalhes do produto</h5>
            {data ? (
              <>
                <h5 className="card-title mb-4 fw-bold">{data.nome}</h5>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mb-3">
                  {data.fotos.map((foto: Foto) => (
                    <Image
                      key={foto.titulo}
                      src={foto.src}
                      alt={foto.titulo}
                      width={300}
                      height={320}
                    />
                  ))}
                </div>

                <p className="card-text fw-medium">
                  Valor: R${Number(2000).toFixed(2)}
                </p>
                <p className="card-text fw-medium">
                  Descrição: {data.descricao}
                </p>
                <p className="card-text fw-medium">
                  Anunciado por: {data.usuario_id}
                </p>
              </>
            ) : (
              <h5 className="card-title mb-4 fw-bold">Carregando...</h5>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
