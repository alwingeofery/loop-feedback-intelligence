import Papa from "papaparse";

// CSV parsing helper for bulk feedback upload.
export function parseCsv<T>(csvText: string): T[] {
  const result = Papa.parse<T>(csvText, {
    header: true,
    skipEmptyLines: true
  });

  return result.data;
}

