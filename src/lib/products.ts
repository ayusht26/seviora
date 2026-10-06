export type Product = {
  name: string;
  generic: string;
  cat: string;
  form: string;
  pack: string;
  tag: string;
};

export const CATEGORIES = [
  "All",
  "Pharmaceuticals",
  "Nutraceuticals",
  "Consumables",
  "Diagnostics",
] as const;

export const PRODUCTS: Product[] = [
  { name: "Cefsev-500", generic: "Cefuroxime Axetil 500 mg", cat: "Pharmaceuticals", form: "Tablet · Alu-Alu", pack: "10 × 10 strip", tag: "Rx" },
  { name: "Amoxysev 500", generic: "Amoxicillin 500 mg", cat: "Pharmaceuticals", form: "Capsule", pack: "10 × 10 strip", tag: "Rx" },
  { name: "Azysev-500", generic: "Azithromycin 500 mg", cat: "Pharmaceuticals", form: "Tablet · Alu-Alu", pack: "3 × 10 strip", tag: "Rx" },
  { name: "Pantosev-40", generic: "Pantoprazole 40 mg (enteric-coated)", cat: "Pharmaceuticals", form: "Tablet · EC", pack: "10 × 14 strip", tag: "Rx" },
  { name: "Sevidol 650", generic: "Paracetamol 650 mg", cat: "Pharmaceuticals", form: "Tablet", pack: "10 × 14 strip", tag: "OTC" },
  { name: "Metforsev 500", generic: "Metformin HCl 500 mg", cat: "Pharmaceuticals", form: "Tablet · film-coated", pack: "10 × 15 strip", tag: "Rx" },
  { name: "Telmisev-40", generic: "Telmisartan 40 mg", cat: "Pharmaceuticals", form: "Tablet", pack: "10 × 14 strip", tag: "Rx" },
  { name: "Sevibact-CV 625", generic: "Amoxicillin 500 mg + Clavulanic Acid 125 mg", cat: "Pharmaceuticals", form: "Tablet · Alu-Alu", pack: "10 × 10 strip", tag: "Rx" },
  { name: "Sevi-D3 60K", generic: "Cholecalciferol 60,000 IU", cat: "Nutraceuticals", form: "Softgel capsule", pack: "Box of 4 softgels", tag: "OTC" },
  { name: "Calcisev-D3", generic: "Calcium Carbonate 500 mg + Vitamin D3 250 IU", cat: "Nutraceuticals", form: "Tablet", pack: "10 × 15 strip", tag: "OTC" },
  { name: "Sevimust", generic: "Multivitamin & multimineral", cat: "Nutraceuticals", form: "Softgel capsule", pack: "10 × 10 strip", tag: "OTC" },
  { name: "Nitrile Examination Gloves", generic: "Non-sterile, powder-free", cat: "Consumables", form: "Nitrile", pack: "Box of 100 (S–XL)", tag: "General" },
  { name: "3-Ply Surgical Masks", generic: "Type IIR · ≥ 98% BFE", cat: "Consumables", form: "3-ply · earloop", pack: "Box of 50", tag: "General" },
  { name: "Disposable Syringe 5 ml", generic: "Luer-lock, 21 G needle", cat: "Consumables", form: "Sterile · single-use", pack: "Box of 100", tag: "General" },
  { name: "IV Cannula 20 G", generic: "With injection port & wings", cat: "Consumables", form: "Sterile · single-use", pack: "Box of 50", tag: "General" },
  { name: "PPE Kit", generic: "Coverall, shoe covers, cap & masks", cat: "Consumables", form: "Kit · single-use", pack: "Pack of 10 kits", tag: "General" },
  { name: "SevioCheck Glucometer", generic: "Blood glucose monitoring system", cat: "Diagnostics", form: "Device + 25 strips", pack: "Kit", tag: "OTC" },
  { name: "Fingertip Pulse Oximeter", generic: "SpO₂ & pulse-rate monitor", cat: "Diagnostics", form: "Device", pack: "Unit", tag: "OTC" },
];

