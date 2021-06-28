const NavItem = React.forwardRef((props, ref) => {
	return (
		<a
			className={
				`lg:flex w-100% l:w-20% border-2 border-solid border-black text-black rounded-lg text-center justify-center font-body items-center h-10 lg:h-5 hover:bg-pink ` +
				props.className
			}
			href={props.href}
			onClick={props.onClick}
			ref={ref}
		>
			<span className="uppercase text-2">{props.children}</span>
		</a>
	);
});

export default NavItem;
