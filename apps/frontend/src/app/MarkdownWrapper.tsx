import ReactMarkdown from "react-markdown";

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
      components={{
        ul: ({ node, ...props }) => <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }} {...props} />,
        ol: ({ node, ...props }) => <ol style={{ paddingLeft: "1.5rem" }} {...props} />,
        li: ({ node, ...props }) => <li style={{ marginBottom: "0.3rem" }} {...props} />,
        a: ({ node, href, children, ...props }) => (
          <span>(<a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2563eb", textDecoration: "underline", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
            {...props}
          >

            {children}
          </a>)</span>
        )
      }}>
			{markdownText}
		</ReactMarkdown>
	);
};

export default MarkdownWrapper;