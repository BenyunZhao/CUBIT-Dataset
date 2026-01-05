import fitz  # PyMuPDF
import os

def convert_pdfs_to_pngs(directory):
    for filename in os.listdir(directory):
        if filename.endswith(".pdf"):
            pdf_path = os.path.join(directory, filename)
            png_path = os.path.join(directory, filename.replace(".pdf", ".png"))
            
            print(f"Converting {pdf_path} to {png_path}...")
            
            # Open the PDF
            doc = fitz.open(pdf_path)
            # Get the first page
            page = doc.load_page(0)
            
            # Render page to a pixmap (image)
            # Increase zoom for better quality (2.0 = 2x resolution)
            zoom = 2.0
            mat = fitz.Matrix(zoom, zoom)
            pix = page.get_pixmap(matrix=mat)
            
            # Save the pixmap as PNG
            pix.save(png_path)
            doc.close()
            print(f"Successfully saved {png_path}")

if __name__ == "__main__":
    target_dir = "public/images"
    convert_pdfs_to_pngs(target_dir)
