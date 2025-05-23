import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Renders markdown content passed as children.
 *
 * @param children markdown text to render
 */
const MarkdownWrapper = ({
	children
}: {
	children: React.ReactNode
}) => {
	const markdownText = typeof children === "string" ? children : "";
	return (
		<ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        ul: ({ node, ...props }) => <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }} {...props} />,
        ol: ({ node, ...props }) => <ol style={{ paddingLeft: "1.5rem", listStyleType: "1" }} {...props} />,
        li: ({ node, ...props }) => <li style={{ marginBottom: "0.3rem" }} {...props} />,
        strong: ({ node, ...props }) => <strong {...props} />,
        em: ({ node, ...props }) => <em {...props} />,
        a: ({ node, href, children, ...props }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgb(85, 165, 50)', textDecoration: "underline", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
            {...props}
          >

            {children}
          </a>
        )
      }}>
			{markdownText}
		</ReactMarkdown>
	);
};

export default MarkdownWrapper;