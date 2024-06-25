import test from "ava";
import { readPdf } from "../../controllers/fatura.js";

test("test", (t) => {
  const pdfReader = readPdf();
  console.log(pdfReader);
  t.is(pdfReader, []);
});
