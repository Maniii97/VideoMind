const convertMarkdownToHtml = (markdown) => {
  // Replace headings (e.g., # Heading)
  let html = markdown.replace(/^(#{1,6})\s*(.*)$/gm, (match, hashes, title) => {
    const level = hashes.length;
    return `<h${level}>${title.trim()}</h${level}>`;
  });

  // Replace bold text (e.g., **bold**)
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Replace italic text (e.g., *italic*)
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Replace strikethrough text (e.g., ~~strike~~)
  html = html.replace(/~~(.*?)~~/g, "<del>$1</del>");

  // Replace inline code (e.g., `code`)
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Replace code blocks (e.g., ```code```)
  html = html.replace(/```([a-z]*)\n([\s\S]*?)```/g, (_match: any, lang: any, code: string) => {
    const languageClass = lang ? `class="language-${lang}"` : "";
    return `<pre><code ${languageClass}>${code.trim()}</code></pre>`;
  });

  // Replace blockquotes (e.g., > Quote)
  html = html.replace(/^>\s*(.*)$/gm, "<blockquote>$1</blockquote>");

  // Replace unordered lists (e.g., * item)
  html = html.replace(/^\s*\*\s+(.*)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*?<\/li>\s*)+/g, "<ul>$&</ul>");

  // Replace ordered lists (e.g., 1. item)
  html = html.replace(/^\s*\d+\.\s+(.*)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*?<\/li>\s*)+/g, "<ol>$&</ol>");

  // Replace links (e.g., [text](url))
  html = html.replace(
    /\[(.*?)\]\((.*?)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  // Replace images (e.g., ![alt](url))
  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" />');

  // Replace horizontal rules (e.g., --- or ***)
  html = html.replace(/^(-{3,}|\*{3,})$/gm, "<hr />");

  // Replace line breaks
  html = html.replace(/\n/g, "<br />");

  return html;
};

export default convertMarkdownToHtml;
