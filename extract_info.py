import fitz
import sys

def extract_text(pdf_path, search_terms):
    doc = fitz.open(pdf_path)
    results = []
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        text = page.get_text()
        for term in search_terms:
            if term.lower() in text.lower():
                results.append(f"--- Page {page_num + 1} ({pdf_path}) ---\n{text}")
                break
    doc.close()
    return results

if __name__ == "__main__":
    terms = ["evaluation", "metric", "mAP", "accuracy", "protocol", "task"]
    
    inseg_results = extract_text("CUBIT-Inseg.pdf", terms)
    with open("inseg_extract.txt", "w") as f:
        f.write("\n".join(inseg_results[:10])) # limit to first 10 matches for context
        
    aic_results = extract_text("CUBIT-AIC.pdf", terms)
    with open("aic_extract.txt", "w") as f:
        f.write("\n".join(aic_results[:10]))
