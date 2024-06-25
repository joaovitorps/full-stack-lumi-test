import { PdfReader } from "pdfreader";

import db from "../db/models/index.js";

const Fatura = db.Fatura;

// const fatura = {
//   numero_cliente: "",
//   mes_referencia: "",
//   energia_eletrica: [0.0],
//   energia_sceee: [0.0],
//   energia_compensada: [0.0],
//   contrib_ilumn_publica_municipal: [0.0],
// };

function extractNumCliente(pdfText) {
  let numCliente = "";
  const a = pdfText.split(" ");
  const filtered = a.filter((a) => a !== "");
  numCliente = filtered[0];
  return numCliente;
}

function extractMesReferencia(pdfText) {
  const mesReferencia = pdfText.match(/[A-Z]{3}([/])\d{4}/g);

  return mesReferencia;
}

export function readPdf() {
  let numClienteTextLine = null;
  let mesReferenciaTextLine = [];
  let fatura = {};
  new PdfReader().parseFileItems(
    "uploads/faturas/3004298116-01-2023.pdf",
    (err, item) => {
      if (err) console.error("error:", err);
      else if (!item) {
        console.warn("end of file");
      } else if (item.text) {
        if (item.text.includes("Nº DO CLIENTE")) {
          numClienteTextLine = Math.trunc(item.y) + 1;
        }
        if (Math.trunc(item.y) == numClienteTextLine) {
          fatura.numero_cliente = extractNumCliente(item.text);
        }
        if (item.text.includes("Referente a")) {
          mesReferenciaTextLine = Math.trunc(item.y);
        }
        if (Math.trunc(item.y) === mesReferenciaTextLine) {
          fatura.mes_referencia = extractMesReferencia(item.text);
        }
      }
    }
  );
  return fatura;

  // return fatura;
}

export async function createFatura(req, res) {
  console.log(fatura);
  //   await Fatura.create();
}
