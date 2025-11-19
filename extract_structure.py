from bs4 import BeautifulSoup
import json
import re

def extract_structure(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Focus on the main content area - usually a specific ID or class in Squarespace/Webflow
    # Based on previous extraction, it seems to be 'project-item-content' or similar
    # Let's try to find the main container.
    
    # In the downloaded source, let's look for the main content wrapper.
    # Squarespace usually uses 'main' or 'article'.
    
    content_root = soup.find('article') or soup.find('main') or soup.find('div', class_='project-item-content')
    
    if not content_root:
        print("Could not find content root")
        return

    elements = []
    
    # Recursive function to traverse and flatten relevant nodes
    def traverse(node):
        if node.name in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
            text = node.get_text(strip=True)
            if text:
                elements.append({'type': 'header', 'level': node.name, 'content': text})
        elif node.name == 'p':
            text = node.get_text(strip=True)
            if text:
                elements.append({'type': 'text', 'content': text})
        elif node.name == 'img':
            src = node.get('src') or node.get('data-src')
            if src:
                elements.append({'type': 'image', 'src': src})
        elif node.name == 'div':
            # Check for specific grid/gallery classes
            if 'sqs-gallery-container' in node.get('class', []):
                imgs = node.find_all('img')
                img_srcs = [img.get('src') or img.get('data-src') for img in imgs if img.get('src') or img.get('data-src')]
                if img_srcs:
                    elements.append({'type': 'image-grid', 'images': img_srcs})
                return # Don't traverse children of gallery
            
            # Check for video wrapper
            if 'sqs-video-wrapper' in node.get('class', []):
                elements.append({'type': 'video'})
                return

        if hasattr(node, 'children'):
            for child in node.children:
                if child.name:
                    traverse(child)

    traverse(content_root)
    
    print(json.dumps(elements, indent=2))

extract_structure('mamamangos_source.html')
