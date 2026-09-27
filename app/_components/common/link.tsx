interface LinkProps {
	href: string;
	children?: React.ReactNode;
}

export function Link({ href, children }: LinkProps) {
	return (
		<a
			className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
			href={href}
			target="_blank"
			rel="noreferrer noopener"
		>
			{children}
			<span className="sr-only"> (opens in a new tab)</span>
		</a>
	);
}
